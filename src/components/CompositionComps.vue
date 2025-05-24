<script>
export default {
  data() {
    return {
      name: 'Arkhan Ardana',
    }
  },

  methods: {
    showName() {
      alert(this.name)
    },
  },
}
</script>

<template>
  <h1>{{ name }}</h1>

  <button @click="showName" class="text-black bg-amber-200">Show Name</button>
</template>
