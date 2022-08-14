<template>
    <div class="recipe-thumb-container">
        <div class="image-wrapper">
          <img class="thumbnail" v-bind:src="item.strMealThumb" @click="expandThumbnail()" alt="" >
          <div class="favourite-icon" @click="favourite(item)" :class="{active: isActive}"></div>
        </div>
        <p>{{item.strMeal}}</p>
        <div class="extended-recipe" :class="{active: expandRecipe}">
          <iframe width="100%" height="315" v-bind:src="'https://www.youtube.com/embed/'+embedID" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="extended-recipe-info">
            <h1>Instructions</h1>
            {{item.strInstructions}}
            <h1>Ingredients + Measure</h1>
            <template v-if="item.strIngredient1">
              <p>{{item.strIngredient1}} - {{item.strMeasure1}}</p>
            </template>
            <template v-if="item.strIngredient2">
              <p>{{item.strIngredient2}} - {{item.strMeasure2}}</p>
            </template>
            <template v-if="item.strIngredient3">
              <p>{{item.strIngredient3}} - {{item.strMeasure3}}</p>
            </template>
            <template v-if="item.strIngredient4">
              <p>{{item.strIngredient4}} - {{item.strMeasure4}}</p>
            </template>
            <template v-if="item.strIngredient5">
              <p>{{item.strIngredient5}} - {{item.strMeasure5}}</p>
            </template>
            <template v-if="item.strIngredient6">
              <p>{{item.strIngredient6}} - {{item.strMeasure6}}</p>
            </template>
            <template v-if="item.strIngredient7">
              <p>{{item.strIngredient7}} - {{item.strMeasure7}}</p>
            </template>
            <template v-if="item.strIngredient8">
              <p>{{item.strIngredient8}} - {{item.strMeasure8}}</p>
            </template>
            <template v-if="item.strIngredient9">
              <p>{{item.strIngredient9}} - {{item.strMeasure9}}</p>
            </template>
            <template v-if="item.strIngredient10">
              <p>{{item.strIngredient10}} - {{item.strMeasure10}}</p>
            </template>
            <template v-if="item.strIngredient11">
              <p>{{item.strIngredient11}} - {{item.strMeasure11}}</p>
            </template>
            <template v-if="item.strIngredient12">
              <p>{{item.strIngredient12}} - {{item.strMeasure12}}</p>
            </template>
            <template v-if="item.strIngredient13">
              <p>{{item.strIngredient13}} - {{item.strMeasure13}}</p>
            </template>
            <template v-if="item.strIngredient14">
              <p>{{item.strIngredient14}} - {{item.strMeasure14}}</p>
            </template>
            <template v-if="item.strIngredient15">
              <p>{{item.strIngredient15}} - {{item.strMeasure15}}</p>
            </template>
            <template v-if="item.strIngredient16">
              <p>{{item.strIngredient16}} - {{item.strMeasure16}}</p>
            </template>
            <template v-if="item.strIngredient17">
              <p>{{item.strIngredient17}} - {{item.strMeasure17}}</p>
            </template>
            <template v-if="item.strIngredient18">
              <p>{{item.strIngredient18}} - {{item.strMeasure18}}</p>
            </template>
            <template v-if="item.strIngredient19">
              <p>{{item.strIngredient19}} - {{item.strMeasure19}}</p>
            </template>
            <template v-if="item.strIngredient20">
              <p>{{item.strIngredient20}} - {{item.strMeasure20}}</p>
            </template>

          </div>
        </div>
    </div> 
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'ThumbNail',
  props: {
    item: Object
  },  
  data() {
    return {      
      store,
      isActive: false,
      expandRecipe: false,
      embedID: ''
    }
  },  
  methods: {
    containsObject: function (obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
          if (list[i].idMeal === obj.idMeal) {
              return true;
          }
      }

      return false;
    },
    favourite: function (item) {
      this.isActive = !this.isActive;
      if (!this.containsObject(item, store.favouriteRecipe)) {
        store.favouriteRecipe.push(item)
      } else {
        store.favouriteRecipe = store.favouriteRecipe.filter(data => data.idMeal != item.idMeal);
      }
      localStorage.setItem('key', JSON.stringify(store.favouriteRecipe));
    },
    expandThumbnail: function () {
      this.expandRecipe = !this.expandRecipe
      if (this.expandRecipe) {
        window.scrollBy(0, 300);
      } else {
        window.scrollBy(0, -300);
      }
    }
  },
  mounted() {
    if (this.containsObject(this.item, store.favouriteRecipe)) {
      this.isActive = true;
    }
    this.embedID = this.item.strYoutube.substring(this.item.strYoutube.lastIndexOf('v=') + 2);
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipe-thumb-container {
  width:33%;
  cursor: pointer;
  box-sizing: border-box;
  padding:0 10px;
}
.recipe-thumb-container .image-wrapper {
  position:relative;
  line-height: 0;
}
.recipe-thumb-container .thumbnail {
  width:100%;
  object-fit: cover;
  height: 300px;  
}
.recipe-thumb-container .favourite-icon{
  position:absolute;
  width:40px;
  height:40px;
  bottom: 20px;
  right: 20px;
  background-image:url('~@/assets/favourite-512.png');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;  
}
.recipe-thumb-container .favourite-icon.active {
  background-image:url('~@/assets/favourite-512-filled.png');
}
.recipe-thumb-container .extended-recipe {
  display:none;
  position:relative;
}
.recipe-thumb-container .extended-recipe.active {
  display:block;
}
</style>
