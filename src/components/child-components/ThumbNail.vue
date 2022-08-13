<template>
    <div class="recipe-thumb-container">
        <img v-bind:src="strMealThumb" alt="">
        <p>{{strMeal}}</p>
        <p>{{strCategory}}</p>
        <p>{{strArea}}</p>
        <p>{{strTag}}</p>
    </div> 
</template>

<script>
export default {
  name: 'ThumbNail',
  props: {
    strMealThumb: String,
    strMeal: String,
    strCategory: String,
    strArea: String,
    strTag: String,
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipe-thumb-container {
  width:33%;
}
.recipe-thumb-container img {
  width:100%;
}
</style>
