<template lang="html">
	<div class="col-sm-3 col-md-2 sidebar">
		<ul class="nav nav-sidebar">
			<li v-for="item in menu" :class="item.active">
				<a :href="'#'+item.link" @click.prevent='clique(item)'>
          <i :class=item.icon aria-hidden="true"></i>
          {{item.name}}
          <span :class="[item.open ? 'fa fa-caret-down' : 'fa fa-caret-right']" v-show="item.hassub"></span>
        </a>
        <ul class="nav child-menu"  :id="'menu-'+item.id">
        <!-- <ul class="nav child-menu" v-if="item.hassub && item.active=='active'" :id="'menu-'+item.id"> -->
					<li v-for="subitem in item.submenu">
            <a :href="subitem.link">{{subitem.name}}</a>
          </li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
var $ = require('jquery')
export default {
  data () {
    return {
      menu: [
        {
          id: 0,
          active: '',
          open: false,
          name: 'Negociações',
          link: 'menu-neg',
          icon: 'fa fa-handshake-o',
          hassub: true,
          submenu: [
            {
              id: 0,
              name: 'ANS',
              link: '#'
            },
            {
              id: 1,
              name: 'Nova Cobertura',
              link: '#'
            },
            {
              id: 2,
              name: 'Renegociação',
              link: '#'
            }
          ]},
        {
          id: 1,
          active: '',
          open: false,
          name: 'Prestadores',
          link: 'menu-pres',
          icon: 'fa fa-vcard-o',
          hassub: true,
          submenu: [
            {
              id: 0,
              name: 'Todos',
              link: '#'
            },
            {
              id: 1,
              name: 'Sem Negociação',
              link: '#'
            }
          ]},
        {
          id: 2,
          active: '',
          open: false,
          name: 'Procedimentos',
          link: '#',
          icon: 'fa fa-stethoscope',
          hassub: false,
          submenu: ''
        },
        {
          id: 3,
          active: '',
          open: false,
          name: 'Ofícios',
          link: '#',
          icon: 'fa fa-file-o',
          hassub: false,
          submenu: ''
        }
      ],
      menuActive: '0'
    }
  },
  methods: {
    clique (item) {
      if (this.menuActive !== item.id) {
        $('#menu-' + this.menu[this.menuActive].id).slideUp('slow')
        this.menu[this.menuActive].open = false
        this.menu[this.menuActive].active = ''
        this.menu[item.id].active = 'active'
        this.menuActive = item.id
        $('#menu-' + item.id).slideDown('slow')
        item.open = true
      } else {
        $('#menu-' + item.id).slideToggle('slow')
        item.open = !item.open
      }
    }
  },
  mounted () {
    for (var i = 0; i < this.menu.length; i++) {
      let el = '#menu-' + this.menu[i].id
      $(el).css('display', 'none')
    }
  }
}
</script>

<style lang="css">
</style>
