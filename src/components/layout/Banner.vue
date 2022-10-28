<template>
    <div id="box"  >
        <div class=" text-left d-flex justify-center d-xs-block pt-5" id="letreiro">
            <p class=" display-4 text-center d-none d-sm-flex" >O melhor Burger de Guaratiba</p>
            <p class="text-h2 text-center d-flex d-sm-none" >O melhor Burger de Guaratiba</p>
        
        </div>
        <div class="display-1 font-weight-thin text-center d-none d-sm-flex justify-center"  style="width:100%">
            Venha Conferir...
        </div>
        <div class="box-button d-flex justify-center pa-3 d-xs-block" >
            <router-link to="/menu" id="router-link" style="width: 100%;" >
            <v-btn block color="warning" dark class=""  style="height: 4em">
            <v-icon left>
                mdi-hamburger
            </v-icon>
                Ver Cardápio
            </v-btn>
            </router-link>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'Banner',
}
</script>

<style>
#box {
    color: white;
    width: 100%;
    padding: 0.5em;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
}

#letreiro {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 2em;
}

.box-button {
    width: 100%;

}

#router-link {
    width: fit-content;
    text-decoration: none;
    color: white;
}

@media (min-width:900px) {
    #box {
        color: white;
        height: fit-content;
        width: 30em;
    }

    #letreiro {
        display: none;
    }

}

</style>