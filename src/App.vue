<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const dialogVisible = ref(false)
</script>

<template>
  <main class="page">
    <header class="hero">
      <h1>Ming UI</h1>
      <p>一套偏移动端审美、桌面端可复用的 Vue3 轻量组件库（对标 Vant / Element 的常用基础能力）。</p>
      <div class="hero__tags">
        <MTag type="primary" round>Vue 3</MTag>
        <MTag type="success" round>TypeScript</MTag>
        <MTag type="warning" round>Demo Index</MTag>
      </div>
    </header>

    <section class="grid">
      <MCard title="Button 按钮" desc="支持主题、朴素和圆角样式">
        <div class="row">
          <MButton>默认按钮</MButton>
          <MButton type="primary">主要按钮</MButton>
          <MButton type="success">成功按钮</MButton>
          <MButton type="danger">危险按钮</MButton>
        </div>
        <div class="row">
          <MButton plain type="primary">朴素按钮</MButton>
          <MButton round type="warning">圆角按钮</MButton>
          <MButton disabled>禁用</MButton>
        </div>
      </MCard>

      <MCard title="Input 输入框" desc="搭配 v-model 进行双向绑定">
        <MInput v-model="text" placeholder="试试输入你的名字" />
        <p class="result">当前输入：{{ text || '（空）' }}</p>
      </MCard>

      <MCard title="Tag 标签" desc="用于状态、分类标记">
        <div class="row">
          <MTag>默认</MTag>
          <MTag type="primary">进行中</MTag>
          <MTag type="success">成功</MTag>
          <MTag type="warning">待处理</MTag>
          <MTag type="danger">失败</MTag>
        </div>
      </MCard>

      <MCard title="Dialog 弹窗" desc="通过 v-model 控制开关">
        <MButton type="primary" @click="dialogVisible = true">打开弹窗</MButton>
        <MDialog v-model="dialogVisible" title="这是一个示例弹窗">
          你可以把确认按钮、表单等内容放进这个区域。
        </MDialog>
      </MCard>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 28px;
}

.hero {
  max-width: 960px;
  margin: 0 auto 18px;
}

.hero h1 {
  margin: 0;
  font-size: 36px;
}

.hero p {
  margin: 12px 0;
  color: #475569;
}

.hero__tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.grid {
  max-width: 960px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;
}

.row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.result {
  margin-top: 10px;
  color: #475569;
}

@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
