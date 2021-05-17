<template>
  <v-app>
    <v-card-actions>
      <v-flex xs12 sm6 md2>
        <v-text-field label="Movie Name" v-model="searchString"> </v-text-field>
      </v-flex>
      <v-flex class="ml-6">
        <v-btn flat small @click="searchMovie">
          <span>Search</span>
        </v-btn>
      </v-flex>
    </v-card-actions>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      searchString: "",
    };
  },
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      // this.$emit("search-string", this.searchString);
    },
  },
};
</script>
