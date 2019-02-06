
<template>
  <div>
    <h4 v-if="loading">Loading...</h4>
    <div>Homes</div>
    <div v-for="home in allHomes" :key="home.id">{{home.description}}</div>
  </div>
</template>

<script>
import { ALL_HOMES_QUERY } from "../graphql";
export default {
  name: "Homes",
  props: {
    title: String
  },
  data() {
    return {
      // 3
      allHomes: [],
      loading: 0
    };
  },
  apollo: {
    homes: {
      query: ALL_HOMES_QUERY,
      result({ data, loading }) {
        if (!loading) {
          this.allHomes = data.homes;
        }
      }
    }
  }
};
</script>

<style>
</style>


