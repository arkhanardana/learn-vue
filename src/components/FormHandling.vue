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

      <label for="address">Address:</label>
      <input type="text" id="address" v-model="formData.address" required />
      <br /><br />

      <button
        type="submit"
        :disabled="submitting"
        class="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Kirim
      </button>
    </form>

    <div v-if="submittedDisplay">
      <h3>Data yang Dikirim:</h3>
      <p><strong>Nama:</strong> {{ submittedData.name }}</p>
      <p><strong>Email:</strong> {{ submittedData.email }}</p>
      <p><strong>Address:</strong> {{ submittedData.address }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  address: '',
})

const submittedData = reactive({
  name: '',
  email: '',
  address: '',
})

const submitting = ref(false) // Use for disabling the button during submission
const submittedDisplay = ref(false) // Use for controlling the display of submitted data

const handleSubmit = () => {
  submitting.value = true // Disable the button
  submittedDisplay.value = false // Hide previous submitted data before new submission

  setTimeout(() => {
    submittedData.name = formData.name
    submittedData.email = formData.email
    submittedData.address = formData.address

    submitting.value = false // Re-enable the button
    submittedDisplay.value = true // Show the submitted data

    // Clear the form fields after submission is complete and data is displayed
    formData.email = ''
    formData.name = ''
    formData.address = ''
  }, 2000)
}
</script>

<style scoped>
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
