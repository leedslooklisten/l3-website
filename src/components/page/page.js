import TopBar from '@/components/top-bar/top-bar.vue';
import Menu from '@/components/menu/menu.vue';

export default {
  name: 'HelloWorld',
  data () {
    return {
      isMenuVisible: false,
    };
  },
  methods: {
    showHideMenu () {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
  components: {
    TopBar,
    Menu,
  },
};
