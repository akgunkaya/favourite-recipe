<template>
  <nav class="sidebar">
    <div class="tags-container">
      <h1>Category</h1>
      <p v-for="item in dataCategory" :key="item">
        {{item}}
      </p>        
    </div>
    <div class="tags-container">
      <h1>Area</h1>
      <p v-for="item in dataArea" :key="item">
        {{item}}
      </p>        
    </div>
    <div class="tags-container">
      <h1>Tags</h1>
      <p v-for="item in dataTags" :key="item">
        {{item}}
      </p>           
    </div>                    
  </nav>
</template>

<script>
import { store } from './store.js'

  export default {
    name: 'SideBar',
    props: {
      dataCategory: Array,
      dataArea: Array,
      dataTags: Array
    },  
    data() {
      return {
        store
      }
    }      
  }
</script>

<style scoped>
  .sidebar {
      min-width:200px;
  }
</style>