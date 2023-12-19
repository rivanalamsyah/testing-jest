# Jest Tutorial

## Getting Started

_pastikan sudah terinstall Node js di laptop kalian!, jika belum silahkan install melalui [link berikut](https://nodejs.org/en/download/)_

`minimum node version >= 14.x.x`

Download file zip pada repository ini atau clone repository ini dengan cara menjalankan perintah berikut didalam terminal apabila kalian memiliki git bash

```bash
git clone https://github.com/wicahma/tutorial-jest.git
```

Jalankan perintah berikut didalam direktori file `/tutorial-jest` untuk menginstall dependency

```bash
npm i
````

## Running the tests

Jalankan perintah berikut didalam direktori file `/tutorial-jest` untuk menjalankan test

```bash
npm test
// atau
npm run test
```

Setelah selesai merunning pengujian, silahkan pahami beberapa function javascript sederhana serta pahami kode pengujian yang telah dibuat.

Sebagai referensi tambahan, silahkan baca dasar dasar jest pada penjelasan dibawah ini, untuk setiap penjelasan yang ada, telah disertakan link referensi yang merujuk kepada dokumentasi resmi jest.

## Basic Jest

### 1. Test

Test adalah sebuah fungsi yang digunakan untuk memastikan bahwa kode yang kita buat berjalan dengan baik. Test akan menghasilkan output `true` atau `false` yang menandakan kode yang kita buat sudah sesuai dengan yang kita harapkan atau belum.

Example:

```javascript
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
```

Reference:

- https://jestjs.io/docs/api#testname-fn-timeout

### 2. Test Driven Development

Test driven development adalah sebuah teknik yang digunakan untuk menulis test sebelum menulis kode yang akan di test. Test driven development digunakan untuk memastikan bahwa kode yang kita buat sudah di test dengan baik.

### 3. Test Suite

Test suite adalah sebuah blok kode yang berisi test. Test suite dapat berisi banyak test. Test suite dapat dibuat dengan menggunakan fungsi `describe()`.

Example:

```javascript
describe("Test Suite", () => {
  test("two plus two is four", () => {
    expect(2 + 2).toBe(4);
  });

  test("two plus two is not five", () => {
    expect(2 + 2).not.toBe(5);
  });

  test("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
```

Reference:

- https://jestjs.io/docs/api#describename-fn

### 4. Test Case

Test case adalah sebuah blok kode yang berisi test untuk satu kasus. Test case dapat dibuat dengan menggunakan fungsi `it()` atau `test()`.

Perbedaan antara `it()` dan `test()` sebenarnya hanya pada nama saja. Keduanya memiliki fungsi yang sama yaitu untuk membuat test case. `it()` dan `test()` dapat digunakan secara bergantian.

Dalam bahasa inggris, `it()` dan `test()` menjadi masuk akal sebagai penamaan fungsi untuk mempermudah keterbacaan test case. Sebagai contoh:

Example:

```javascript
// it() example
describe("Arithmetic", () => {
  it("should add number correcly", () => {
    expect(2 + 2).toBe(4);
  });

  it("should subtract number correcly", () => {
    expect(2 - 2).toBe(0);
  });
});

describe("Object", () => {
  it("should assign object correcly", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});

// test() example
describe("Arithmetic", () => {
  test("if function add number correcly", () => {
    expect(2 + 2).toBe(4);
  });

  test("if function subtract number correcly", () => {
    expect(2 - 2).toBe(0);
  });
});
```

Reference:

- https://jestjs.io/docs/api#testname-fn-timeout
- https://stackoverflow.com/questions/45778192/what-is-the-difference-between-it-and-test-in-jest

### 5. Matcher

Matcher adalah sebuah fungsi yang digunakan untuk membandingkan hasil dari kode yang kita buat dengan yang kita harapkan. Matcher akan menghasilkan output `true` atau `false` yang menandakan kode yang kita buat sudah sesuai dengan yang kita harapkan atau belum.

Example:

```javascript
describe("Test Suite", () => {
  it("two plus two is four", () => {
    expect(2 + 2).toBe(4); // toBe() matcher
  });

  it("two plus two is not five", () => {
    expect(2 + 2).not.toBe(5); // not.toBe() matcher
  });

  it("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 }); // toEqual() matcher
  });
});
```

Dalam contoh kode diatas terdapat 3 matcher yang digunakan:

- `toBe()`
- `not.toBe()`
- `toEqual()`

Reference:

- https://jestjs.io/docs/using-matchers
- https://jestjs.io/docs/expect

### 6. Setup dan Teardown

Setup dan teardown adalah sebuah fungsi yang digunakan untuk menyiapkan dan membersihkan data yang dibutuhkan oleh test. Setup dan teardown akan dijalankan sebelum dan setelah test dijalankan.

List fungsi setup dan teardown:

- `afterAll(fn, timeout)`
- `afterEach(fn, timeout)`
- `beforeAll(fn, timeout)`
- `beforeEach(fn, timeout)`

Example:

```javascript
describe("Test Suite", () => {
  let data;

  beforeEach(() => {
    data = { one: 1 };
  });

  afterEach(() => {
    data = null;
  });

  it("two plus two is four", () => {
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  it("two plus two is not five", () => {
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  it("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
```

Reference:

- https://jestjs.io/docs/setup-teardown
- https://jestjs.io/docs/api#afterallfn-timeout

### 7. Mocking

Mocking adalah sebuah teknik yang digunakan untuk mengganti implementasi dari sebuah fungsi. Mocking digunakan untuk mengganti implementasi dari fungsi yang digunakan oleh kode yang kita buat dengan implementasi yang kita buat sendiri.
`mocking akan dibahas lebih dalam pada pertemuan selanjutnya`

Reference:

- https://jestjs.io/docs/mock-function-api
- https://jestjs.io/docs/mock-functions

### 8. Code Coverage

Code coverage adalah sebuah teknik yang digunakan untuk mengukur seberapa banyak kode yang sudah di test. Code coverage digunakan untuk memastikan bahwa kode yang kita buat sudah di test dengan baik.
