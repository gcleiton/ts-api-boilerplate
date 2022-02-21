export interface Rule {
  passes: () => Error | undefined
}
