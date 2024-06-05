export const weakMap = new WeakMap();

const MAX_ENDPOINT_CALLS = 5;

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;

  if (count >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count + 1);
}
