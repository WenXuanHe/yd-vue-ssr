<template>
  <div>
      <div v-for="topic in topics">
      <p>{{topic.title}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = ({ store, route }) => {
  console.log('获取的路由数据',route.params.id);
  return store.dispatch(`getTopics`)
}
export default {
  asyncData: fetchInitialData,
  computed: {
    ...mapGetters({
      topics: 'getTopics'
    })
  },
  mounted () {
    fetchInitialData({ store:this.$store, route:this.$route })
  }
}
</script>
<style>
  span{
    color: yellowgreen;
  }
</style>