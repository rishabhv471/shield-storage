# Shield Storage

`shield-storage` is a lightweight JavaScript library that helps secure browser storage (`localStorage` and `sessionStorage`) with AES encryption. This library ensures sensitive data is encrypted before being stored in the browser and decrypted when retrieved. It's ideal for web applications that need to store user-related data securely in the browser.

## Features

- Encrypts data before storing it in `sessionStorage` or `localStorage`.
- Decrypts stored data when retrieved from storage.
- Supports AES encryption for high security.
- Simple API for easy integration.
- Works in modern browsers.

## Installation

You can install the library via npm:

```bash
npm install shield-storage
```


Alternatively, you can add it via yarn:

```bash
yarn add shield-storage
```
Usage

Encrypt and store data
To store encrypted data in sessionStorage or localStorage, you can use the setItem method. It automatically encrypts the data before saving it.
```bash
import { setItem } from 'shield-storage';

// Example data to store
const userData = { username: "testUser", role: "admin" };

// Encrypt and store the data in sessionStorage
setItem('userData', userData);
```

Retrieve and decrypt data
To retrieve the stored data and decrypt it, use the getItem method.
```bash
import { getItem } from 'shield-storage';

// Retrieve and decrypt the data
const decryptedData = getItem('userData');
console.log(decryptedData); // { username: "testUser", role: "admin" }
```

Remove data
To remove data from sessionStorage or localStorage, use the removeItem method:

```bash
import { removeItem } from 'shield-storage';

// Remove the item from storage
removeItem('userData');

Clear all data
To clear all items from sessionStorage or localStorage, use the clear method:

import { clear } from 'shield-storage';

// Clear all items from storage
clear();
```

## Methods
setItem(key, value): Encrypts the value and stores it under the key in sessionStorage.
getItem(key): Retrieves the encrypted value from sessionStorage, decrypts it, and returns the original value.
removeItem(key): Removes the item with the specified key from sessionStorage.
clear(): Clears all items stored in sessionStorage.

## Encryption
This library uses AES encryption for securing the stored data. The encryption key (SECRET_KEY) should ideally be retrieved from an environment variable or a secure configuration file. In this example, the default encryption key is hardcoded (this should be updated for production).

## Security
While the data is encrypted before being stored, it is essential to remember that client-side encryption alone does not fully protect against all security threats. It’s important to combine this with server-side security measures such as HTTPS and secure authentication.

## Contributing
We welcome contributions! If you'd like to improve this library or add new features, feel free to open a pull request.

## Steps to contribute:
Fork the repository.
Clone your fork and create a new branch for your changes.
Make your changes and run tests.
Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

