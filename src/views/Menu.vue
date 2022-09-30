<template>
  <v-container class="menu-box" >
    <div class="menu-box-container">
        <p class="text-h5 text-center">Burgers</p>
        <HamburguerList/>
    </div>
  </v-container>
</template>

<script>
import HamburguerList from '@/components/lists/HamburguerList.vue'

export default {
    name: 'Menu',
    data() {
        return {
            
        }
    },
    components: {
        HamburguerList,
    }
}
</script>

<style>
.menu-box {
    color: white;
    display: flex;
    justify-content: center;
}

.menu-box-container {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid grey;
    padding: 1em;
    width: fit-content;
    height: fit-content;
    margin: 1em;
}

@media (max-width:600px) {
    .menu-box {
        width: 100%;
        margin: 0 !important;
        display: inline;
    }

    .menu-box-container {
        width: 100%;
        margin: 0 !important;
    }
}
</style>