<template>
  <v-container id="container">
    <BarMenu />
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../assets/images/logo-vape.png')"
          class="my-3"
          contain
          height="80"
        />
      </v-col>
    
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
    data() {
        return {
        
          }
   },
   computed:mapState(['navCategory']),
  

   
  }
</script>
<style scoped>
#container{

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
</style>