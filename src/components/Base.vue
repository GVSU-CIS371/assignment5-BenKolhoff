<template>
  <div class="baseBeverage" :style="{ backgroundColor: props.baseColor }"></div>
</template>

<script setup lang="ts">
type BaseProp = {
  baseColor: string;
};
const props = defineProps<BaseProp>();
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>