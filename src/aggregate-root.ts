import { Entity, Identifier } from './@shared/values-objects'

export abstract class AggregateRoot<ID extends Identifier> extends Entity<ID> {
  protected movePrivateKeys (): void {
    for (const prop in this) {
      if (prop.startsWith('_') && this.hasOwnProperty(prop)) {
        const key = prop.slice(1)
        this[key as keyof this] = this[prop]
      }
    }
  }

  protected removePrivateKeys (): void {
    for (const prop in this) {
      if (prop.startsWith('_') && this.hasOwnProperty(prop)) {
        delete this[prop]
      }
    }
  }
}
