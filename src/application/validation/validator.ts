import { Rule } from '@application/contracts'

export abstract class Validator {
  abstract buildRules(request: any): Rule[]

  validate(request: any): Error[] {
    const rules = this.buildRules(request)
    const errors = []
    for (const rule of rules) {
      const error = rule.validate()
      if (error) {
        errors.push(error)
      }
    }

    return errors
  }
}
