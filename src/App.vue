<template>
    <canvas ref="canvas" width="150" height="150">
    </canvas>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null);
const context = ref(null);

const initCanvas = () => {
    context.value = canvas.value.getContext('2d');

    console.log(context.value, "context")
    context.value.fillStyle = "rgb(200,0,0)";
    context.value.fillRect(10, 10, 55, 50);

    context.value.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.value.fillRect(30, 30, 55, 50);
};



onMounted(() => {

    initCanvas()
})

</script>
<style  lang="less">
canvas {
    border: 1px solid black;
}
</style>