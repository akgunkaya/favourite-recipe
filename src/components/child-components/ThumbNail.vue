<template>
    <div class="recipe-thumb-container" >
        <div class="image-wrapper">
          <img class="thumbnail" v-bind:src="item.strMealThumb" alt="">
          <div class="favourite-icon" @click="favourite(item)" :class="{active: isActive}"></div>
        </div>
        <p>{{item.strMeal}}</p>
        <p>{{item.strCategory}}</p>
        <p>{{item.strArea}}</p>
        <p>{{item.strTags}}</p>
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
      isActive: false
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
      console.log(this.containsObject(item, store.favouriteRecipe))
      if (!this.containsObject(item, store.favouriteRecipe)) {
        store.favouriteRecipe.push(item)
      } else {
        store.favouriteRecipe = store.favouriteRecipe.filter(data => data.idMeal != item.idMeal);
      }

      localStorage.setItem('key', JSON.stringify(store.favouriteRecipe));
    }
  },
  mounted() {
    if (this.containsObject(this.item, store.favouriteRecipe)) {
      this.isActive = true;
      console.log(this.item)
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipe-thumb-container {
  width:33%;
}
.recipe-thumb-container .image-wrapper {
  position:relative;
  line-height: 0;
}
.recipe-thumb-container .thumbnail {
  width:100%;
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

</style>
