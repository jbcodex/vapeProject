<template>
  <v-container id="container">
    <BarMenu />
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../assets/images/logo-vape.png')"
          contain
          height="100"
        />
      </v-col>
      <v-col class="mt-2 white--text about">
        <div class="products">
          <v-img
            :src="require('../../assets/products/juices/juiceIceberg.png')"
            class="img"
            contain
          />

          <div class="productDescription">
            <span>Iceberg - Ice Strawberry Grape Low Mint - 60ml</span>
          </div>
          <div class="productsPrice">
            <span>R$ 79,99</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarMenu from "@/components/template/BarMenu.vue";

export default {
  name: "Sobre",
  components: {
    BarMenu,
  },
};
</script>
<style scoped>
#container {
  background-image: url("../../assets/images/smoke-bg.png");
  height: 100%;
  background-size: cover;
}

p {
  font-family: "Lato", sans-serif;
  color: rgb(0, 0, 0);
  margin-left: 20px;
}

.about {
  text-align: left;
  font-family: "Lato", sans-serif;
}

.products {
  position: relative;
}
.productDescription {
  position: absolute;
  width: 100%;
  height: 60px;
  background-color: #0009;
  margin-top: -60px;
  padding: 3px;
}
.productsPrice{
    color: rgb(51, 255, 0);
   font-family: "Lato", sans-serif;
    font-size: 2.5rem;
    background-color: #0009;
    padding: 5px;
}

.productDescription span {
  text-shadow: #000 1px 1px 1px;
  font-size: 1.2rem;
}
.img {
  position: relative;
  background-color: #fff9;
}
</style>