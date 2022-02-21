import { Rule } from '@application/contracts'
import { RequiredFieldError } from '@application/errors'

export class RequiredRule implements Rule {
  constructor(readonly value: any, readonly fieldName: string) {}

  validate(): Error | undefined {
    if (this.value === null || this.value === undefined) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}
