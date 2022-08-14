<template>
  <nav class="sidenav">
      <h1>Category</h1>
    <div class="tags-container">
      <div class="tag-chip" v-for="(item,i) in dataCategory" :key="i" @click="filterCategories(item, i)" :class="{ active: store.activeCategories.includes(i)}">
        {{item}}
      </div>        
    </div>
    <h1>Area</h1>
    <div class="tags-container">
      <div class="tag-chip" v-for="(item,i) in dataArea" :key="i" @click="filterAreas(item, i)" :class="{ active: store.activeAreas.includes(i)}">
        {{item}}
      </div>               
    </div>
    <h1>Tags</h1>
    <div class="tags-container">
      <div class="tag-chip" v-for="(item,i) in dataTags" :key="i" @click="filterTags(item, i)" :class="{ active: store.activeTags.includes(i)}">
        {{item}}
      </div>          
    </div>                    
  </nav>
</template>

<script>
import { store } from './store.js'

  export default {
    name: 'SideNav',
    props: {
      dataCategory: Array,
      dataArea: Array,
      dataTags: Array
    },  
    data() {
      return {      
        store
      }
    },
    methods: {   
      filterCategories: function (item, i) {
        if(store.filteredCategories.indexOf(item) === -1){
          store.filteredCategories.push(item)
          store.activeCategories.push(i);
        }else {
          if (store.filteredCategories.indexOf(item) > -1) { 
            store.filteredCategories.splice(store.filteredCategories.indexOf(item), 1);
            store.activeCategories.splice(store.activeCategories.indexOf(i), 1);
          } 
        }
      },
      filterAreas: function (item, i) {
        if(store.filteredAreas.indexOf(item) === -1){
          store.filteredAreas.push(item)
          store.activeAreas.push(i);        
        }else {
          if (store.filteredAreas.indexOf(item) > -1) { 
            store.filteredAreas.splice(store.filteredAreas.indexOf(item), 1);
            store.activeAreas.splice(store.activeAreas.indexOf(i), 1);
          } 
        }
      },   
      filterTags: function (item, i) {
        if(store.filteredTags.indexOf(item) === -1){
          store.filteredTags.push(item)
          store.activeTags.push(i);        
        }else {
          if (store.filteredTags.indexOf(item) > -1) { 
            store.filteredTags.splice(store.filteredTags.indexOf(item), 1);
            store.activeTags.splice(store.activeTags.indexOf(i), 1);
          } 
        }
      }
    }        
  }

</script>

<style scoped>
  .sidenav {
      width:500px;
      background-color: #f5f5f5;
  }
  .tags-container {
    margin:20px;
    border:1px solid black;
    border-radius: 5px;
    padding:5px 0;
    min-height: 150px;
    text-align: left;
  }
  .tag-chip {
    display: inline-block;
    background: white;
    padding:10px 20px;
    border-radius: 20px;
    margin: 2px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border:2px solid white;
    backface-visibility: hidden;
    user-select: none;
  }
  .tag-chip:hover {
    box-shadow: 2px 2px 2px #aaaaaa; 
  }  
  .tag-chip.active {
    border:2px solid #4de181;
  }
  
</style>