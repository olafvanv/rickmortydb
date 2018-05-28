<template>
  <div class="characters">
    <characters-list @show-details="openDetails"></characters-list>
    <characters-detail :character="character"></characters-detail>
  </div>
</template>


<script>
import CharactersList from "./Characters-list";
import CharactersDetail from "./Characters-detail";

export default {
  name: "Characters",
  components: {
    CharactersList: CharactersList,
    CharactersDetail: CharactersDetail
  },
  data: function(){
    return {
      character: null
    }
  },
  methods: {
    openDetails: function(data){
      this.character = data;
    }
  }
};
</script>