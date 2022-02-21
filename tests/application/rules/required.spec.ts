import { RequiredFieldError } from '@application/errors'
import { RequiredRule } from '@application/rules'

describe('RequiredRule', () => {
  it('should return RequiredFieldError if value is null', () => {
    const sut = new RequiredRule(null, 'any_field')

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })
})
