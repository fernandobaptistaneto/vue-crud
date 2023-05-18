
import { RouterLink } from 'vue-router';
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          Usuarios
          <RouterLink to="/usuarios/create" class="btn btn-primary float-end">
            Adicionar Usuario
          </RouterLink>
        </h4>
      </div>
      <div class="card-body">

        <table class="table table-bordered">
          <thead>
            <tr class="text-center">
              <th>ID</th>
              <th>USERNAME</th>
              <th>PASSWORD</th>
              <th>EMAIL</th>
              <!-- <th>AÇÕES</th> -->
            </tr>
          </thead>
          <tbody v-if="this.usuarios.length > 0">
            <tr v-for="(usuario, index) in this.usuarios" :key="index">
              <td>{{ usuario.id_usuario }}</td>
              <td>{{ usuario.username }}</td>
              <td>{{ usuario.password }}</td>
              <td>{{ usuario.email }}</td>
            <td>
              <!-- <RouterLink :to="{ path: `/usuarios/${usuario.id_usuario}/edit` }" class="btn btn-success">
                  Editar
                </RouterLink>
                <button type="button" class="btn btn-danger">
                              Deletar
                            </button> -->
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="6">Carregando...</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  name: 'usuario',
  data() {
    return {
      usuarios: []
    }
  },
  mounted() {
    this.getUsuario();
    // console.log('i am here')

  },
  methods: {
    getUsuario() {

      axios.get('http://localhost:3000/usuarioList').then(res => {
        this.usuarios = res.data
        // console.log(this.usuarios)
      });
    }
  },
}

</script>
