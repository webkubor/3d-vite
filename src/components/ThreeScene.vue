<template>
    <div>
        three.js
    </div>
</template>
  
<script lang="ts" setup>
import {  onMounted } from 'vue'

import * as THREE from 'three';


// 创建场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffcc);
// 创建相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 创建渲染器
const renderer = new THREE.WebGLRenderer();
// 将渲染器的输出 canvas 添加到 HTML 文档的 body 元素中
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

// 创建一个立方体，并添加到场景中
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5, vertexColors: true });
const cube = new THREE.Mesh(geometry, material);

const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff];
geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
scene.add(cube);





// 设置相机的位置
camera.position.z = 5;



// 更新立方体的旋转并渲染场景
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}


onMounted(() => {
    animate();
})
</script>
<style lang="less">
.container {
    width: 300px;
    height: 300px;
}
</style>
  