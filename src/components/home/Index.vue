<template>
  <v-container id="container">
    <BarMenu />
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../assets/images/logo-vape.png')"
          class="my-3 hidden-lg-and-up"
          contain
          height="135"
        />

      </v-col>
      <v-carousel  cycle interval="6000" height="235" class="bg hidden-lg-and-up">
        <p>Destaques</p>
        <v-carousel-item
          v-for="(item, i) in highlights"
          :key="i"
          :src="item.src"
          :to="item.navTo" 
        >
        </v-carousel-item>
      </v-carousel>
    <p>{{navCategory}}</p>
      <v-flex justify-center>
            <v-btn elevation="0" class="purple white--text mt-3 hidden-lg-and-up btn rounded-0" to="/produtos">
            <v-icon small left color="white--text">mdi-format-list-bulleted</v-icon>
             Produtos</v-btn>
        </v-flex>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import BarMenu from '@/components/template/BarMenu.vue'
  export default {
    
    name: 'Index',
    components:{
      BarMenu
    },
    computed:mapState({
      highlights: 'highlights',
      navCategory: 'navCategory'
      
    })
  }
</script>
<style scoped>
#container{
  background-image: url('../../assets/images/smoke-bg.png');
  height:100%;
  background-size: cover;
}
.bg {
  background-color:#FFF3;
}
p{
  font-family: "Lato", sans-serif;
  color:#fff;
  margin-left: 20px;
  text-transform: uppercase;
}
.btn {
  font-family: "Lato", sans-serif;
}
p{
  position: absolute;
  left: 0;
}
</style>