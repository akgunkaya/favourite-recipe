<template>
  <div class="main-view-container">
    <template v-for="item in data" :key="item.idMeal">    
      <template v-if="store.searchTerm">
        <template v-if="item.strMeal.toLowerCase().includes(store.searchTerm.toLowerCase())">
          <ThumbNail :strMealThumb="item.strMealThumb" :strMeal="item.strMeal" :strCategory="item.strCategory" :strArea="item.strArea" :strTag="item.strTags" />
        </template>  
      </template>  
      <template v-else>
        <template v-if="store.filteredCategories.includes(item.strCategory) && store.filteredAreas.includes(item.strArea) && matchSubstring(item.strTags)">
          <ThumbNail :item="item" />
        </template>  
        <template v-else-if="store.filteredCategories.includes(item.strCategory) && store.filteredAreas.includes(item.strArea) && !store.filteredTags.length">
          <ThumbNail :item="item" />
        </template>  
        <template v-else-if="store.filteredCategories.includes(item.strCategory) && matchSubstring(item.strTags) && !store.filteredAreas.length">
          <ThumbNail :item="item" />
        </template>    
        <template v-else-if="store.filteredAreas.includes(item.strArea) && matchSubstring(item.strTags) && !store.filteredCategories.length">
          <ThumbNail :item="item" />
        </template>                       
        <template v-else-if="store.filteredCategories.includes(item.strCategory) && !store.filteredAreas.length && !store.filteredTags.length">
          <ThumbNail :item="item" />
        </template>      
        <template v-else-if="store.filteredAreas.includes(item.strArea) && !store.filteredCategories.length && !store.filteredTags.length">
          <ThumbNail :item="item" />
        </template>   
        <template v-else-if="matchSubstring(item.strTags) && !store.filteredCategories.length && !store.filteredAreas.length">
          <ThumbNail :item="item"/>
        </template>               
        <template v-else-if="!store.filteredCategories.length && !store.filteredAreas.length && !store.filteredTags.length ">
          <ThumbNail :item="item" />
        </template> 
      </template>        
    </template>  
  </div>      
</template>

<script>
import { store } from './store.js'
import ThumbNail from './child-components/ThumbNail.vue'

export default {
  name: 'MainView',
  props: {
    data: Array,
  },
   components: {
    ThumbNail
  },
  data() {
    return {
      store
    }
  },
    methods: {   
      matchSubstring: function (item) {
        if (item !== null) {
          const array = store.filteredTags;
          const itemArray = item.split(',')

          for (let i=0; i<itemArray.length; i++) {          
            const substring = itemArray[i];
  
            const match = array.find(element => {
              if (element.includes(substring)) {
                return true;
              }
            });
  
            if (match !== undefined) {
              return true
            }               
          }
        }
      },
    }   
}


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
  width:80%;
}
</style>
