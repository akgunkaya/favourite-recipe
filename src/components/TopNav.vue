<template>
  <nav class="topnav">
    <input class="top-nav-search" @change="resetFilters" v-model="store.searchTerm" placeholder="Search" />
    <div class="favourite-container">
      <div class="title-container" @click="expandFavourites()" >
        <h3>Favourites</h3>
        <span class="favourite-icon"></span>
      </div>
      <div class="favourites-wrapper" :class="{active: showFavourites}">
        <template v-if="store.favouriteRecipe.length">
          <template v-for="item in store.favouriteRecipe" :key="item.idMeal">       
            <div class="recipe-thumb-container" @click="searchFavourite(item.strMeal)" >
              <div class="image-wrapper">
                <img class="thumbnail" v-bind:src="item.strMealThumb" alt="">
                <span>{{item.strMeal}}</span>
              </div>
            </div> 
          </template>
        </template>
        <template v-else>
          <p>No favourites selected</p>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
import { store } from './store.js'

  export default {
    name: 'TopNav',
    data() {
      return {
        store,
        showFavourites: false,
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
      searchFavourite: function (itemTitle) {
        store.searchTerm = itemTitle
      }, 
      expandFavourites: function () {
        this.showFavourites = !this.showFavourites
      }
    },
  }
</script>

<style scoped>
.recipe-thumb-container img {
  width:40px;
  display: inline-block;
}
.topnav {
  display:flex;
  background-color:#ffff8e;
  justify-content: space-between;
  padding:0 80px 0 80px;
}
.topnav .top-nav-search {
  width:500px;
  height: 30px;
  margin-top: 14px;  
  margin-left: 315px;
}

.favourite-container .favourite-icon{
  position:absolute;
  width:40px;
  height:40px;
  top:50%;
  transform: translateY(-50%);
  right: -40px;
  background-image:url('~@/assets/favourite-512-filled.png');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;  
}
.favourite-container {
  position:relative;
  width:150px;
  user-select: none;
  cursor:pointer;
}
.favourite-container .image-wrapper {
  padding:2px 0;
}
.favourite-container .title-container {
  display:flex;
  position:relative;
}
.favourite-container .favourites-wrapper {
  display:none;
  position:absolute;
  top:100%;
  width: 300px;
  right: -80px;  
  background:white;
  z-index:2;
}
.favourite-container .favourites-wrapper.active {
  display:flex;
  flex-direction: column;
  align-items: baseline;
}
</style>