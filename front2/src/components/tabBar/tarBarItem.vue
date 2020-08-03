<template>
  <div class="tar-bar-item" @click="skillPage" >
        <div v-if="!isActive" >
          <slot name="img"></slot>
        </div>
      <div v-else >
          <slot name="img2"></slot>
      </div>
      <div :style="activeStyle">
          <slot name="front"></slot>
      </div>
  </div>

</template>

<script>
export default {
name: "tarBarItem",
    data(){
        return{
            // isActive:false,
        }
    },
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed:{
        isActive(){
            console.log(this.$route.path);
            return this.$route.path == this.path
        },
        activeStyle(){
            return this.isActive ==true ? {color:this.activeColor}:{}
        }
    },
    methods:{
        skillPage(){
            this.$router.replace(this.path);
            // return this.$router.push(this.path);
        }
    }
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