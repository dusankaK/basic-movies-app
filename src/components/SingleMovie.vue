<template>
  <div>
    <h3>
      Movie director: {{movie.director}}
      <br />
      Movie genre: {{movie.genre}}
    </h3>
    <p>{{movie.image_url}}</p>
  </div>
</template>

<script>
import { movieservice } from "../services/MovieService";
export default {
  data() {
    return {
      movie: {}
    };
  },
  created() {
    movieservice.get(this.$route.params.id).then(response => {
      this.movie = response.data;
    });
  },
};
</script>

<style scoped>
</style> 