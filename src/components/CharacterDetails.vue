<template>
  <div class="q-pa-md">
    <q-btn color="red" label="Voltar para a lista" @click="backToList"></q-btn>
    <div class="row justify-center" v-if="character">
      <q-card v-for="(character, idx) in character" :key="idx" class="col-10 q-ma-md bg-blue-grey-8">
        <q-item class="q-pa-none">
          <q-item-section>
            <q-img
              :src="character.thumbnail.path + '/portrait_incredible.' + character.thumbnail.extension"
            ></q-img>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h6 text-center text-white">{{character.name}}</q-item-label>
            <q-item-label class="q-pa-sm text-white text-center">{{character.description ? character.description : 'Sem descrição'}}</q-item-label>
          </q-item-section>
        </q-item>
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
      MarvelAPI: new MarvelAPI(),
      character: '',
      isLoading: false
    }
  },
  watch: {
    characterID: function () {
      this.getCharacterByID()
    }
  },
  methods: {
    getCharacterByID () {
      this.isLoading = true
      this.MarvelAPI.show(this.characterID)
        .then(character => { this.character = character.data.results })
        .catch(error => { this.$q.notify(error) })
        .finally(() => { this.isLoading = false })
    },
    backToList () {
      this.$emit('backToList')
    }
  }
}
</script>
