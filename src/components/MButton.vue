<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
    plain?: boolean
    round?: boolean
    disabled?: boolean
  }>(),
  {
    type: 'default',
    plain: false,
    round: false,
    disabled: false
  }
)

const cls = computed(() => [
  'm-button',
  `m-button--${props.type}`,
  props.plain && 'is-plain',
  props.round && 'is-round',
  props.disabled && 'is-disabled'
])
</script>

<template>
  <button :class="cls" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped>
.m-button {
  border: none;
  outline: none;
  padding: 9px 18px;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  transition: all 0.2s;
}

.m-button:hover:not(.is-disabled) {
  opacity: 0.92;
  transform: translateY(-1px);
}

.m-button--default { background: #64748b; }
.m-button--primary { background: #3965ff; }
.m-button--success { background: #16a34a; }
.m-button--warning { background: #f59e0b; }
.m-button--danger { background: #ef4444; }

.is-plain {
  background: #fff;
  border: 1px solid currentColor;
}
.is-plain.m-button--default { color: #64748b; }
.is-plain.m-button--primary { color: #3965ff; }
.is-plain.m-button--success { color: #16a34a; }
.is-plain.m-button--warning { color: #f59e0b; }
.is-plain.m-button--danger { color: #ef4444; }

.is-round { border-radius: 999px; }
.is-disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
</style>
