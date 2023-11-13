<script>
import heder_vue from '../src/components/heder.vue';
import cuadrolog from '../src/components/cuadrolog.vue';

export default { 
  components: {
    heder_vue,
    cuadrolog,
  },
}
</script>

<template>
<heder_vue></heder_vue>
<RouterView></RouterView>
</template>

<style scoped>

</style>
