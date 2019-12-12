<template>
  <div>
    <q-btn color="red" label="Voltar para a lista" @click="backToList"></q-btn>
    <div class="row justify-center" v-if="character">
      <q-card v-for="(character, idx) in character" :key="idx" class="col-3 q-ma-md">
        <q-img
          :src="character.thumbnail.path + '/portrait_incredible.' + character.thumbnail.extension"
        ></q-img>
        <q-card-section class="text-h6">{{character.name}}</q-card-section>
        <q-separator inset></q-separator>
        <q-card-section>{{character.description ? character.description : 'Sem descrição'}}</q-card-section>
        <q-card-actions align="right">
          <q-btn color="blue-grey-9" no-caps label="Detalhes" @click="openDetails(character.id)"></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>

import MarvelAPI from '../services/MarvelAPI'
export default {
  props: ['characterID'],
  data () {
    return {
      character: ''
    }
  },
  watch: {
    characterID: function () {
      this.getCharacterByID()
    }
  },
  methods: {
    getCharacterByID () {
      MarvelAPI.getCharacterByID(this.characterID, character => {
        this.character = character.data.data.results
      })
    },
    backToList () {
      this.$emit('backToList')
    }
  }
}
</script>
