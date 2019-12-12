<template>
  <q-page class="flex flex-center">
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
