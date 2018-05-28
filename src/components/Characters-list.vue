<template>
  <div class="characters-list">
    <div class="page-title">
      <h1>Characters</h1>
      <div class="search-filter">
        <md-field>
          <label>Search on Name</label>
          <md-input v-model="searchFilter"></md-input>
        </md-field>
      </div>
    </div>
    <div class="characters-list">
      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-size-25" v-for="character in filteredCharacters" v-bind:key="character.id" @click="showDetails(character)">
          <md-card md-with-hover>
            <div class="md-card-img">
              <img :src="character.image" />
            </div>
            <md-card-header>
              <div class="md-title">{{character.name}}</div>
              <div class="md-subhead">Origin: {{character.origin.name}}</div>
              <div class="md-subhead">Status: {{character.status}}</div>
            </md-card-header>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../api/api.js";

export default {
  name: "Characters-list",
  data: () => {
    return {
      characters: [],
      next: null,
      searchFilter: "",
      gettingData: false,
    };
  },
  beforeMount: function() {
    this.getCharacters("https://rickandmortyapi.com/api/character");
  },
  mounted: function() {
    this.scroll();
  },
  methods: {
    getCharacters: function(url) {
      this.gettingData = true;
      var self = this;

      API.getData(url).then(response => {
        response.results.map(character => {
          self.characters.push(character);
        });

        if (response.info.next) {
          self.next = response.info.next;
        } else {
          self.next = null;
        }

        this.gettingData = false;

        return;
      });
    },
    showDetails: function(data){
      this.$emit('show-details', data);
    },
    scroll: function() {
      var self = this;
      var i = 1;

      window.onscroll = () => {
        let bottom =
          window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (bottom && self.next && !self.gettingData) {
          self.getCharacters(self.next);
        }
      };
    }
  },
  computed:{
    filteredCharacters: function(){
      return this.characters.filter((character) => {
        return character.name.toLowerCase().match(this.searchFilter.toLowerCase());
      })
    }
  }
};
</script>

<style scoped>
.md-subhead,
.md-title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.md-card-img {
  height: 250px;
  overflow: hidden;
}
</style>
