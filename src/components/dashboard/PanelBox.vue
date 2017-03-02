
<template lang="html">
  <div class="x_panel" :id='panel_id'>
    <div class="x_title">
      <ul class="x_panel_config">
        <li><a href="" @click.prevent='collapse()'><i :class='icon'></i></a></li>
        <li><a href="" @click.prevent='close()'><i class="fa fa-close"></i></a></li>
      </ul>
      <h3><slot name="title"></slot></h3>
    </div>
    <div class="x_content" :id='content_id'>
        <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
var $ = require('jquery')
export default {
  data () {
    return {
      icon: 'fa fa-chevron-up'
    }
  },
  computed: {
    panel_id () {
      return 'id-panel-' + Math.floor(Math.random() * 1000).toString()
    },
    content_id () {
      return 'id-content-' + Math.floor(Math.random() * 1000).toString()
    }
  },
  methods: {
    collapse () {
      $('#' + this.content_id).slideToggle()
      if (this.icon !== 'fa fa-chevron-up') {
        this.icon = 'fa fa-chevron-up'
      } else {
        this.icon = 'fa fa-chevron-down'
      }
    },
    close () {
      $('#' + this.panel_id).fadeOut(300)
    }
  }
}
</script>

<style lang="css">
.x_panel {
    display: block;
    width: 100%;
    padding: 10px 17px;
    display: inline-block;
    background: #fff;
    border: 1px solid #e7eaee;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    column-break-inside: avoid;
    opacity: 1;
    transition: all .2s ease;
}
.x_panel, .x_title {
    margin-bottom: 10px;
}
.x_content, .x_panel {
    position: relative;
}
.x_title {
    border-bottom: 2px solid #E6E9ED;
    padding: 1px 5px 6px;
}
ul.x_panel_config > li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline;
  text-align: left;
  padding: 2px;
  color: #C5C7CB;
}

ul.x_panel_config > li > a {
  color: #C5C7CB;
}
.x_panel_config{
  text-align: left;
  list-style: none;
  display: block;
  min-width: 20px;
  margin-right: 0;
  float: right;
  margin: 0px;
  padding-left: 0px;
}
</style>
