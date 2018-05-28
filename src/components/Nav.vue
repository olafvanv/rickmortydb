<template>
  <div class="nav md-elevation-1">
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <md-tabs md-sync-route md-alignment="centered">
      <md-tab md-label="Characters" to="/characters"></md-tab>
      <md-tab md-label="Episodes" to="/episodes"></md-tab>
    </md-tabs>
  </div>
</template>

<style scoped>
  .nav{
    width:100%;
    padding:15px 20px;
    background-color:#fff;
  }
  .logo > img {
    width:80%;
    max-width:500px;
    margin:0 auto;
    display:block;
  }
</style>
