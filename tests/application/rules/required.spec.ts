import { RequiredFieldError } from '@application/errors'
import { RequiredRule } from '@application/rules'

describe('RequiredRule', () => {
  it('should return RequiredFieldError if value is null', () => {
    const sut = new RequiredRule(null, 'any_field')

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return RequiredFieldError if value is undefined', () => {
    const sut = new RequiredRule(undefined, 'any_field')

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return undefined if value is not empty', () => {
    const sut = new RequiredRule('any_value', 'any_field')

    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})
