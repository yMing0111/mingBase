<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
    round?: boolean
  }>(),
  {
    type: 'default',
    round: false
  }
)
</script>

<template>
  <span class="m-tag" :class="[`m-tag--${type}`, round && 'is-round']">
    <slot />
  </span>
</template>

<style scoped>
.m-tag {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-weight: 600;
}

.m-tag--default { background: #f1f5f9; color: #475569; }
.m-tag--primary { background: #e7edff; color: #3358de; }
.m-tag--success { background: #e8f9ef; color: #12803c; }
.m-tag--warning { background: #fff7e8; color: #ba7a06; }
.m-tag--danger { background: #ffeaeb; color: #c52c3b; }

.is-round { border-radius: 999px; }
</style>
