# rollup-plugin-vue3-svg-inline
Import svg as a component in vue3 

### Example
``` 
// A vue component 
<template>
  <account class="svg-icon" v-if="icon === 'account'"></account>
  <sign class="svg-icon" v-if="icon === 'sign'"></sign>
  <setting class="svg-icon" v-if="icon === 'setting'"></setting>
</template>

<script>
import Account from './assets/account.svg?raw'
import Sign from './assets/sign.svg?raw'
import Setting from './assets/setting.svg?raw'
export default {
  props: ['icon'],
  components: {
    Account,
    Sign,
    Setting
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
```
