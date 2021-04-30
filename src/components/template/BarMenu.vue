<template>
  <div>
    <v-app-bar app color="purple darken-4" elevation="0">
      <v-app-bar-nav-icon
        large
        color="white"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          src="../../assets/images/logo-vipe-small.png"
          width="75"
        />
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="white">
      <v-img
        :src="require('../../assets/images/logo-vape-grey.png')"
        class="my-3 mt-5"
        contain
        height="90"
      />
      <v-divider dark></v-divider>
      <v-list nav dense>
        <v-list-item-group class="text--accent-2">
          <v-list-item v-for="page in navLinks" :key="page.id" :to="page.to">
            <v-list-item-icon>
              <v-icon>{{ page.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="navMenu">{{
              page.nav
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider dark></v-divider>
      <v-list nav dense>
        <v-list-item-title class="mt-1 ml-4">CATEGORIAS</v-list-item-title>
        <v-list-group
          v-for="item in category"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <!-- Para pusha a rota de forma dinamica, deve se passar o "to" +/  "id" vindos do backend  -->
          <v-list-item
            v-for="child in item.category"
            :key="child.title"
            :to="`${child.to}/${child._id}`"
          >
            <v-list-item-content>
              <v-flex>
                <v-icon class="mgl" right>mdi-chevron-right</v-icon>
                <span>{{ child.title }}</span>
              </v-flex>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    category: "category",
    navLinks: "navLinks",
  }),

  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style scoped>
span {
  font-size: 0.8rem;
  color: rgb(156, 135, 90);
  font-weight: bold;
}
.navMenu {
  font-size: 0.8rem;
  font-weight: bold;
}
.mgl {
  margin-left: 40px;
}
</style>