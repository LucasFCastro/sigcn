<template lang="html">
  <div class="table-responsive">
    <div class="dropdown pull-right">
      <button class="btn btn-default btn-sm dropdown-toggle" type="button" @click.prevent='menuConfig'>
        <i class="fa fa-cog" aria-hidden="true"></i>
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" id='menuConfigTable'>
        <li class="dropdown-header">Colunas visíveis</li>
        <li v-for='column in columns'>
          <a href="#">
            <label>
              <input type="checkbox" v-model='column.visible'>
              {{column.label}}
            </label>
          </a>
        </li>
      </ul>
    </div>
  <table class="table table-condensed table-bordered table-hover">
    <thead>
      <tr>
        <th v-for='column in columns' v-show='column.visible' class="sort-column" @click.prevet='sortColumn(column)'>
          <i v-if='column.field !== columnSorted' class='fa fa-sort' aria-hidden="true"></i>
          <i v-if='column.field === columnSorted' :class="{'fa fa-sort-desc': column.order == 1, 'fa fa-sort-asc': column.order == -1}" aria-hidden="true"></i>
          {{column.label}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='row in dadosPage'>
        <td v-for='column in columns' v-show='column.visible'>
          {{row[column.field]}}
        </td>
      </tr>
    </tbody>
  </table>
  <div class="pull-left">
    <form class="form-inline">
      <div class="form-group">
      Mostre
      <select class="form-control" @change.prevent='changePerPage' style="padding: 0px; id='perPage'">
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
      itens por página.
      </div>
    </form>
  </div>

  <div class="pull-right">
    <ul class="pagination" v-show='lastPage > 1'>
      <li :class="{'disabled': currentPage == 1}" v-show='lastPage > 1'><a href="" @click.prevent='changePage(currentPage-1)'>Anterior</a></li>
      <li :class="{'active': 1 == currentPage}"><a href="" @click.prevent='changePage(1)'>1</a></li>
      <li v-if='pontosInicio' class="disabled">
        <a href="#">...</a>
      </li>
      <li v-for='n in showNumberPages' :class="{'active': n == currentPage}" v-show='lastPage > 2'>
        <a href="" @click.prevent='changePage(n)'>{{n}}</a>
      </li>
      <li v-if='pontosFinal' class="disabled">
        <a href="#">...</a>
      </li>
      <li :class="{'active': lastPage == currentPage}">
        <a href="" @click.prevent='changePage(lastPage)' >{{lastPage}}</a>
      </li>
      <li :class="{'disabled': currentPage == lastPage}" v-show='lastPage > 1'><a href="" @click.prevent='changePage(currentPage+1)'>Próximo</a></li>
    </ul>
  </div>
</div>
</template>

<script>
var $ = require('jquery')
export default {
  props: {
    dados: Array,
    columns: Array
  },
  methods: {
    changePage (page) {
      this.currentPage = page
    },
    changePerPage (event) {
      this.perPage = Math.abs(event.srcElement.value)
    },
    menuConfig () {
      $('#menuConfigTable').slideToggle()
    },
    sortColumn (column) {
      this.columnSorted = column.field
      column.order = column.order * -1
      // this.dados = this.dados.sort((a, b) => {return a[column.field] - b[column.field]})
    }
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      columnSorted: ''
    }
  },
  computed:{
    total () {
      return this.dados.length
    },
    lastPage () {
      return Math.ceil(this.total / this.perPage)
    },
    dadoTo () {
      return this.lastPage > 1 ? (this.currentPage - 1) * this.perPage : 0
    },
    dadosPage () {
      return this.dados.slice(this.dadoTo, this.dadoTo + this.perPage)
    },
    pontosInicio () {
      return (this.currentPage > 4) && (this.lastPage > 7)
    },
    pontosFinal () {
      return ((this.lastPage - this.currentPage) > 4) && (this.lastPage > 7)
    },
    showNumberPages () {
      let result = []
      let inicio = 2
      let fim = this.lastPage - 1
      if (this.lastPage > 7) {
        if (this.pontosInicio) {
          if (this.lastPage - this.currentPage < 5) {
            inicio = this.lastPage - 4
          } else {
            inicio = this.currentPage - 1
          }
        }
        if (this.pontosFinal) {
          if (this.currentPage < 5) {
            fim = 5
          } else {
            fim = this.currentPage + 1
          }
        }
      }
      for (var i = inicio; i <= fim; i++) {
        result.push(i)
      }
      return result
    }
  }
}
</script>

<style lang="css">

</style>
