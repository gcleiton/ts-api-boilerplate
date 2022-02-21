import { RequiredRule, RequiredStringRule } from '@application/rules'
import { ValidationBuilder } from '@application/validation'

describe('ValidationBuilder', () => {
  it('should return RequiredRule', () => {
    const rules = ValidationBuilder.of({
      value: 'any_value',
      fieldName: 'any_field_name'
    })
      .required()
      .build()

    expect(rules).toEqual([new RequiredRule('any_value', 'any_field_name')])
  })
  it('should return RequiredStringRule', () => {
    const rules = ValidationBuilder.of({
      value: 'any_value',
      fieldName: 'any_field_name'
    })
      .required()
      .build()

    expect(rules).toEqual([
      new RequiredStringRule('any_value', 'any_field_name')
    ])
  })
})
