<template>
  <ul class="pagination flex-wrap justify-content-center my-3">
    <li v-for="pageNumber in totalPages" 
        class="page-item"
        :class="{
          'active': page === pageNumber
        }"
        :key="pageNumber"
        @click="changePage(pageNumber)"
    >
      <a class="page-link" href="#">{{pageNumber}}</a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [String],
    },
  }
</script>


<style scoped>
</style>