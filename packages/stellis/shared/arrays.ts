export function forEach<T>(arr: T[], callback: (value: T, index: number) => (boolean | void)) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (callback(arr[i], i)) {
      break;
    }
  }
}

export function some<T>(arr: T[], callback: (value: T, index: number) => boolean) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (callback(arr[i], i)) {
      return true;
    }
  }
  return false;
}

export function every<T>(arr: T[], callback: (value: T, index: number) => boolean) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  return true;
}

export function join(arr: string[], joiner?: string) {
  let result = '';
  if (joiner) {
    forEach(arr, (value, i) => {
      result += value;
      if (i < arr.length - 1) {
        result += joiner;
      }
    });
  } else {
    forEach(arr, (value) => {
      result += value;
    });
  }
  return result;
}
