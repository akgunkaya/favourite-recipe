<template>
  <nav class="topnav">
    <input @change="resetFilters" v-model="store.searchTerm" placeholder="Search" />
    <h3>Favourites *Todo complete styling*</h3>
      <template v-for="item in store.favouriteRecipe" :key="item.idMeal">       
        <div class="recipe-thumb-container" >
          <div class="image-wrapper">
            <img class="thumbnail" v-bind:src="item.strMealThumb" alt="">
            <span>{{item.strMeal}}</span>
          </div>
        </div> 
      </template>
  </nav>
</template>

<script>
import { store } from './store.js'

  export default {
    name: 'TopNav',
    data() {
      return {
        store
      }
    }, 
    methods: {   
      resetFilters: function () {        
        store.filteredCategories =[]
        store.filteredAreas =[]
        store.filteredTags =[] 
        store.activeCategories = []
        store.activeAreas = []
        store.activeTags = []          
      }, 
    }   
  }
</script>

<style scoped>
.recipe-thumb-container img {
  width:40px;
  display: inline-block;
}
  
</style>