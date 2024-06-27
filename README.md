## React Hook Form

```
npm i react-hook-form
```

## Resend

```
npm i resend
```

## React Mail

```
npm i react-email
```

## Yup

```
npm i yup @hookform/resolvers
```

## Immer

```
npm i use-immer
```

## 参考

- https://www.youtube.com/watch?v=btZII7TXlhk
- https://www.youtube.com/watch?v=PI-tGsvDoIU
- https://youtu.be/f1fysEKNwQA?si=Pm8BX3E_NYhzdKgU

# Memo

## JavaScript

- for in
  - 配列の**インデックス番号**を使用して配列をすべて処理する
  - オブジェクトにも使用可

```js
const array = ["a", "b", "c", "d"];

for (let i in array) {
  console.log(array[i]);
}

const obj = {
  name: "aaa",
  age: "20",
};

for (let key in obj) {
  console.log(key, obj[key]);
}
```

- for of
  - 配列の**要素**を使用して配列をすべて処理する
  - オブジェクトには使用不可

```js
const array = ["a", "b", "c", "d"];

for (let item of array) {
  console.log(item);
}
```

- forEach
  - 引数に要素とインデックスをとる
  - オブジェクトには使用不可

```js
const array = ["a", "b", "c", "d"];

array.forEach((item, index) => {
  console.log(item, index);
});
```

- Unicode 正規化形式

  - NFC（デフォルト）
  - NFD
  - NFKC
  - NFKD

## 検索について

- アルファベットの小文字と大文字は区別した方が良いのか？

> Google 検索では、英語の大文字と小文字は区別されません。検索語句は大文字で入力しても、すべて小文字として認識されます。

## Resend

- 参考: https://zenn.dev/keitakn/scraps/0e1f006459d407
