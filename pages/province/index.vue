<template>
  <div class="bg-gray-800 text-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 border-b border-gray-500 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-300"></h3>
      <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-300"></p>
    </div>
    <div>
      <dl>
        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt
            v-for="province in provinces"
            :key="province.code"
            class="text-sm leading-5 font-medium text-gray-500"
          >
            <nuxt-link :to="`/province/${province.code}`">
              {{ province.name }}
            </nuxt-link>
          </dt>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('province/getProvinceData')
  },
  asyncData({ store, params, payload }) {
    return {
      slug: params.slug
    }
  },
  data() {},
  computed: {
    regionData() {
      return this.$store.getters['province/data'](this.slug)
    },
    provinces() {
      return this.$store.getters['province/province'].filter((p) => p.code)
    }
  },
  created() {
    this.$store.dispatch('setTitle', 'Province')
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
