global.sessionStorage = {
    store: {},
    setItem(key, value) {
      this.store[key] = value;
    },
    getItem(key) {
      return this.store[key] || null;
    },
    removeItem(key) {
      delete this.store[key];
    },
    clear() {
      this.store = {};
    }
  };
  
const { setItem, getItem, removeItem, clear } = require("../index");

describe("ShieldStorage", () => {

  beforeEach(() => {
    sessionStorage.clear();
  });

  test("setItem should store encrypted data in sessionStorage", () => {
    const data = { user: "JohnDoe", token: "12345" };
    setItem("authData", data);

    const encryptedData = sessionStorage.getItem("authData");
    expect(encryptedData).not.toBeNull(); 
    expect(encryptedData).not.toEqual(JSON.stringify(data));  
  });

  test("getItem should return decrypted data from sessionStorage", () => {
    const data = { user: "JohnDoe", token: "12345" };
    setItem("authData", data);

    const decryptedData = getItem("authData");
    expect(decryptedData).toEqual(data);  
  });

  test("getItem should return null if data is not found", () => {
    const result = getItem("nonExistentKey");
    expect(result).toBeNull();  
  });

  test("removeItem should remove the data from sessionStorage", () => {
    const data = { user: "JohnDoe", token: "12345" };
    setItem("authData", data);

    removeItem("authData");
    const removedData = sessionStorage.getItem("authData");
    expect(removedData).toBeNull();  
  });

  test("clear should remove all data from sessionStorage", () => {
    const data1 = { user: "JohnDoe", token: "12345" };
    const data2 = { user: "JaneDoe", token: "67890" };
    
    setItem("authData1", data1);
    setItem("authData2", data2);

    clear();

    const clearedData1 = sessionStorage.getItem("authData1");
    const clearedData2 = sessionStorage.getItem("authData2");

    expect(clearedData1).toBeNull(); 
    expect(clearedData2).toBeNull();
  });

  test("getItem should handle decryption errors gracefully", () => {
    
    sessionStorage.setItem("authData", "malformedEncryptedString");

    const result = getItem("authData");
    expect(result).toBeNull();  
  });
});
