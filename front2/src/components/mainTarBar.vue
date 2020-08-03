<template>
        <tab-bar>

            <tar-bar-item path="/home" activeColor="blue">
                <img slot="img"  src="@/assets/tabBar/home.svg" style="height: 19px;width: 19px;">
                <img slot="img2" src="@/assets/tabBar/home_active.svg" style="height: 19px;width: 19px;">
                <div slot="front" >我的</div>
            </tar-bar-item>

            <tar-bar-item path="/card" activeColor="yellow">
                <img slot="img" src="@/assets/tabBar/home.svg" style="height: 19px;width: 19px;">
                <img slot="img2" src="@/assets/tabBar/home_active.svg" style="height: 19px;width: 19px;">
                <div slot="front" >我的</div>
            </tar-bar-item>

            <tar-bar-item path="/message" activeColor="white">
                <img slot="img" src="@/assets/tabBar/home.svg" style="height: 19px;width: 19px;">
                <img slot="img2"  src="@/assets/tabBar/home_active.svg" style="height: 19px;width: 19px;">
                <div slot="front" >我的</div>
            </tar-bar-item>

            <tar-bar-item path="/profile" activeColor="pink">
                <img slot="img" src="@/assets/tabBar/home.svg" style="height: 19px;width: 19px;">
                <img slot="img2"  src="@/assets/tabBar/home_active.svg" style="height: 19px;width: 19px;">
                <div slot="front" >我的</div>

            </tar-bar-item>

        </tab-bar>
</template>

<script>

    import TabBar from "./tabBar/tabBar";
    import TarBarItem from "./tabBar/tarBarItem";
    export default {
        name: "mainTarBar",
        components:{
            TarBarItem,
            TabBar
        }
    }
</script>

<style scoped>

</style>