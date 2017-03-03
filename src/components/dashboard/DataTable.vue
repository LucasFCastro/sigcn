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
    <ul class="pagination">
      <li><a href="" @click.prevent='changePage(1)'>1</a></li>
      <li v-if='pontosInicio' class="disabled">
        <a href="#">...</a>
      </li>
      <li v-for='n in 5' :class="{'active': (toPage + n - 1) == currentPage}">
        <a href="" @click.prevent='changePage(toPage + n - 1)'>{{toPage + n - 1}}</a>
      </li>
      <li v-if='pontosFinal' class="disabled">
        <a href="#">...</a>
      </li>
      <li><a href="" @click.prevent='changePage(lastPage)'>{{lastPage}}</a></li>
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
      currentPage: 5
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
      return (this.currentPage - 1) * this.perPage
    },
    dadosPage () {
      return this.dados.slice(this.dadoTo, this.dadoTo + this.perPage)
    },
    pontosInicio () {
      return (this.currentPage > 7) && (this.lastPage > 9)
    },
    toPage () {
      return this.currentPage > 7 ? this.currentPage - 2 : 2
    },
    fromPage () {
      return this.toPage + 4
    },
    pontosFinal () {
      return (this.lastPage - this.fromPage) > 1
    }
  }
}
</script>

<style lang="css">

</style>
