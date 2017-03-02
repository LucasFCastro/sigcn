<template>
  <div>
  <div class="col-md-6 col-sm-6 col-xs-12">
    <panel-box>
      <div slot="title">
        Negociações em Andamento2
      </div>
      <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

  <div class="col-md-12">
    <panel-box>
      <div slot="title">
        Prestadores
      </div>
      <div slot="content">
        <data-table
          :datas='dados'
            :columns='colunas'></data-table>
      </div>
    </panel-box>
  </div>
</div>

</template>

<script>
import panelBox from './dashboard/PanelBox.vue'
import dataTable from './dashboard/DataTable.vue'
export default {
  name: 'hello',
  components: {
    'panel-box': panelBox,
    'data-table': dataTable
  },
  data () {
    return {
      dados: [
        {
          prestador: 'Hospital São Carlos',
          cnpj_cpf: '12.456.154/0023-43',
          data_base: '01/03',
          uf: 'CE'
        },
        {
          prestador: 'Hospital São Carlos',
          cnpj_cpf: '12.456.154/0023-43',
          data_base: '01/03',
          uf: 'CE'
        },
        {
          prestador: 'Hospital São Carlos',
          cnpj_cpf: '12.456.154/0023-43',
          data_base: '01/03',
          uf: 'CE'
        },
        {
          prestador: 'Hospital São Carlos',
          cnpj_cpf: '12.456.154/0023-43',
          data_base: '01/03',
          uf: 'CE'
        },
        {
          prestador: 'Hospital São Carlos',
          cnpj_cpf: '12.456.154/0023-43',
          data_base: '01/03',
          uf: 'CE'
        },
        {
          prestador: 'Hospital São Camilo',
          cnpj_cpf: '12.456.154/0023-43',
          data_base: '01/03',
          uf: 'CE'
        }
    ],
      colunas: [
        'Nome Prestador',
        'CNPJ/CPF',
        'Data Base',
        'UF'
      ]
    }
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
