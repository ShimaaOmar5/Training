<template>
  <div class="form-container">
    <div class="p-inputgroup">
      <span class="p-inputgroup-addon">
        <i class="pi pi-user"></i>
      </span>
      <InputText placeholder="Username" />
    </div>

    <div class="p-inputgroup">
      <span class="p-inputgroup-addon">
        <i class="pi pi-lock"></i>
      </span>
      <InputText type="password" placeholder="Password" />
    </div>

    <Button label="Login" class="p-button-danger login-btn" />
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.p-inputgroup {
  width: 300px;
}

.login-btn {
  width: 300px;
}
</style>
