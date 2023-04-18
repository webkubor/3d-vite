<template>
    <a-scene>
        <a-sphere color="#EF2D5E" radius="1"></a-sphere>
        <a-entity :rotation="rotation"></a-entity>
    </a-scene>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const rotation = ref("0 0 0");
setInterval(() => {
    rotation.value = `${Date.now() / 1000 * 30} 45 ${Date.now() / 1000 * 45}`;
}, 10);


</script>