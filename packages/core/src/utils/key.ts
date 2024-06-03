/**
 * An auto-incrementing identifier for keys.
 */

let n = 0

/**
 * A class that keeps track of a key string. We use a full class here because we
 * want to be able to use them as keys in `WeakMap` objects.
 */
export class Key {
  id: string

  constructor() {
    n += 1
    n += Math.floor(Math.random() * 100000000000)
    this.id = `${n}`
  }
}
