<script setup>
import { ref } from 'vue'
import TestComps from './components/TestComps.vue'
import FormHandling from './components/FormHandling.vue'

const count = ref(0)
const max = 10

function increment() {
  if (count.value < max) {
    count.value++
  }
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}

const name = `<span class="text-yellow-400">Arkhan Ardana</span>`

const objectOfAttrs = {
  id: 'some-id',
  class: 'some-class',
  style: 'color: red',
  href: 'https://pinterest.com',
}

const array = [
  {
    id: 1,
    name: 'Arkhan',
  },
  {
    id: 2,
    name: 'Arkhan2',
  },
  {
    id: 3,
    name: 'Arkhan3',
  },
  {
    id: 4,
    name: 'Arkhan4',
  },
]

const buah = ['mangga']
</script>

<template>
  <header>
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold">Coba Vue JS jir oawkoakw</h1>

      <h1 class="text-white">{{ products }}</h1>
      <input v-model="products" placeholder="Insert products" />

      <p>Text interpolation: {{ name }}</p>
      <p>Tambahan count: {{ count + 5 }}</p>

      <p>{{ count ? 'ada' : 'tidak ada' }}</p>
      <p>{{ count.toFixed(3) }}</p>

      <p>Directive HTML: <span v-html="name"></span></p>
      <a v-bind="objectOfAttrs">Anjay</a>

      <ul>
        <li v-for="item in array" :key="item.id">Nama: {{ item.name }}, ID: {{ item.id }}</li>
      </ul>

      <h1 v-if="buah.length > 0" class="text-2xl">Iya ada isinya</h1>

      <a :href="objectOfAttrs.href">Coba ke pinterest</a>
      <p>{{ count }}</p>
      <h1 v-html="name" class="text-2xl text-red"></h1>
      <div class="mt-4 p-6 bg-gray-200">
        <button @click="increment" :disabled="count >= max" class="mr-2 p-20 bg-black text-white">
          +
        </button>
        <button @click="decrement" :disabled="count <= 0" class="mr-2 p-20 bg-black text-white">
          -
        </button>
        <button @click="reset" class="mr-2 p-20 bg-black text-white">Reset</button>
        <ProductCard />
        <CompositionComps />
        <TestComps />
      </div>

      <FormHandling />
    </div>
  </header>
</template>
