<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-card-title>
            <div>
              <h3>{{ singleMovie.Title }}-{{ singleMovie.Year }}</h3>
              <p>{{ singleMovie.Plot }}</p>
              <h4>Actors:</h4>
              {{ singleMovie.Actors }}

              <h4>Awards:</h4>
              {{ singleMovie.Awards }}

              <p>Genre: {{ singleMovie.Genre }}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn text small @click="goBack">
              <span>Back</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";
export default {
  props: ["id", "name"],
  inject: ["searchString"],

  data() {
    return {
      singleMovie: "",
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
      // this.$router.push("/search/"+ this.searchString);
    },
  },

  mounted() {
    movieApi
      .fetchSingleMovie(this.id)
      .then((response) => {
        this.singleMovie = response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
