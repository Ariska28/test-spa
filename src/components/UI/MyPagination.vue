<template>
  <ul class="pagination flex-wrap justify-content-center my-3">
    <li v-for="pageNumber in totalPages" 
        class="page-item"
        :key="pageNumber"
        :class="{
          'active': page === pageNumber
        }"
        @click="getCurrentPage(pageNumber)"
    >
      <button class="page-link m-1 rounded"> {{ pageNumber }} </button>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'my-pagination',
    props: {
      totalPages: Number,
      page: Number,
    },
    methods: {
      getCurrentPage(page) {
        this.$emit('getCurrentPage', page)
      },
    }
  }
</script>


<style scoped>
</style>