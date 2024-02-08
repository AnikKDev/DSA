export function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) return;
  const pivotIdx = partition(arr, lo, hi);
  //   dont include the pvt index
  qs(arr, lo, pivotIdx - 1);
  //   go beyond the pivot index = right side of the array
  qs(arr, lo, pivotIdx + 1);
}
// the purpose of this function is to determining the pivot by recursively going through the each nlogn array
export function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function QuickSort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
