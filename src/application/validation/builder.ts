import { Rule } from '@application/contracts'
import { RequiredRule, RequiredStringRule } from '@application/rules'

type OfInput = {
  value: any
  fieldName: string
}

export class ValidationBuilder {
  private readonly rules: Rule[]

  private constructor(
    private readonly value: any,
    private readonly fieldName: string
  ) {
    this.rules = []
  }

  static of({ value, fieldName }: OfInput): ValidationBuilder {
    return new ValidationBuilder(value, fieldName)
  }

  required(): ValidationBuilder {
    if (typeof this.value === 'string') {
      this.rules.push(new RequiredStringRule(this.value, this.fieldName))
    } else {
      this.rules.push(new RequiredRule(this.value, this.fieldName))
    }

    return this
  }

  build(): Rule[] {
    return this.rules
  }
}
