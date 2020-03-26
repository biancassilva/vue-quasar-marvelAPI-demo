<template>
  <div>
    <div class="row justify-center q-mb-md q-pt-md">
      <div class="col-lg-6 col-md-6 col-sm-8 xol-xs-12">
        <q-input
          class="full-width"
          dark
          color="white"
          filled
          v-model="characterName"
          label="Digite o nome do personagem"
          @keyup.enter="searchCharacter"
        >
          <template v-slot:after>
            <q-btn
              @click="searchCharacter()"
              size="lg"
              unelevated
              icon="search"
              color="red"
              :loading="isLoadingSearch"
            ></q-btn>
          </template>
        </q-input>
      </div>
    </div>
    <q-separator inset></q-separator>
    <div class="row justify-center q-mt-md" v-if="characters.length && !isLoading">
      <q-card
        v-for="(character, idx) in characters"
        :key="idx"
        class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-12 q-ma-md bg-blue-grey-8 text-white"
        @click="openDetails(character.id)"
      >
        <q-img
          :src="`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`"
        ></q-img>
        <q-card-section class="text-h6">{{character.name}}</q-card-section>
      </q-card>
    </div>
    <div
      v-else-if="!characters.length && !isLoading"
      class="text-center text-grey-5 q-pa-md"
    >Nenhum resultado encontrado</div>
    <q-inner-loading :showing="isLoading">
      <q-spinner size="50px" color="blue-grey-9" />
    </q-inner-loading>
  </div>
</template>
<script>

import MarvelAPI from '../services/MarvelAPI'
export default {
  name: 'CharactersList',
  data () {
    return {
      MarvelAPI: new MarvelAPI(),
      characterName: '',
      characters: [],
      isLoading: false,
      isLoadingSearch: false
    }
  },
  created () {
    this.getAllCharacters()
  },
  methods: {
    getAllCharacters () {
      this.isLoading = true
      this.MarvelAPI.list(100)
        .then(characters => { this.characters = characters.data.results })
        .catch(error => { this.$q.notify(error) })
        .finally(() => { this.isLoading = false })
    },
    searchCharacter () {
      this.isLoadingSearch = true
      this.MarvelAPI.search(this.characterName)
        .then(character => { this.characters = character.data.results })
        .catch(error => { this.$q.notify(error.message) })
        .finally(() => { this.isLoadingSearch = false })
    },
    openDetails (id) {
      this.$emit('openDetails', id)
    }
  }
}
</script>
