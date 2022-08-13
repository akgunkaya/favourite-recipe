<template>
  <nav class="topnav">
    <input @change="resetFilters" v-model="store.searchTerm" placeholder="Search" />
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

  
</style>