import type { App, DefineComponent } from 'vue'

export type SFCWithInstall<T> = T & { install(app: App): void }

export function withInstall<T extends DefineComponent>(component: T, name: string): SFCWithInstall<T> {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    app.component(name, component)
  }
  return component as SFCWithInstall<T>
}
