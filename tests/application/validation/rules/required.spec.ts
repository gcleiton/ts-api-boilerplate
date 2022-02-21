import { RequiredFieldError } from '@application/errors'
import { RequiredRule, RequiredStringRule } from '@application/validation/rules'

describe('RequiredRule', () => {
  it('should return RequiredFieldError if value is null', () => {
    const sut = new RequiredRule(null, 'any_field')

    const error = sut.passes()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return RequiredFieldError if value is undefined', () => {
    const sut = new RequiredRule(undefined, 'any_field')

    const error = sut.passes()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return undefined if value is not empty', () => {
    const sut = new RequiredRule('any_value', 'any_field')

    const error = sut.passes()

    expect(error).toBeUndefined()
  })
})

describe('RequiredStringRule', () => {
  it('should extend RequiredRule', () => {
    const sut = new RequiredStringRule('any_value', 'any_field')

    expect(sut).toBeInstanceOf(RequiredRule)
  })

  it('should return RequiredFieldError if value is empty', () => {
    const sut = new RequiredStringRule('', 'any_field')

    const error = sut.passes()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return undefined if value is not empty', () => {
    const sut = new RequiredStringRule('any_value', 'any_field')

    const error = sut.passes()

    expect(error).toBeUndefined()
  })
})
