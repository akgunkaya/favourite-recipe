import { reactive } from "vue";

export const store = reactive({
  filteredCategories: [],
  filteredAreas: [],
  filteredTags: [],
  activeCategories: [],
  activeAreas: [],
  activeTags: [],
  searchTerm: "",
});
