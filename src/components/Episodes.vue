<template>
  <div class="episodes">
    <div class="page-title">
      <h1>Episodes</h1>
    </div>
    <ma class="episode-list">

      <md-table v-for="(value, key) in seasons" :key="key" v-model="seasons[key]" md-card>
        <md-table-toolbar>
          <h1 class="md-title">{{key}}</h1>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Episode" md-sort-by="episode">{{item.episode}}</md-table-cell>
          <md-table-cell md-label="Title" md-sort-by="name">{{item.name}}</md-table-cell>
          <md-table-cell md-label="Air Date" md-sort-by="air_date">{{item.air_date}}</md-table-cell>
        </md-table-row>
      </md-table>

    </ma>
  </div>
</template>

<script>
import API from "../api/api.js";

export default {
  name: "Episodes",
  data: function() {
    return {
      episodes: [],
      seasons: {
        'Season 1': [],
        'Season 2': [],
        'Season 3': []
      }
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
          self.sortBySeason(self.episodes);
        }

        return;
      });
    },
    sortBySeason: function(episodes){
      var self = this;

      episodes.map(episode => {
        let es = episode.episode;
        
        switch(true){
          case (es.indexOf('S01') !== -1) :
            self.seasons['Season 1'].push(episode);
            break;
          case (es.indexOf('S02') !== -1) :
            self.seasons['Season 2'].push(episode);
            break;
          case (es.indexOf('S03') !== -1) :
            self.seasons['Season 3'].push(episode);
            break;
        }
      });
    }
  }
};
</script>

<style scoped>
.episode-list .md-card {
  margin-bottom:15px;
}
</style>
