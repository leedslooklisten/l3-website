import Button from '@/components/button/button.vue';
import MenuList from './menu-list/menu-list.vue';

export default {
  name: 'NavMenu',
  data () {
    return {
    };
  },
  methods: {
    onClose () {
      if (this.isVisible) {
        this.$emit('close-menu');
      }
    },
  },
  props: ['isVisible', 'items'],
  components: {
    Button,
    MenuList,
  }
};

