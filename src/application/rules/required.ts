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

export class RequiredStringRule extends RequiredRule {
  constructor(
    override readonly value: any,
    override readonly fieldName: string
  ) {
    super(value, fieldName)
  }
}
