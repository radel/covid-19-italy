<template>
  <div class="bg-gray-900 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 border-b border-gray-700 sm:px-6">
      <h3 class="text-normal text-center leading-6 font-medium text-gray-300">
        {{ title }}
      </h3>
    </div>
    <div class="w-full text-center text-5xl font-bold">{{ number }}</div>
    <div class="bg-gray-900 text-center text-gray-600 text-normal">
      <span v-if="variation > 0">+</span> <span v-else>-</span> {{ variation }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: ''
    },
    variation: {
      type: [String, Number],
      default: '323'
    },
    number: {
      type: [String, Number],
      default: 1000
    }
  }
}
</script>
