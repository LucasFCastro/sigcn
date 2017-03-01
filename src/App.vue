<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Dashboard</h1>
          <div class="row">
            <view-router></view-router>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <router-view></router-view> -->
</template>

<script>
import navbar from './components/dashboard/Navbar'
import sidebar from './components/dashboard/Sidebar'

export default {
  name: 'app',
  components: {
    'sidebar': sidebar,
    'navbar': navbar
  },
  styles: [
    require('../node_modules/bootstrap/dist/css/bootstrap.min.css'),
    require('../node_modules/font-awesome/css/font-awesome.min.css'),
    require('./assets/css/custom.css')
  ]
}
</script>

<style>
</style>
