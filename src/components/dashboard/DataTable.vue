<template lang="html">
  <div class="table-responsive">
  <table class="table table-condensed table-bordered table-hover">
    <thead>
      <tr>
        <th v-for='column in columns'>
          {{column}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='row in datas'>
        <td v-for='cell in row'>
          {{cell}}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  props: {
    datas: Object,
    columns: Object
  }
}
</script>

<style lang="css">
</style>
