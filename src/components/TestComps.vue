<template>
  <div>
    <p class="text-black">Age: {{ age }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      age: 20,
    }
  },
  methods: {
    showAge() {
      console.log(this.age)
    },
  },
}
</script>
