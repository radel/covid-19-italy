<template>
  <div class="bg-gray-700 text-gray-100">
    <nav class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <nuxt-link to="/">
                <h1 class="text-white text-2xl font-bold">
                  Covid Report Italy
                </h1>
              </nuxt-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline">
                <nuxt-link
                  to="/"
                  class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Italia</nuxt-link
                >
                <nuxt-link
                  to="/regioni"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Regioni</nuxt-link
                >
                <nuxt-link
                  to="/province"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  >Province</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            ultimo aggiornamento: {{ $store.getters.lastUpdate }}
          </div>
          <div class="-mr-2 flex hidden"></div>
        </div>
      </div>
    </nav>
    <header class="bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold leading-tight text-gray-100">
          {{ $store.getters.title }}
        </h2>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <nuxt />
      </div>
    </main>
    <footer class="bg-gray-900 text-white p-8">
      <ul>
        <li>
          fonte dati:
          <a class="text-gray-500" href="https://github.com/pcm-dpc/COVID-19"
            >pcm-dpc/COVID-19</a
          >
        </li>
        <li>
          made by:
          <a target="_blank" href="https://www.twitter.com/radel">marco</a>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
      title: 'Italy'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>
<style lang="css">
body {
  font-family: 'Spartan', sans-serif;
}
</style>
