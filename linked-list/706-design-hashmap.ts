class Block {
  key: number;
  val: number;
  next: Block | null;

  constructor(key: number, val: number, next: Block = null) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
};

/**
 * 实现哈希映射
 */
class MyHashMap {
  keyMap: Block[];

  constructor() {
    this.keyMap = new Array(1024);
  }

  _hash(key: number): number {
    return key % this.keyMap.length;
  }

  put(key: number, value: number): void {
    const hashKey = this._hash(key);
    if (this.keyMap[hashKey]) {
      let block = this.keyMap[hashKey];
      while (block) {
        if (block.key === key) {
          block.val = value;
          return;
        }
        block = block.next;
      }
      block = new Block(key, value);
      block.next = this.keyMap[hashKey];
      this.keyMap[hashKey] = block;
    } else {
      let block = new Block(key, value);
      this.keyMap[hashKey] = block;
    }
  }

  get(key: number): number {
    const hashKey = this._hash(key);
    if (this.keyMap[hashKey]) {
      let block = this.keyMap[hashKey];
      while (block) {
        if (block.key === key) {
          return block.val;
        }
        block = block.next;
      }
    }

    return -1;
  }

  remove(key: number): void {
    const hashKey = this._hash(key);
    if (this.keyMap[hashKey]) {
      let block = this.keyMap[hashKey];
      if (block.key === key) {
        this.keyMap[hashKey] = block.next;
        return;
      }
      while (block.next) {
        if (block.next.key === key) {
          block.next = block.next.next;
          return;
        }
        block = block.next;
      }
    }
  }
}