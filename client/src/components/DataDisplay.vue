<template>
  <div class="data-display">
    <h1>{{data.name}}</h1>
    <div class="data-display-image">
      <a v-if="data.imageUrl" v-bind:href="data.imageUrl" target="_blank">
        <img v-bind:src="data.imageUrl"/>
      </a>
      <p>{{data.price}} {{data.currency}}</p>
    </div>
    <div class="data-display-links">
      <a v-if="data.url" v-bind:href="data.url" target="_blank">{{data.url}}</a>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 24px;
  }

  .data-display-links {
    display: flex;
    flex-direction: row;
  }

  .data-display-image {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 8px;
  }

  .data-display-image p {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }

  img {
    height: 200px;
    border: 1px solid #888;
    margin-right: 16px;
  }
</style>

<script>

export default {
  name: 'home',
  props: {
    data: Object,
  },
};
</script>

<style>
img {
  max-width: 300px;
  height: auto;
}
</style>
