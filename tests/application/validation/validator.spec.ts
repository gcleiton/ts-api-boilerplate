import { mock, MockProxy } from 'jest-mock-extended'

import { Rule } from '@application/contracts'
import { Validator } from '@application/validation'

class ValidatorStub extends Validator {
  buildRules(request: any): Rule[] {
    return []
  }
}

describe('Validator', () => {
  let sut: ValidatorStub
  let rule1: MockProxy<Rule>
  let rule2: MockProxy<Rule>
  let rules: Rule[]

  beforeAll(() => {
    rule1 = mock()
    rule1.validate.mockReturnValue(undefined)
    rule2 = mock()
    rule2.validate.mockReturnValue(undefined)
    rules = [rule1, rule2]
  })

  beforeEach(() => {
    sut = new ValidatorStub()
    jest.spyOn(sut, 'buildRules').mockReturnValue(rules)
  })

  it('should return no errors if all rules return undefined', () => {
    const errors = sut.validate({
      key: 'any_value'
    })

    expect(errors).toEqual([])
  })

  it('should return errors if any rule broken', () => {
    rule2.validate.mockReturnValueOnce(new Error('error_2'))

    const errors = sut.validate({
      key: 'any_value'
    })

    expect(errors).toEqual([new Error('error_2')])
  })

  it('should return errors if any rule broken', () => {
    jest.spyOn(sut, 'validate').mockReturnValue([new Error()])

    const errors = sut.validate({ key: 'any_value' })

    expect(errors).toEqual([new Error()])
  })

  it('should return empty array if no rule broken', () => {
    const errors = sut.validate({ key: 'any_value' })

    expect(errors).toEqual([])
  })
})
