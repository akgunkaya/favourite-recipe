<template>
  <div class="main-view-container">
    <template v-for="item in data" :key="item.idMeal">
      <div class="recipe-thumb-container">
        <img v-bind:src="item.strMealThumb" alt="">
        <p>{{item.strMeal}}</p>
      </div>
    </template>  
  </div>      
</template>

<script>
import { store } from './store.js'

export default {
  name: 'MainView',
  props: {
    data: Array,
  },
  data() {
    return {
      store
    }
  }  
}
console.log(store.count)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main-view-container {
  display: flex; 
  flex-wrap: wrap;
}
.recipe-thumb-container {
  width:33%;
}
.recipe-thumb-container img {
  width:100%;
}
</style>
