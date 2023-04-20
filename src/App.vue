<template>
    <canvas ref="canvas"></canvas>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import * as BABYLON from 'babylonjs'


const canvasRef = ref(null)
onMounted(() => {
    // 获取HTML canvas元素
    const canvas = canvasRef.value
    // 创建Babylon.js引擎
    const engine = new BABYLON.Engine(canvas, true)
    // 创建Babylon.js场景
    const scene = new BABYLON.Scene(engine)

    // 添加相机
    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape.
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // 渲染场景
    engine.runRenderLoop(() => {
        scene.render()
    })

})


</script>