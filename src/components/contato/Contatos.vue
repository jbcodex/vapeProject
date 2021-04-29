<template>
  <v-container id="container">
    <BarMenu />
    <v-row class="text-center">
        <v-col cols="12">
            <v-img
            :src="require('../../assets/images/logo-vape.png')"
            class="my-3"
            contain
            height="200"
            />
        </v-col>
        <v-col class="mt-2">
            <a href="https://api.whatsapp.com/send?phone=5521979986220&text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20este%20produto"> <v-icon x-large left class="white--text">mdi-whatsapp</v-icon></a>
            <a href="mailto:jarbasben@yahoo.com"><v-icon x-large left class="white--text">mdi-email-outline</v-icon></a>
            <v-icon x-large left class="white--text">mdi-facebook</v-icon>
            <a href="https://www.instagram.com/camboriuvapeshop/"><v-icon x-large left class="white--text">mdi-instagram</v-icon></a>
            <v-icon x-large @click="toHome" left class="white--text">mdi-home</v-icon>
         </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarMenu from '@/components/template/BarMenu.vue'

  export default {
    
    name: 'Contato',
    components:{
      BarMenu,
    },
    methods:{
      toHome(){
        this.$router.push({path:'/'})
      }
    }
    
  }
</script>
<style scoped>
#container{
  background-image: url('../../assets/images/smoke-bg.png');
  height:100%;
  background-size: cover;
}

p{
  font-family: "Lato", sans-serif;
  color:rgb(0, 0, 0);
  margin-left: 20px;
  
}

li{
  font-family: "Lato", sans-serif;
  list-style: none;
  float:left;
  color:rgb(41, 15, 41);
  display:block;
  margin: 3px;
     
}
</style>