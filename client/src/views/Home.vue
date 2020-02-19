<template>
  <div class="home">
    <input v-model="url" placeholder="Enter url">
    <a href="#" v-on:click="submit">Fetch data</a>
    <DataDisplay v-bind:data="message" />
  </div>
</template>

<script>
// @ is an alias to /src
import DataDisplay from '@/components/DataDisplay.vue';

const API_URL = 'http://localhost:4000/fetch-product-data?url=';

export default {
  name: 'Home',
  data() {
    return {
      error: '',
      message: {
        name: 'Product',
        price: 0,
        currency: 'EUR',
        url: 'Link to product',
        imageUrl: 'Image url',
      },
      url: '',
    };
  },

  components: {
    DataDisplay,
  },

  methods: {
    submit() {
      fetch(API_URL + this.url)
        .then((response) => response.json())
        .then((result) => {
          this.message = result;
        });
    },
  },
};

</script>
