<template>
  <div class="row g-4">
    <post-item v-for="post in posts"
               v-if="posts.length"
               :post="post"
    />
    <div v-else>
      Post list is empty
    </div>
  </div>
</template>

<script>
import PostItem from './PostItem.vue';
  export default {
    components: { PostItem },
    props: {
      posts: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>