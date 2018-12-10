export default class LocalStorage {
  constructor(storageKey) {
    this.storageKey = storageKey;
    this.storageEnabled = LocalStorage.localStorageAvailable();
  }

  read(key) {
    if (this.storageEnabled) {
      const data =
        JSON.parse(window.localStorage.getItem(this.storageKey)) || {};

      if (key) {
        const keyData = data[key];

        return keyData === "undefined" ? null : keyData;
      }

      return data;
    }

    return key ? null : {};
  }

  write(saveObject) {
    if (this.storageEnabled) {
      const writeData = Object.assign(this.read(), saveObject);

      window.localStorage.setItem(this.storageKey, JSON.stringify(writeData));
    }
  }

  deleteKey(key) {
    if (this.storageEnabled && key) {
      const storageData = this.read();

      delete storageData[key];

      window.localStorage.setItem(this.storageKey, JSON.stringify(storageData));
    }
  }

  clear() {
    if (this.storageEnabled) {
      window.localStorage.setItem(this.storageKey, JSON.stringify({}));
    }
  }

  destroy() {
    if (this.storageEnabled) {
      window.localStorage.removeItem(this.storageKey);
    }
  }

  static localStorageAvailable() {
    const testKey = "localStorageTest";

    try {
      window.localStorage.setItem(testKey, "test");
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
