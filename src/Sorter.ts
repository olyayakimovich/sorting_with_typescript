interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(index1: number, index2: number): boolean;
  abstract swap(index1: number, index2: number): void;

  sort = (): void => {
    const { length, compare, swap } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (compare(j, j + 1)) {
          swap(j, j + 1);
        }
      }
    }
  };
}
