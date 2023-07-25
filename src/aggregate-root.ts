import { Entity } from './@shared/values-objects'

export abstract class AggregateRoot<ID extends unknown[]> extends Entity {
  protected setAggregates (...aggregates: ID[]) {
    for (const aggregate of aggregates) {
      for (const prop of aggregate) {
        const keyName = (prop as unknown as {}).constructor.name
        const key = `${keyName.charAt(0).toLowerCase()}${keyName.slice(1)}`;
        (this as unknown as ID)[key as any] = (prop as unknown as { id: string }).id
      }
    }
  }
}
