<script setup>
const name = 'Arkhan Ardana'

const showName = () => {
  alert(name)
}
</script>

<template>
  <div>
    <h1 class="text-2xl text-black">Title</h1>
    <p class="text-base text-gray-600">Description</p>
  </div>
  <button @click="showName" class="bg-white text-black p-10 rounded-md">Show Name</button>
</template>

<style scoped></style>
