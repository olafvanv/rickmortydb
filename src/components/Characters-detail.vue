<template>
  <div class="details">
    
  </div>
</template>

<script>
export default {
  name:"Characters-detail",
  props: ['character'],
  methods: {
    openDetails: function(character){
      alert(character.name);
    }
  },
  watch: {
    character: function(newValue, oldValue){
      this.character = newValue;
      this.openDetails(this.character);
    }
  }
}
</script>
