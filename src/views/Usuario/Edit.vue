<template></template>

<!-- <template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Edite Usuarios</h4>
      </div>
      <div class="card-body">
        <form id="app" @submit="checkForm" action="/something" method="post">

          <ul class="alert alert-warning" v-if="errors.length">
            <li class="mb-0 ms-3" v-for="error in errors">
              {{ error }}
            </li>
          </ul>
          <div class="mb-3">
            <label for="">Username:</label>
            <input type="text" v-model="model.usuario.username" class="form-control">
          </div>
          <div class="mb-3">
            <label for="">Password:</label>
            <input type="text" v-model="model.usuario.password" class="form-control">
          </div>
          <div class="mb-3">
            <label for="">Email:</label>
            <input type="text" v-model="model.usuario.email" class="form-control">
          </div>
          <div class="mb-3">
            <button @click="updateUsuario" @submit="checkForm" class="btn btn-primary" type="button">Editar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'usuarioEdit',
  data() {
    return {
      id_usuario: '',
      errors: [],
      model: {
        usuario: {
          username: '',
          password: '',
          email: ''
        }
      }
    }
  },
  mounted() {

    // console.log(this.$route.params.id_usuario)
    this.id_usuario = this.$route.params.id_usuario
    this.getUsuarioData(this.$route.params.id_usuario);

  },
  methods: {
    getUsuarioData(id_usuario) {
      axios.get(`http://localhost:3000/usuarioId?id_usuario=${id_usuario}`).then(res => {
        console.log(res.data.username);

        this.model.usuario.username = res.data.usuario.username
        this.model.usuario.email = res.data.usuario.email
      });
    },
    updateUsuario() {
      var mythis = this;
      axios.put(`http://localhost:3000/usuarioUpdate?id_usuario=${this.id_usuario}`, this.model.usuario).then(res => {

        this.errors = [];

        // if (!res.username) {
        //   this.errors.push('Preencher Username')
        //   console.log(this.username)
        // }
        // if (!res.password) {
        //   this.errors.push('Preencher Password')
        // }
        // if (!res.email) {
        //   this.errors.push('Preencher Email')
        // }

      })
        .catch(function (error) {

          if (error.response) {
            console.log('Error', error.message);
          }
        });
    }
  }
}
</script> -->