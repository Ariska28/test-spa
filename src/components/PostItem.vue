<template>
  <div class="col-lg-4 col-md-6 col-sm-auto">
    <div class="p-4 border bg-white">
      <h2 class=" h4 h3-md text-primary">
        {{post.title}}
      </h2>

      <p class=" fs-6 fs-5-md">
        {{post.body}}
      </p>

      <div class="text-black-50 fs-6">
        {{post.userName}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>