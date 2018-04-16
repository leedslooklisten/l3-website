import get from 'lodash.get';

export default {
  name: 'my-button',
  data () {
    return {
      hasThing: get(this, '$slots.default', false),
    };
  },
  props: ['click'],
};

