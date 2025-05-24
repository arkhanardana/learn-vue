<template>
  <div>
    <h2>Form Input</h2>
    <form @submit.prevent="handleSubmit">
      <label for="name">Nama:</label>
      <input type="text" id="name" v-model="formData.name" required />
      <br /><br />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />
      <br /><br />

      <button type="submit">Kirim</button>
    </form>

    <div v-if="submitted">
      <h3>Data yang Dikirim:</h3>
      <p><strong>Nama:</strong> {{ submittedData.name }}</p>
      <p><strong>Email:</strong> {{ submittedData.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  name: '',
  email: '',
})

const submittedData = reactive({
  name: '',
  email: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  submittedData.name = formData.name
  submittedData.email = formData.email
  submitted.value = true

  formData.email = ''
  formData.name = ''
}
</script>

<style scoped>
/* Tambahan style opsional */
input {
  padding: 6px;
  margin-top: 4px;
  margin-bottom: 10px;
  display: block;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  border: none;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
