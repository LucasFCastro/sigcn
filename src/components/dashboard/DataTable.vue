<template lang="html">
  <div class="table-responsive">
  <table class="table table-condensed table-bordered table-hover">
    <thead>
      <tr>
        <th v-for='column in columns'>
          {{column.label}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='row in dadosPage'>
        <td v-for='column in columns'>
          {{row[column.field]}}
        </td>
      </tr>
    </tbody>
  </table>
  <div class="text-center">
    <ul class="pagination" v-show='lastPage > 1'>
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
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    dados: Array,
    columns: Array,
    perPage: Number
  },
  methods: {
    changePage (page) {
      this.currentPage = page
    }
  },
  data () {
    return {
      currentPage: 1
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
