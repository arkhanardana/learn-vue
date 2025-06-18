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

    <select
      name="fruit"
      id="fruit"
      v-model="selectData"
      class="border-1 border-amber-500"
      placeholder="Pilih"
    >
      <option value="">Pilih buah</option>
      <option value="mangga">Mangga</option>
      <option value="pisang">Pisang</option>
      <option value="semangka">Semangka</option>
    </select>

    <p>Hasil nya yang di select: {{ selectData }}</p>

    <div class="block">
      <p>Click untuk buka modal</p>
      <button @click="handleOpenModal">Open Modal</button>
    </div>

    <div v-if="isOpenModal">
      <p>Ini adalah modal yang muncul</p>
    </div>

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

const selectData = ref('')

const submittedData = reactive({
  name: '',
  email: '',
  address: '',
})

const submitting = ref(false)
const submittedDisplay = ref(false)
const isOpenModal = ref(false)

const handleSubmit = () => {
  submitting.value = true
  submittedDisplay.value = false

  setTimeout(() => {
    submittedData.name = formData.name
    submittedData.email = formData.email
    submittedData.address = formData.address

    submitting.value = false
    submittedDisplay.value = true

    formData.email = ''
    formData.name = ''
    formData.address = ''
  }, 2000)
}

const handleOpenModal = () => {
  isOpenModal.value = !isOpenModal.value
}
</script>

<style scoped>
input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  display: block;
}
input:focus {
  color: white;
  border-color: #45a049;
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
