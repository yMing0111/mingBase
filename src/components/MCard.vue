<script setup lang="ts">
defineProps<{
  title: string
  desc?: string
}>()
</script>

<template>
  <div class="m-card">
    <header class="m-card__header">
      <h3>{{ title }}</h3>
      <p v-if="desc">{{ desc }}</p>
    </header>
    <section class="m-card__body">
      <slot />
    </section>
  </div>
</template>

<style scoped>
.m-card {
  background: #fff;
  border-radius: 14px;
  border: 1px solid #ebedf0;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);
}

.m-card__header {
  padding: 16px 18px;
  border-bottom: 1px solid #f2f3f5;
}

.m-card__header h3 {
  margin: 0;
  font-size: 16px;
}

.m-card__header p {
  margin: 6px 0 0;
  color: #64748b;
  font-size: 13px;
}

.m-card__body {
  padding: 16px 18px;
}
</style>
