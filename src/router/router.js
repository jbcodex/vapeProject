import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/components/home/Index.vue'
import Produto from '@/components/produto/Produto.vue'
import Produtos from '@/components/produtos/Produtos.vue'
//CATEGORIAS
import Vaporesso from '@/components/categoria/vaporizadores/Vaporesso.vue'


import Contatos from '@/components/contato/Contatos.vue'
import Sobre from '@/components/sobre/Sobre.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  linkActiveClass: 'active',
  routes:[
    {path:'/contato', component: Contatos},
    {path:'/sobre', component: Sobre},
  
    {path:'/categoria/vaporizadores/vaporesso', component: Vaporesso},
    
    {path:'/produtos', component: Produtos},
    {path:'/produto', component: Produto},
    {path:'/', component: Index}
  ]
})