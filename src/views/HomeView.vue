<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Loginuser from '@/components/Loginuser.vue'

const showLogin = ref(false)
</script>

<template>
  <main class="home-container">
    <div class="content">
      <h1 class="main-heading">Welcome to Foolics Customer Account</h1>
      <p class="subtext">Foolics is happy to see you again!</p>
      <Button
        v-if="!showLogin"
        label="Login"
        class="p-button-danger login-btn"
        @click="showLogin = true"
      />

      <Loginuser v-if="showLogin" />
    </div>
  </main>
</template>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.login-btn {
  width: 200px;
}
</style>
