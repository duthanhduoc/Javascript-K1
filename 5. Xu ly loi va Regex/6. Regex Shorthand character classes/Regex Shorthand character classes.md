# Regex Shorthand character classes

Cú pháp rút gọn trong Regex

Khớp 1 chữ cái, số hoặc `_`

```javascript
const regex = /\w/
regex.test('Hello 2021') // true
regex.test('!hi') // false
```

Khớp 1 hoặc nhiều chữ cái, số, hoặc `_`
Tên gọi có thể khác nhưng nhìn chung thì tác dụng tương tự cái trên

```javascript
const regex = /\w+/
regex.test('Hello 2021') // true
regex.test('!hi') // false
```

Khớp với không phải là chữ cái, số hoặc `_`

```javascript
const regex = /\W/
regex.test('~') // true
regex.test('he') // false
```

Khớp 1 số

```javascript
const regex = /\d/
```

Khớp 1 hoặc nhiều số

```javascript
const regex = /\d+/
```

Khớp không phải là số

```javascript
const regex = /\D/
```

Khớp với dấu cách

```javascript
const regex = /\s/
```

Khớp với không phải dấu cách

```javascript
const regex = /\S/
```

Khớp với ranh giới (boundary)

```javascript
const regex = /Anh\b/i
regex.test('Anh yeu em cua anh') // true
```

Khớp nếu b theo ngay sau a

```javascript
const regex = /a(?=b)/
regex.test('hi abc') // true
```

Khớp nếu không phải b ngay sau a

```javascript
const regex = /a(?!b)/
regex.test('hi acb') // true
```

Khớp nếu chuỗi có từ mà bắt đầu bằng `an`

```javascript
const regex = /an\b/i
regex.test('han yeu anh khong') // true, Khớp tại từ anh
```

Khớp nếu chuỗi có từ `an`

```javascript
const regex = /\ban\b/i
regex.test('anh yeu han khong') // false
regex.test('an yeu em khong') // true
```
