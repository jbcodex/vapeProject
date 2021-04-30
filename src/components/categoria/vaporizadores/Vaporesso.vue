<template>
  <v-container id="container">
    <BarMenu />
    <v-row class="text-center">
      <h5>Vizualização de produtos</h5>
      <v-col v-for="p in productsView" :key="p.id" cols="12">
        <h5>{{ p.id + " - " + p.name }}</h5>
        <v-img :src="p.image" class="my-3" contain height="80" />
        <h5>{{ p.price }}</h5>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BarMenu from "@/components/template/BarMenu.vue";
export default {
  name: "Index",
  components: {
    BarMenu,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["navCategory", "products"]),
    // para pegar o id , eu pusho a minha this.$router global, navegando pelos objetos ate chega no id da minha path atual
    paramId() {
      return this.$router.history.current.params.id;
    },
    // após executar a action no createdm devo criar um computed, fazendo um map na minha state de produtos, para que seja gerado
    // um novo array e nao modifique ou implique nada no meu estado atual, assim podendo exibilo em meu template
    productsView() {
      return this.products.map((el) => {
        return {
          name: el.name,
          image: el.image,
          id: el.id,
          price: el.price,
        };
      });
    },
  },
  methods: {
    // para utilizar a action criada no storee e passar meu id de referencia para buscar os dados,
    // dou um map action, e crio um metodo no qual executo a action passando o id criado em computed como parametro
    ...mapActions(["getCategories"]),
    async filterCategoryById() {
      await this.getCategories(this.paramId);
    },
  },
  // para executar o metodo criado que executa a action que lista os produtos, devo instancia-la no created para que os produtos sejam exibidos
  // assim que a tela for criada, sempre de forma assincrona
  async created() {
    await this.filterCategoryById();
  },
};
</script>
<style scoped>
#container {
  height: 100%;
  background-size: cover;
}
.bg {
  background-color: #fff3;
}
p {
  font-family: "Lato", sans-serif;
  color: #fff;
  margin-left: 20px;
  text-transform: uppercase;
}
</style>