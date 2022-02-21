export interface Rule {
  validate: () => Error | undefined
}
