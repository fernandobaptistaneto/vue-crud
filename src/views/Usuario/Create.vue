<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Usuarios</h4>
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
            <input type="password" v-model="model.usuario.password" class="form-control">
          </div>
          <div class="mb-3">
            <label for="">Email:</label>
            <input type="text" v-model="model.usuario.email" class="form-control">
          </div>
          <div class="mb-3">
            <button @click="saveUsuario" @submit="checkForm" class="btn btn-primary" type="button">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'usuarioCreate',
  data() {
    return {
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
  methods: {
    saveUsuario() {
      var mythis = this;
      axios.post('http://localhost:3000/usuarioCreate', this.model.usuario).then(res => {

        // this.errors = [];



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

        this.model.usuario = {
          username: '',
          password: '',
          email: ''
        }



      })
        .catch(function (error) {

          if (error.response) {
            console.log('Error', error.message);
          }
        });
    },
    checkForm: function (e) {
      if (this.username && this.password && this.email) {
        return true;
      }
      e.preventDefault();
    }
  }
}
</script>