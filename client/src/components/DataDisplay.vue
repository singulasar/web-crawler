<template>
  <div>
    <hr>
    <h1>{{data.name}}</h1>
    <p>{{data.price}}</p>
    <p>{{data.currency}}</p>
    <a v-bind:href="data.url">Link to product</a>
    <a v-bind:href="data.imageUrl">Link to image</a>
    <hr>
  </div>
</template>

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
