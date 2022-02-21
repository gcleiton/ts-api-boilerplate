import { Rule } from '@application/contracts'
import { RequiredFieldError } from '@application/errors'

export class RequiredRule implements Rule {
  constructor(readonly value: any, readonly fieldName: string) {}

  passes(): Error | undefined {
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

  override passes(): Error | undefined {
    const error = super.passes()
    if (error !== undefined || this.value === '') {
      return new RequiredFieldError(this.fieldName)
    }
  }
}
