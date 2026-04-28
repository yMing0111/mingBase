import type { App } from 'vue'
import MButtonRaw from './MButton.vue'
import MCardRaw from './MCard.vue'
import MTagRaw from './MTag.vue'
import MInputRaw from './MInput.vue'
import MDialogRaw from './MDialog.vue'
import { withInstall } from './types'

export const MButton = withInstall(MButtonRaw, 'MButton')
export const MCard = withInstall(MCardRaw, 'MCard')
export const MTag = withInstall(MTagRaw, 'MTag')
export const MInput = withInstall(MInputRaw, 'MInput')
export const MDialog = withInstall(MDialogRaw, 'MDialog')

const components = [MButton, MCard, MTag, MInput, MDialog]

const MingUI = {
  install(app: App) {
    components.forEach((comp) => app.use(comp))
  }
}

export default MingUI
