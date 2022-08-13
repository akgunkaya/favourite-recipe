<template>
  <div class="app-container">
    <SideNav :dataCategory="dataCategory" :dataArea="dataArea" :dataTags="dataTags" />
    <MainView :data="data"/>
  </div>
</template>

<script>
import axios from "axios"
import MainView from './components/MainView.vue'
import SideNav from './components/SideNav.vue'


export default {

  name: 'App',
  components: {
    MainView,
    SideNav,    
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
      if(this.dataCategory.indexOf(this.data[i].strCategory) === -1 && this.data[i].strCategory !== null){
        this.dataCategory.push(this.data[i].strCategory)
      }  
      if(this.dataArea.indexOf(this.data[i].strArea) === -1 && this.data[i].strArea !== null){
        this.dataArea.push(this.data[i].strArea)
      }    
      if (this.data[i].strTags !== null) {
        let splitCommaArray = this.data[i].strTags.split(',')
        for (let j=0; j<splitCommaArray.length; j++) {
          if(this.dataTags.indexOf(splitCommaArray[j].trim()) === -1){
            this.dataTags.push(splitCommaArray[j].trim())
          }   
        }  
      }                   
    } 
  }
}
</script>

<style>
body {
  margin:0;
}
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
