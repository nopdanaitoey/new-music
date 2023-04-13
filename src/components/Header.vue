<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container flex items-center justify-start px-4 py-5 mx-auto">
      <!-- App Name -->
      <router-link
        class="mr-4 text-2xl font-bold text-white uppercase"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Music</router-link
      >

      <div class="flex items-center flex-grow">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <li>
            <RouterLink class="px-2 text-white" to="/about">About</RouterLink>
          </li>
          <!-- Navigation Links -->
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <RouterLink class="px-2 text-white" to="/manage-music">Manage</RouterLink>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="userStore.signOut">Logout</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'
export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore)
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen
      console.log('this.modalStore.isOpen', this.modalStore.isOpen)
    }
  }
}
</script>

<style lang="scss" scoped></style>
