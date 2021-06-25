<template>
  <div class="container">
    <carousel
      :autoPlay="true"
      :initial="0"
      :hasDot="true"
      :duration="3000"
      :hasDirector="true"
    >
      <car-item v-for="(item, index) in CarData" :key="index">
        <img :src="require(`./assets/img/${item.img_name}`)" alt="" />
      </car-item>
    </carousel>
  </div>
</template>

<script>
import CarData from "./data/Carousel";
export default {
  name: "App",
  components: {},
  setup() {
    return {
      CarData,
    };
  },
};
</script>

<style>
.container {
  width: 520px;
  height: 280px;
  margin: 150px auto;
}
</style>
