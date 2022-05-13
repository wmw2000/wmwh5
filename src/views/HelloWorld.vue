<script setup lang="ts">
import { ref } from 'vue'
export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    specFn: {
      type: Function,
      default: noop
    }
  },

  setup: (props, context) => {
    const count = ref(0)
    const count2 = $m.vuexUser.name
  }

  // const count1 = ref(this.vuexTestVar)

})


</script>

<template>
  <p>55555</p>
</template>

<style scoped lang="scss">
p {
  font-size: 20px;
}
</style>
