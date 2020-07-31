<template>
  <div id="app">

    <tab-bar>

      <tar-bar-item>
        <template v-slot:img>
          <img src="./assets/tabBar/home.svg" style="height: 19px;width: 19px;">
        </template>
        <template v-slot:front>
          <div >首页</div>
        </template>
      </tar-bar-item>

      <tar-bar-item>
        <template v-slot:img>
          <img src="./assets/tabBar/home.svg" style="height: 19px;width: 19px;">
        </template>
        <template v-slot:front>
          <div >消息</div>
        </template>
      </tar-bar-item>

      <tar-bar-item>
        <template v-slot:img>
          <img src="./assets/tabBar/home.svg" style="height: 19px;width: 19px;">
        </template>
        <template v-slot:front>
          <div >首页</div>
        </template>
      </tar-bar-item>

      <tar-bar-item>
        <template v-slot:img>
          <img src="./assets/tabBar/home.svg" style="height: 19px;width: 19px;">
        </template>
        <template v-slot:front>
          <div >我的</div>
        </template>
      </tar-bar-item>


    </tab-bar>

  </div>
</template>

<script>
import TabBar from "@/components/tabBar/tabBar";
import TarBarItem from "@/components/tabBar/tarBarItem";

export default {
  name: 'App',
  components: {
    TarBarItem,
    TabBar,
  }
}
</script>

<style>

</style>
