class Block {
  val: number;
  next: Block | null;

  constructor(val: number, next: Block = null) {
    this.val = val;
    this.next = next;
  }
};

/**
 * 实现哈希集合
 */
class MyHashSet {
  keyMap: Block[];

  constructor() {
    this.keyMap = new Array(1024);
  }

  _hash(key: number): number {
    return key % this.keyMap.length;
  }

  add(key: number): void {
    if (this.contains(key)) return;

    const hashKey = this._hash(key);
    const block = new Block(key);
    if (this.keyMap[hashKey]) {
      block.next = this.keyMap[hashKey];
    }
    this.keyMap[hashKey] = block;
  }

  remove(key: number): void {
    const hashKey = this._hash(key);
    let block = this.keyMap[hashKey];
    if (!block) return;

    if (block.val === key) {
      this.keyMap[hashKey] = block.next;
    } else {
      while (block.next) {
        if (block.next.val === key) {
          block.next = block.next.next;
          return;
        }
        block = block.next;
      }
    }
  }

  contains(key: number): boolean {
    const hashKey = this._hash(key);
    let block = this.keyMap[hashKey];
    while (block) {
      if (block.val === key) {
        return true;
      }
      block = block.next;
    }

    return false;
  }
}