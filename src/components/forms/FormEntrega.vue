<template>
  <v-container>
    <StepperVue :value="2" :step1="true"/>
    <p class="text-h5 text-center font-weight-light rounded-pill">Preencha todos os campos!</p>
    <v-form ref="form" v-model="valid">
        <v-row justify="center">
            <v-col cols="12" sm="12" md="4">
                <v-text-field
                    v-model="cep"
                    :rules="cepRules"
                    :counter="8"
                    label="Digite o CEP (Somente números)"
                    dark
                    outlined
                    required
                    @keyup="validarCEP"
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row v-if="cepValido" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="nome"
            dark
            outlined
            label="Digite seu nome"
            required
            :rules="nomeRules"
            >
            </v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="4">
         <v-combobox
          v-model="modoPagamento"
          :items="items"
          dark
          label="Modo de Pagamento"
          required
          :rules="pagamentoRules"
          outlined
        ></v-combobox>
        </v-col>
    </v-row>

    <v-row v-if="cepValido" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="numero"
            dark
            outlined
            label="Número"
            required
            :rules="numeroRules"
            >
            </v-text-field>
        </v-col>

        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="complemento"
            dark
            outlined
            label="Complemento"
            >
            </v-text-field>
        </v-col>
    </v-row>
    <v-row v-if="cepValido" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="endereco.logradouro"
            dark
            disabled
            outlined
            label="Rua"
            filled>
            </v-text-field>
        </v-col>

        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="endereco.bairro"
            dark
            disabled
            outlined
            label="Bairro"
            filled>
            </v-text-field>
        </v-col>
    </v-row>
    <v-row v-if="cepValido" justify="center">
        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="endereco.localidade"
            dark
            disabled
            outlined
            label="Cidade"
            filled>
            </v-text-field>
        </v-col>

        <v-col cols="12" sm="12" md="4">
            <v-text-field
            v-model="endereco.uf"
            dark
            disabled
            outlined
            label="Estado"
            filled>
            </v-text-field>
        </v-col>
    </v-row>
    
        <div class="d-flex justify-space-around">
        <v-btn color="white darken-1" outlined @click="voltar()">
            <v-icon>
                mdi-menu-left
            </v-icon>
            Voltar
        </v-btn>
        <v-btn color="green darken-1" outlined @click="validate" :disabled="!valid">
            Avançar
            <v-icon>
                mdi-menu-right
            </v-icon>
        </v-btn>
        </div>
    </v-form>
  </v-container>
</template>

<script>
import router from '@/router'
import StepperVue from '../stepper/Stepper.vue'
export default {
    name: 'FormEntrega',
    data() {
        return {
            cep: null,
            cepValido: false,
            valid: false,
            nome: null,
            items: [
                'Cartão',
                'Dinheiro'
            ],
            modoPagamento: null,
            nomeRules: [
                v => !!v || 'O Nome é obrigatório!'
            ],
            pagamentoRules: [
                v => !!v || 'Escolha um modo de pagamento!'
            ],
            endereco : null,
            complemento: null,
            numero: null,
            numeroRules: [
                v => !!v || 'O Número é obrigatório!'
            ],
            cepRules: [
                v => !!v || 'CEP é obrigatório!',
                v => v.length == 8 || 'CEP deve ter 8 dígitos!',
            ]
        }
    },
    methods: {
        async validarCEP() {
            if(this.cep.length==8) {
                const req = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`)
                    const response = await req.json()
                    if(response.erro){
                        this.cepValido = false;
                    } else {
                        this.endereco = response;
                        this.cepValido = true;
                    }
            } else {
                this.endereco = null;
                this.cepValido = false;
            }
        },
        validate() {
            this.$refs.form.validate()
            if(!this.cepValido) {
                alert('Digite um CEP válido!')
            } else {
                const dadosEntrega = {
                    pagamento: this.modoPagamento,
                    numero: this.numero,
                    cep: this.cep,
                    rua: this.endereco.logradouro,
                    bairro: this.endereco.bairro,
                    cidade: this.endereco.localidade,
                    estado: this.endereco.uf,
                    complemento: this.complemento,
                    nome: this.nome,
                }
                this.$store.dispatch("addDados", dadosEntrega)
                router.push({ name: 'confirmar-dados' });
            }
        },
        voltar() {
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
            router.push({ name: 'menu' });
        }
    },
    components: {
        StepperVue,
    }
}
</script>