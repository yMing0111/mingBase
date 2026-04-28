<script setup lang="ts">
const model = defineModel<string>({ default: '' })

withDefaults(
  defineProps<{
    placeholder?: string
    disabled?: boolean
  }>(),
  {
    placeholder: '请输入内容',
    disabled: false
  }
)
</script>

<template>
  <input
    v-model="model"
    class="m-input"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<style scoped>
.m-input {
  width: 100%;
  border: 1px solid #d0d7de;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.m-input:focus {
  border-color: #3965ff;
  box-shadow: 0 0 0 3px rgba(57, 101, 255, 0.15);
}

.m-input:disabled {
  background: #f8fafc;
  cursor: not-allowed;
}
</style>
