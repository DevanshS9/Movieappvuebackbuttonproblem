<template>
  <v-app>
    <v-container>
      <v-layout wrap>
        <v-card>
          <v-list-item v-for="(item, index) in movieResponse" :key="index" mb-2>
            <v-list-item>{{ item.Title }}- {{ item.Year }}</v-list-item>
            <v-btn flat small @click="singleMovie(item.imdbID)">View</v-btn>
          </v-list-item>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import movieApi from "@/services/MovieApi";

export default {
  props: ["name"],
  data() {
    return {
      movieResponse: [],
    };
  },

  methods: {
    fetchResult(value) {
      movieApi
        .fetchMovieCollection(value)
        .then((response) => {
          if (response.Response === "True") {
            this.movieResponse = response.Search;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    },
  },
  mounted() {
    this.fetchResult(this.name);
  },
  watch: {
    name(value) {
      this.fetchResult(value);
    },
  },
};
</script>
