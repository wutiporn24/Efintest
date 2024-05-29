<script setup>
import { data } from "../stores/data.js";
import { onMounted, ref, computed } from "vue";

const d = data();

onMounted(() => {
  d.getData();
});
</script>
<template>
  <div class="menu2">
    <div class="grid-container">
      <div :class="index" v-for="(data, index) in d.data" :key="data.id" style="color: white;" :style="{
        backgroundColor:
          index === 'data_1'
            ? 'rgb(83,55,55)'
            : index === 'data_2'
              ? 'rgb(55,83,61)'
              : index === 'data_3'
                ? 'rgb(59,55,83)'
                : index === 'data_4'
                  ? 'rgb(55,79,83)'
                    : index === 'data_5'
                    ? 'rgb(83,55,81)'
                    : index === 'data_6'
                      ? 'rgb(83,82,55)'
                      : 'white',
      }">{{ data }}</div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.data_1 {
  grid-area: data1;
  height: 400px;
}

.data_2 {
  grid-area: data2;
}

.data_3 {
  grid-area: data3;
  height: 200px;
}

.data_4 {
  grid-area: data4;
}

.data_5 {
  grid-area: data5;
}

.data_6 {
  grid-area: data6;
  height: 200px;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'data1 data1 data1 data2 data5'
    'data3 data3 data3 data4 data5'
    'data6 data6 data6 data6 data5';
  gap: 10px;
  padding: 10px;
}

.grid-container>div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
</style>
