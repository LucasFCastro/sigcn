<template lang="html">
  <div class="table-responsive">
    <div class="pull-right">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Pesquisar..." id="inputFilter"
          v-model='inputFilter'>
        <div class="input-group-btn">
          <button type="button" class="btn btn-default dropdown-toggle" @click.prevent='searchConfig'>
            <i class="fa fa-search" aria-hidden="true"></i>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right show-config" id='searchConfigTable'>
            <li class="dropdown-header">Pesquisar por</li>
            <li v-for='column in columns'>
              <a href="#">
                <label>
                  <input type="checkbox" v-model='column.search'>
                  {{column.label}}
                </label>
              </a>
            </li>
          </ul>
            <button class="btn btn-default dropdown-toggle" type="button" @click.prevent='eyeConfig'>
              <i class="fa fa-eye" aria-hidden="true"></i>
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right" id='eyeConfigTable'>
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

          </div><!-- /btn-group -->
        </div><!-- /input-group -->
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
            itens por página de um total <b>{{ total }}</b>.
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
var _ = require('lodash')
export default {
  props: {
    list: Array,
    columns: Array
  },
  mounted () {
    $('table').click(() => {
      $('#eyeConfigTable').slideUp()
      $('#searchConfigTable').slideUp()
    })
    $('#inputFilter').focus(() => {
      $('#eyeConfigTable').slideUp()
      $('#searchConfigTable').slideUp()
    })
  },
  methods: {
    changePage (page) {
      if (page > 0 && page <= this.lastPage) {
        this.currentPage = page
      }
    },
    changePerPage (event) {
      this.perPage = Math.abs(event.srcElement.value)
    },
    searchConfig () {
      $('#eyeConfigTable').slideUp()
      $('#searchConfigTable').slideToggle()
    },
    eyeConfig () {
      $('#searchConfigTable').slideUp()
      $('#eyeConfigTable').slideToggle()
    },
    sortColumn (column) {
      this.columnSorted = column.field
      column.order = column.order * -1
      if (column.order === 1) {
        this.orderSorted = 'desc'
      } else {
        this.orderSorted = 'asc'
      }
    }
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      columnSorted: '',
      orderSorted: '',
      inputFilter: ''
    }
  },
  computed:{
    dados () {
      let filtro = this.list
      if (this.inputFilter !== '') {
        filtro = []
        for (var i = 0; i < this.columns.length; i++) {
          let tempFiltro = []
          if (this.columns[i].search) {
            tempFiltro = _.filter(this.list, (o) => {
              return o[this.columns[i].field].toLowerCase().indexOf(this.inputFilter.toLowerCase()) > -1
            })
          }
          filtro = filtro.concat(tempFiltro)
        }
      }
      return _.orderBy(filtro, [this.columnSorted], [this.orderSorted])
    },
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
