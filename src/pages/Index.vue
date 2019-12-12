<template>
  <q-page class="flex flex-center bg-blue-grey-10">
    <characters-list></characters-list>
  </q-page>
</template>

<script>
import CharactersList from '../components/CharactersList'
export default {
  name: 'PageIndex',
  components: {
    CharactersList
  }
}
</script>
