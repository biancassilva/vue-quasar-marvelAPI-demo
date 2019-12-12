<template>
  <div class="row">
    <q-card v-for="(comics, idx) in comics" :key="idx" class="col-3">
        <q-card-section>
            <q-img :src="comics.thumbnail.path + '/portrait_medium.jpg'"></q-img>
        </q-card-section>
      <q-card-section>{{comics.title}}</q-card-section>
      <q-card-section>{{comics.description}}</q-card-section>
    </q-card>
  </div>
</template>
<script>

import MarvelAPI from '../services/MarvelAPI'
export default {
  name: 'ComicsList',
  data () {
    return {
      comics: []
    }
  },
  created () {
    this.getAllComics()
  },
  methods: {
    getAllComics () {
      MarvelAPI.getAllComics(100, comics => {
        this.comics = comics.data.data.results
      })
    }
  }

}
</script>
