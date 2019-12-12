<template>
  <div class="row">
    <div class="col-12 q-pa-sm">
    <q-input type="text" filled v-model="characterName" label="Digite o nome do personagem"></q-input>
    <q-btn @click="searchCharacter()" label="Buscar" color="primary"></q-btn>
    </div>
    <q-card v-for="(character, idx) in characters" :key="idx" class="col-3">
      <q-card-section>
        <q-img :src="character.thumbnail.path + '/portrait_xlarge.' + character.thumbnail.extension"></q-img>
      </q-card-section>
      <q-card-section>{{character.name}}</q-card-section>
    </q-card>
  </div>
</template>
<script>
import MarvelAPI from '../services/MarvelAPI'
export default {
  name: 'CharactersList',
  data () {
    return {
      characterName: '',
      characters: []
    }
  },
  created () {
    this.getAllCharacters()
  },
  methods: {
    getAllCharacters () {
      MarvelAPI.getAllCharacteres(100, characters => {
        this.characters = characters.data.data.results
      })
    },
    searchCharacter () {
      MarvelAPI.searchCharacter(this.characterName, character => {
        this.characters = character.data.data.results
      })
    }
  }
}
</script>
