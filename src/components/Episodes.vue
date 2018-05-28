<template>
  <div class="episodes">
    <div class="page-title">
      <h1>Episodes</h1>
    </div>
    <div class="episode-list">
      <ul>
        <li v-for="episode in episodes" v-bind:key="episode.id">
          {{episode.episode}}: {{episode.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import API from "../api/api.js";

export default {
  name: "Episodes",
  data: function() {
    return {
      episodes: []
    };
  },
  beforeMount: function() {
    this.getEpisodes("https://rickandmortyapi.com/api/episode");
  },
  methods: {
    getEpisodes: function(url) {
      var self = this;

      API.getData(url).then(response => {
        response.results.map(episode => {
          self.episodes.push(episode);
        });

        if(response.info.next){
          self.getEpisodes(response.info.next);
        }else{
          console.log(self.episodes);
        }

        return;
      });
    },
    getCharacters: function(characters) {
      characters.map(function(character) {});
    }
  }
};
</script>

<style scoped>
.episode-list > ul {
  list-style: none;
  text-align: left;
}
</style>
