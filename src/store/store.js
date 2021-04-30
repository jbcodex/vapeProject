import Vue from 'vue'
import Vuex from 'vuex'
import api from '../config/api';
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
      products: [],
        category:[
        {
            icon: 'mdi-badge-account',
            category: [
              { title: 'Vaporesso', to:'/categoria/vaporizadores', _id: '46564asdaskdj'},
              { title: 'Smoke', to: 'categoria/vaporizadores/smoke' },
              { title: 'Geek Vape', to:'categoria/vaporizadores/geek-vipe' }
              ],
            title: 'Vaporizadores',
          },
          {
            icon: 'mdi-bag-carry-on',
            category: [
              { title: 'Pod Systems', to:'/categoria/vapes/pod-systems'},
              { title: 'Pod Mods', to:'/categoria/vapes/pod-mods' },
              { title: 'Box Mod Kit', to:'/categoria/vapes/box-mod-kit' },
              { title: 'Descartáveis', to:'/categoria/vapes/descartaveis' },
            ],
            title: 'Vapes',
          },
          {
            icon: 'mdi-baby-bottle',
            category: [
              { title: 'NicSalt', to:'/categoria/juices/nic-salt' },
              { title: 'FreeBase', to:'/categoria/juices/free-base' },
              { title: 'Mad Man', to:'/categoria/juices/mad-man' },
              ],
            title: 'Juices',
          },
          {
            icon: 'mdi-doorbell',
            category: [
              {title: 'Vaporesso', to:'/categoria/coils/coil-vaporesso'},
              {title: 'Smoke', to:'/categoria/coils/smoke'},
              ],
            title: 'Coils',
          },
          {
            icon: 'mdi-gas-cylinder',
            category: [
              { title: 'Wotofo', to:'/categoria/atomizador/atomizador-wotofo' }
              ],
            title: 'Atomizador',
          },
          {
            icon: 'mdi-battery-50',
            category: [
              { title: 'Baterias', to:'/categoria/baterias' },
              { title: 'Carregadores', to:'/categoria/baterias/carregadores' },
              ],
            title: 'Baterias',
          },
          {
            icon: 'mdi-square',
            category: [
              { title: 'Capa protetora', to:'/categoria/acessorios/capa-protetora' }
              ],
            title: 'Acessórios',
          },
       ],

       navLinks:[
            {id:1, icon:'mdi-home', nav:'Início', to:'/'},
            {id:2, icon:'mdi-information-outline', nav:'Sobre', to:'/sobre'},
            {id:3, icon:'mdi-phone', nav:'Contatos', to:'/contato'},
       ],
       highlights: [
        { id:1, src: require("../assets/products/vapo1.png"), navTo:'/produtos' },
        { id:2, src: require("../assets/products/vapo2.png"), navTo:'/produtos' },
        { id:3, src: require("../assets/products/vapo3.png"), navTo:'/produtos' },
       
      ],
      navCategory:[
       
      ]
    },

    mutations:{
      addPageCategory(state, payload){
        state.navCategory.push(payload)
       },

       clearNavCategory(state, payload){
        state.navCategory.push(payload)
       },
       setProducts(state, payload) {
         state.products = payload;
       }
    },
    actions: {
      async getCategories({commit}) {
        try {
          // sempre que for comunicar com uma api, de microserviço backend, deve-se criar uma action "assincrona", 
          // para leitura de dados ou obter dados do backend, devese importar a instancia global do axios pré - configurado e utilizar o metodo get, normalmente se passa um id, ou a url vazia no get apenas
          // para criação de um item ou produto por exemplo, deve-se usar o post, passando os params da url e um data, esse data sao os dados que irão perssistir no backend depois da url
          // para atualizar um item usa-se o metodo "put", normalmente utilizasse o id do documento a ser atualizado na url mais os dados depois da url como parametro
          // para deleção utiliza-se o metodo "delte", normalmente passando o id do item a ser deletado na url
          const { data } = await api.get();
          // o commit extraido da action, usa-se para instanciar uma mutation e passar os dados para ela vindos da requisição feita anteriormente, assim setando os dados recebidos no estado que é manipulado pela mutation
          commit('setProducts', data);

        }catch(error) {
          console.log(error);
        }
      }
    },
   
    
})