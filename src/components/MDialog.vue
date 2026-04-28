<script setup lang="ts">
defineProps<{
  title?: string
}>()

const visible = defineModel<boolean>({ default: false })
</script>

<template>
  <teleport to="body">
    <div v-if="visible" class="m-dialog-mask" @click="visible = false">
      <div class="m-dialog" @click.stop>
        <header class="m-dialog__header">
          <strong>{{ title || '提示' }}</strong>
          <button class="m-dialog__close" @click="visible = false">×</button>
        </header>
        <div class="m-dialog__body">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.m-dialog-mask {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  z-index: 999;
}

.m-dialog {
  width: min(560px, 100%);
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}

.m-dialog__header {
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eef2f7;
}

.m-dialog__close {
  border: none;
  background: transparent;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}

.m-dialog__body {
  padding: 18px;
  color: #334155;
}
</style>
