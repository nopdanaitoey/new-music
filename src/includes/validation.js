import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('passwords_mismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required.`,
          min: `thie field ${ctx.field} is too short.`,
          max: `thie field ${ctx.field} is too long.`,
          alpha_spaces: `thie field ${ctx.field} may only contain alphabetical characters.`,
          min_value: `thie field ${ctx.field} is too low.`,
          max_value: `thie field ${ctx.field} is too hiht.`,
          excluded: `You are not allowed to use this value for the feild ${ctx.field}.`,
          country_excluded: `Due to restrictions, we do not accept user from this local ${ctx.field}.`,
          passwords_mismatch: `The passwords don't match.`,
          tos: 'You must accept the Terms of Service.'
        }
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `the field ${ctx.field} is invalid`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
