<template>
  <q-page class="bg-blue-grey-10">
    <character-details
      v-show="!isListing"
      :characterID="idReceivedFromList"
      @backToList="isListing = true"
    ></character-details>
    <characters-list v-show="isListing" @openDetails="openComponentDetails"></characters-list>
  </q-page>
</template>

<script>
import CharactersList from '../components/CharactersList'
import CharacterDetails from '../components/CharacterDetails'

export default {
  name: 'PageIndex',
  components: {
    CharactersList,
    CharacterDetails
  },
  data () {
    return {
      idReceivedFromList: '',
      isListing: true
    }
  },
  methods: {
    openComponentDetails (id) {
      this.isListing = false
      this.idReceivedFromList = id
    }
  }
}
</script>
