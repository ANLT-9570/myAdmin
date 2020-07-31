<template>
  <div class="tar-bar asd">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "tabBar"
}
</script>

<style scoped>
.tar-bar{
  display: flex;
  background: lightgray;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /*box-shadow: 1px 1px 1px rgb(255,255,0.5);*/
}

</style>