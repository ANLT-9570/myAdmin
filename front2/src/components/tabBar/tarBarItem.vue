<template>
  <div class="tar-bar-item">
        <div >
          <slot name="img"></slot>
          <slot name="front"></slot>
        </div>
  </div>

</template>

<script>
export default {
name: "tarBarItem",
}
</script>

<style scoped>
.tar-bar-item{
  flex: 1;
  text-align: center;
  padding-top: 8px;
}
.tar-bar-item img{
  height: 19px;
  width: 19px;
  margin-bottom: -4px;
}
.tar-bar-item div div{
  font-size: 10px;
}
</style>