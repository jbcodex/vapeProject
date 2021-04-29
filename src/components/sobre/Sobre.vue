<template>
  <v-container id="container">
    <BarMenu />
    <v-row class="text-center">
        <v-col cols="12">
            <v-img
            :src="require('../../assets/images/logo-vape.png')"
            class="my-3"
            contain
            height="150"
            />
        </v-col>
        <v-col class="mt-2 white--text about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus rhoncus magna, non euismod enim convallis vel. Integer vitae hendrerit augue. Proin placerat arcu ac est tempus, in tincidunt ante egestas. Nullam lobortis bibendum tristique. Sed scelerisque pharetra ex id tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ut justo non lectus fermentum bibendum et ac dolor. Aliquam erat volutpat. Integer in tortor et lorem ornare accumsan. 
         </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BarMenu from '@/components/template/BarMenu.vue'

  export default {
    
    name: 'Sobre',
    components:{
      BarMenu,
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



.about{
    text-align: left;
     font-family: "Lato", sans-serif;
}
</style>