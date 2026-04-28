# Ming UI

Ming UI 是一套 **自用型 Vue 3 组件库模板**，设计上参考了 Vant / Element 的基础交互方式：

- 组件 API 尽量简单（`props + slot + v-model`）
- 视觉偏中性、可快速二次定制
- `Index` 首页直接作为组件展示页（开箱即看）

## 1. 快速开始

```bash
npm install
npm run dev
```

访问 Vite 输出的本地地址（通常是 `http://localhost:5173`）即可看到组件展示页。

## 2. 当前组件

- `MButton` 按钮
- `MInput` 输入框
- `MTag` 标签
- `MCard` 卡片容器
- `MDialog` 弹窗

## 3. 使用方式

### 3.1 全局注册（推荐）

```ts
import { createApp } from 'vue'
import App from './App.vue'
import MingUI from './components'

createApp(App).use(MingUI).mount('#app')
```

### 3.2 按需引入

```ts
import { MButton, MInput } from './components'

app.use(MButton)
app.use(MInput)
```

## 4. 组件文档

### MButton

属性：

| 参数 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `default` | 按钮主题 |
| `plain` | `boolean` | `false` | 朴素按钮 |
| `round` | `boolean` | `false` | 圆角按钮 |
| `disabled` | `boolean` | `false` | 是否禁用 |

示例：

```vue
<MButton type="primary">主要按钮</MButton>
<MButton plain type="success">朴素按钮</MButton>
```

### MInput

`v-model`：`string`

属性：

| 参数 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `placeholder` | `string` | `请输入内容` | 占位符 |
| `disabled` | `boolean` | `false` | 是否禁用 |

示例：

```vue
<MInput v-model="keyword" placeholder="请输入关键字" />
```

### MTag

属性：

| 参数 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `type` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `default` | 标签类型 |
| `round` | `boolean` | `false` | 胶囊样式 |

示例：

```vue
<MTag type="warning" round>待处理</MTag>
```

### MCard

属性：

| 参数 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `title` | `string` | - | 卡片标题 |
| `desc` | `string` | - | 卡片描述 |

插槽：

- 默认插槽：卡片主体内容。

### MDialog

`v-model`：`boolean`，用于控制弹窗显示。

属性：

| 参数 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| `title` | `string` | `提示` | 弹窗标题 |

示例：

```vue
<MDialog v-model="visible" title="提示">
  弹窗内容
</MDialog>
```

## 5. 项目结构

```text
src/
  components/
    MButton.vue
    MCard.vue
    MDialog.vue
    MInput.vue
    MTag.vue
    index.ts
  App.vue        # Index 组件展示页
  main.ts
  styles.css
```

## 6. 后续可扩展建议

- 增加 `Toast / Tabs / Form / Table` 等高级组件
- 增加暗黑模式主题变量
- 增加单元测试（Vitest）和文档站（VitePress）
