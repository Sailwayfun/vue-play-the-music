import { type App } from 'vue'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  between,
  confirmed
} from '@vee-validate/rules'
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  configure,
  ErrorMessage
} from 'vee-validate'

// import { localize } from '@vee-validate/i18n'

export default {
  install(app: App) {
    app.component('veeForm', VeeForm)
    app.component('veeField', VeeField)
    app.component('errorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('between', between)
    defineRule('confirmed', confirmed)

    configure({
      generateMessage: (ctx) => {
        if (ctx.field === 'confirm_password') {
          return 'The passwords do not match. Please check again!'
        }
        return `${ctx.field} is invalid`
      }
    })
  }
}
