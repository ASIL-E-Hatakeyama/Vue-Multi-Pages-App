<template>
  <!-- meta情報とか画面単位で設定出来るようにteleportを使った -->
  <teleport to="head">
    <title>HOME</title>
    <meta name="keywords" content="こんな感じでメタ情報を設定する" />
  </teleport>
  <div><a href="/about">アバウトページへ</a></div>
  <img alt="Vue logo" src="../../assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts" setup>
import HelloWorld from "../../components/HelloWorld.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
