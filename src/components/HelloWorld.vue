<template>
  <div>
    <form v-on:submit.prevent>
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <button @click="login">Login</button>
    </form>

    <h3>All movies</h3>

    <ul v-for="(movie,index) in movies" :key="index">
      <li>
        {{movie.title}}
        <br />
        {{movie.genre}}
        <br />
        {{movie.director}}
        <br />
        <router-link :to="{ name: 'single', params: { id: movie.id }}">Single Movie</router-link><br>
      </li>
    </ul>
  </div>
</template>

<script>
 import { movieservice } from "../services/MovieService";
export default {
   data() {
    return {
      movies: [],
      email: '',
      password: ''
    };
  },
  mounted() {
    movieservice.getAll().then(response => {
      this.movies = response.data;
    });
  },

  methods: {
    login() {
      movieservice
        .login({ email: this.email, password: this.password })
        .then(r => {
          console.log("Login success", r);
          localStorage.setItem('token', r.data.token)
        });
      }
   }
}
</script>