import { type App } from 'vue'
import { required } from '@vee-validate/rules'
import { Form as VeeForm, Field as VeeField, defineRule } from 'vee-validate'

export default {
  install(app: App) {
    app.component('veeForm', VeeForm)
    app.component('veeField', VeeField)

    defineRule('required', required)
  }
}
