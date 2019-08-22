<template>
  <div class="home">
    <books/>
  </div>
</template>

<script>
// // @ is an alias to /src
import books from '@/components/books.vue'

export default {
  name: 'home',
  components: {
    books
  }
}
</script>

<style>
  
</style>
