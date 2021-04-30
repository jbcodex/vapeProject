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
    // para passa um parametro para a rota deve-se apos o ultimo barra de separação, adicionar : e o nome do parametro, normalmente um "id" e deve-se....
    // adicionar uma nova propriedade chamada "props: true", para que o vue reconheça que akele ultimo barra + : é um parametro dinamico
    {path:'/categoria/vaporizadores/:id', component: Vaporesso, props: true},
    
    {path:'/produtos', component: Produtos},
    {path:'/produto', component: Produto},
    {path:'/', component: Index}
  ]
})