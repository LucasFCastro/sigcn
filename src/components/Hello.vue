<template>
  <div>
    <div class="message">
      <a @click.prevent='showMessage("Mensagem de teste")' class="btn btn-primary">Mensagem</a>
    </div>
    <div class="col-md-12">
      <panel-box>
        <div slot="title">
          Prestadores
        </div>
        <div slot="content">
          <data-table
            :list='prestadores'
            :columns='colunas'
            ></data-table>
        </div>
      </panel-box>
    </div>

  <div class="col-md-6 col-sm-6 col-xs-12">
    <panel-box>
      <div slot="title">
        Negociações em Andamento4
      </div>
      <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </panel-box>
  </div>
</div>

</template>

<script>
var $ = require('jquery')
require('bootstrap-notify')

import panelBox from './dashboard/PanelBox.vue'
import dataTable from './dashboard/DataTable.vue'
export default {
  name: 'hello',
  components: {
    'panel-box': panelBox,
    'data-table': dataTable
  },
  methods: {
    showMessage (message) {
      $.notify(message,{type: 'danger'})
    }
  },
  data () {
    return {
      colunas: [
        {
          label: 'Nome do Prestador',
          field: 'fantasia',
          visible: true,
          search: true,
          order: -1
        },
        {
          label: 'CNPJ/CPF',
          field: 'cpf_cnpj',
          visible: true,
          search: false,
          order: -1
        },
        {
          label: 'Data Base',
          field: 'data_cred',
          visible: true,
          search: false,
          order: -1
        },
        {
          label: 'UF',
          field: 'UF',
          visible: true,
          search: true,
          order: -1
        }
      ]
    }
  },
  computed: {
    prestadores () {
      return this.$store.state.prestador.prestadorList
    }
  },
  created () {
    this.$store.dispatch('getPrestadores')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
