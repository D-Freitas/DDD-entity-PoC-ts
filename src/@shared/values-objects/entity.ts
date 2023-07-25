import { Identifier } from './identifier'

export abstract class Entity<ID extends Identifier> {
  protected setAggregates (ids: ID) {
    for (const prop in ids) {
      (this as unknown as ID)[prop] = ids[prop]
    }
  }
}
