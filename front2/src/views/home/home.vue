<template>
    <div>
        <h1>Home....</h1>
      <ul>
        <li v-for="(item,index) in list" :key="index">{{item.id}}-{{item.name}}-{{item.age}}-{{item.sex}}</li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "home",
      data(){
          return{
            list:[]
          }
      },
      created() {
        axios.get('http://127.0.0.1:9022/user/demo')
            .then((data)=>{
              console.log(data);
              if(data.data.code===200){
                this.list = data.data.data.list
              }
            })
      }
    }
</script>

<style scoped>

</style>