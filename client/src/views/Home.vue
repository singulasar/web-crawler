<template>
  <div class="home">
    <div class="home-header">
      <input v-model="url" placeholder="Enter url" />
      <a href="#" v-on:click="submit">Fetch data</a>
    </div>
    <div class="home-content">
      <DataDisplay v-bind:data="message" />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  padding: 8px;
  box-shadow: 0 0 8px 0 rgba(25, 25, 25, 0.5);
}

.home-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

input {
  padding: 4px;
  height: 16px;
  margin-right: 16px;
  flex: 1;
  border: 1px solid #555;
  transition: border 0.2s ease-in-out;
}

input:focus {
  border: 1px solid var(--primary-color);
  outline: none;
}

a {
  color: white;
  width: 100px;
  display: block;
  height: 26px;
  line-height: 26px;
  background-color: var(--primary-color);
  text-align: center;
  text-decoration: none
}
</style>

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
        url: '',
        imageUrl: '',
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
