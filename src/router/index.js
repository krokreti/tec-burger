import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Menu from '../views/Menu.vue'
import Finalizar from '@/views/Finalizar.vue'
import HamburguerDetalhado from '../components/details/HamburguerDetalhado.vue'
import ConfirmarDados from '@/views/ConfirmarDados.vue'
import PedidoFinalizado from '@/views/PedidoFinalizado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/menu/hamburguer/:id',
    name: 'hamburguer-detalhado',
    component: HamburguerDetalhado
  },
  {
    path: '/finalizar-pedido',
    name: 'finalizar-pedido',
    component: Finalizar
  },
  {
    path: '/confirmar-dados',
    name: 'confirmar-dados',
    component: ConfirmarDados
  },
  {
    path: '/pedido-em-andamento',
    name: 'pedido-finalizado',
    component: PedidoFinalizado
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
