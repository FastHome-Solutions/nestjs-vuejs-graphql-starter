<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <div>Cats</div>
    <div v-for="cat in allCats" :key="cat.id">{{cat.name}}</div>
  </div>
</template>

<script>
  import { ALL_CATS_QUERY } from '../graphql'
  export default {
    name: 'Cats',
    props: {
      title: String,
    },
    data () {
      return {
        // 3
        allCats: [],
        loading: 0
      }
    },
    apollo: {
      getCats: {
        query: ALL_CATS_QUERY,
        result({ data, loading }) {
          if (!loading) {
            this.allCats = data.getCats
          }
        }
      }
    }
  }
</script>

<style>

</style>
