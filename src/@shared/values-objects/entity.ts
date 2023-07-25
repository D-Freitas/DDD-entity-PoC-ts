export abstract class Entity {
  protected movePrivateKeys (): void {
    for (const prop in this) {
      if (this.#hasOwnPrivateProperty(prop)) {
        const key = prop.slice(1)
        this[key as keyof this] = this[prop]
      }
    }
  }

  protected removePrivateKeys (): void {
    for (const prop in this) {
      if (this.#hasOwnPrivateProperty(prop)) {
        delete this[prop]
      }
    }
  }

  #hasOwnPrivateProperty (prop: Extract<keyof this, string>): boolean {
    return prop.startsWith('_') && this.hasOwnProperty(prop)
  }
}
