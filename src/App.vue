<template>
  <div id="app">
    <Nav></Nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav: Nav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}
h1{
  font-size:250%;
}
.page-title{
  width:100%;
  display:block;
  margin:20px 0;
  overflow:auto;
}
.page-title > h1{
  display:block;
  max-width:50%;
  float:left;
}
.page-title > .search-filter{
  float:right;
  width:50%;
  max-width:300px;
}
</style>
