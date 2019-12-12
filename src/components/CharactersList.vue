<template>
  <div class="row justify-center">
    <div class="col-12 q-pa-lg">
      <q-input
        dark
        color="white"
        filled
        v-model="characterName"
        label="Digite o nome do personagem"
      >
        <template v-slot:after>
          <q-btn @click="searchCharacter()" unelevated="" icon="search" label="Buscar" color="red"></q-btn>
        </template>
      </q-input>
    </div>
    <q-card v-for="(character, idx) in characters" :key="idx" class="col-3 q-ma-md">
      <q-img
        :src="character.thumbnail.path + '/portrait_incredible.' + character.thumbnail.extension"
      ></q-img>
      <q-card-section class="text-h6">{{character.name}}</q-card-section>
      <q-separator inset></q-separator>
      <q-card-section>{{character.description ? character.description : 'Sem descrição'}}</q-card-section>
      <q-card-actions align="right">
        <q-btn color="blue-grey-9" no-caps label="Detalhes"></q-btn>
      </q-card-actions>
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
