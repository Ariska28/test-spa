<template>
  <div class="container-xl min-vh-100">
    <div class="row align-items-center">
      <div class="input-group my-3 mx-auto w-auto">
        <span class="input-group-text bg-white">
          <img src="./assets/search-loupe.svg">
        </span>
        <my-input class="form-control"  
                  id="autoSizingInputGroup"  
                  v-model="searchQuery" 
                  placeholder="Filtered by author.."
        />
      </div>
    </div>

    <post-list :posts="searchPosts" 
               v-if="!isPostLoading"
    />
    <div class="position-absolute top-50 start-50 " v-else>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>

  <ul class="pagination flex-wrap justify-content-center my-3">
    <li v-for="pageNumber in totalPages" 
        class="page-item"
        :class="{
          'active': page === pageNumber
        }"
        :key="pageNumber"
        @click="changePage(pageNumber)"
    >
      <button class="page-link">{{pageNumber}}</button>
    </li>
  </ul>
</template>

<script>
  import postList from './components/PostList.vue';
  import axios from 'axios';

  export default {
    components: {
      postList
    }, 
    
    data() {
      return {
        posts: [],
        searchQuery: '',
        isPostLoading: false,
        page: 1,
        limit: 9,
        totalPages: 0,
      }
    },
    methods: {
      addUsersToPosts(postsList, usersList) {
        postsList.forEach(post => {
          usersList.forEach(user => {
              if (post.userId === user.id) {
                post.userName = user.name
              }
            })
          })
      },
      async fetchPosts() {
        try {
          this.isPostLoading = true;

          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', { 
            params: {
              _limit: this.limit,
              _page: this.page,
            }
          });

          this.posts = response.data;  
      
          const responseUsers = await axios.get('https://jsonplaceholder.typicode.com/users');

          this.addUsersToPosts(this.posts, responseUsers.data);

          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);  

        } catch(e) {
          alert('Error')
        } finally {
          this.isPostLoading = false;
        }
      },

      changePage(pageNumber) {
        this.page = pageNumber;
      }
    },
    
    mounted() {
      this.fetchPosts();
    },

    computed: {
      searchPosts() {
          return this.posts.filter(post => post?.userName?.toUpperCase().includes(this.searchQuery.toUpperCase()))
      }
     },

     watch: {
      page() {
        this.fetchPosts();
      }
    }
  }
</script>

<style scoped>
</style>
