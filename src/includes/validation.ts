import { type App } from 'vue'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  between,
  confirmed,
  not_one_of as excluded
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
    defineRule('excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        if (ctx.field === 'tos') {
          return 'Please make sure you agree our terms of service'
        } else if (ctx.field === 'confirm_password') {
          return 'The passwords do not match. Please check again!'
        } else if (ctx?.rule?.name === 'required' && !ctx.value) {
          return `${ctx.field} is required`
        } else if (ctx?.rule?.name === 'excluded') {
          return `Sorry. Service is not available in ${ctx.value}`
        }
        return `${ctx.field} is invalid`
      }
    })
  }
}
