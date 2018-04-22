import TopBar from '@/components/top-bar/top-bar.vue';
import Menu from '@/components/menu/menu.vue';
import Button from '@/components/button/button.vue';
import routes from '@/data/routes';

const menuRoutes = routes.map(route => ({ ...route, id: route.route }));

export default {
  name: 'Page',
  data () {
    return {
      isMenuVisible: false,
      routes: menuRoutes,
    };
  },
  methods: {
    closeMenu () {
      if (this.isMenuVisible) {
        this.isMenuVisible = false;
      }
    },
    showMenu () {
      if (!this.isMenuVisible) {
        this.isMenuVisible = true;
      }
    },
  },
  components: {
    TopBar,
    Menu,
    Button,
  },
  watch: {
    '$route' (to, from) {
      this.isMenuVisible = false;
    }
  }
};
