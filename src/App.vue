<template>
  <v-app>
    <v-container>
      <h1 class="font-weight-bold">
        Movie
      </h1>
      <p class="font-weight-medium">
        Use this site to get your Movie
      </p>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  provide() {
    return {
      searchString: this.searchString,
    };
  },
  methods: {
    goBack() {
      this.$router.push("/search/" + this.searchString);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
