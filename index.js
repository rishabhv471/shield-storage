const CryptoJS = require('crypto-js');

// Secret key for encryption (in a real project, get this from env or config)
const SECRET_KEY = "your-very-secure-key";

/**
 * Encrypts the given data using AES encryption.
 *
 * @param {any} data - The data to be encrypted. Can be a string, object, or array.
 * @returns {string} The encrypted string.
 */
function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

/**
 * Decrypts the given encrypted string back into its original data.
 *
 * @param {string} ciphertext - The encrypted string to be decrypted.
 * @returns {any} The decrypted data, or `null` if decryption fails.
 */
function decryptData(ciphertext) {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Failed to decrypt data:", error);
    return null;
  }
}

/**
 * Stores an encrypted value in sessionStorage under the specified key.
 *
 * @param {string} key - The key under which the value should be stored.
 * @param {any} value - The value to be encrypted and stored.
 */
function setItem(key, value) {
  try {
    const encryptedValue = encryptData(value);
    sessionStorage.setItem(key, encryptedValue);
  } catch (error) {
    console.error("Error setting item in storage:", error);
  }
}

/**
 * Retrieves and decrypts a value from sessionStorage.
 *
 * @param {string} key - The key of the item to retrieve.
 * @returns {any} The decrypted value, or `null` if the key does not exist or decryption fails.
 */
function getItem(key) {
  try {
    const encryptedValue = sessionStorage.getItem(key);
    if (!encryptedValue) return null;
    return decryptData(encryptedValue);
  } catch (error) {
    console.error("Error getting item from storage:", error);
    return null;
  }
}

/**
 * Removes a specific item from sessionStorage.
 *
 * @param {string} key - The key of the item to remove.
 */
function removeItem(key) {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing item from storage:", error);
  }
}

/**
 * Clears all items from sessionStorage.
 */
function clear() {
  try {
    sessionStorage.clear();
  } catch (error) {
    console.error("Error clearing storage:", error);
  }
}

/**
 * ShieldStorage - Provides methods for secure sessionStorage management with AES encryption.
 *
 * @module shield-storage
 */
module.exports = {
  setItem,
  getItem,
  removeItem,
  clear,
};
