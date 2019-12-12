<template></template>
<script>
export default {
  props: ['characterID'],
  data () {
    return {
        character: ''
    }
  },
  methods: {
    getCharacterByID () {
      MarvelAPI.getCharacterByID(this.characterID, character => {
        this.character = character.data.data.results
      })
    }
  }
}
</script>