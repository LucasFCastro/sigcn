<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <breadcrumbs></breadcrumbs>
          <div class="row">
            <router-view></router-view>
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
import breadcrumbs from './components/dashboard/Breadcrumbs'

export default {
  name: 'app',
  components: {
    'sidebar': sidebar,
    'navbar': navbar,
    'breadcrumbs': breadcrumbs
  },
  styles: [
    require('../node_modules/bootstrap/dist/css/bootstrap.min.css'),
    require('../node_modules/font-awesome/css/font-awesome.min.css'),
    require('../node_modules/animate.css/animate.min.css'),
    require('./assets/css/custom.css')
  ]
}
</script>

<style>
</style>
