<template>
  <div class="app-container">
    <SideBar :dataCategory="dataCategory" :dataArea="dataArea" :dataTags="dataTags" />
    <MainView :data="data"/>
  </div>
</template>

<script>
import axios from "axios"
import MainView from './components/MainView.vue'
import SideBar from './components/SideBar.vue'


export default {
  name: 'App',
  components: {
    MainView,
    SideBar,    
  },
  data () {
    return {
      data:[],
      dataCategory:[],
      dataArea:[],
      dataTags:[],
    }
  },

  async mounted() {
    let result = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Soup");
    this.data = result.data.meals
    console.log(this.data)
    for (let i=0; i<this.data.length; i++) {
      if(this.dataCategory.indexOf(this.data[i].strCategory) === -1){
        this.dataCategory.push(this.data[i].strCategory)
      }  
      if(this.dataArea.indexOf(this.data[i].strArea) === -1){
        this.dataArea.push(this.data[i].strArea)
      }    
      if(this.dataTags.indexOf(this.data[i].strTags) === -1){
        this.dataTags.push(this.data[i].strTags)
      }                        
    } 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container {
  display:flex;
}
</style>
