export function writeLocalStorage(key: string, data: any, isObject: boolean = false) {
  localStorage.setItem(key, isObject ? JSON.stringify(data) : data);
}

export function readLocalStorage(key: string, isObject: boolean = false) {
  const valor = localStorage.getItem(key);
  return isObject ? JSON.parse(valor ?? "{}") : valor;
}

export function deleteLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export function clearLocalStorage() {
  localStorage.clear();
}
