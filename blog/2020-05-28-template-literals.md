---
title: Replace String Concatenation using Template Literals in JavaScript
path: /template-literal
date: 2020-05-28
summary: Template Literals allows you to embed javascript expression inside the string and call functions using Tagged template literal
tags: ['String', 'js', 'es6', 'JavaScript']
---

![Template Literals in JavaScript](https://cdn-images-1.medium.com/max/2800/1*97L17IA-0WdaxAs8dVPMwg.jpeg)*Template Literals in JavaScript*

Template Literals allows you to embed javascript expression inside the string.

To create a template literal, you should use **\`backtick \`**

```js
`I am a template stirng`
```

The template literal has three features

* Multi-line string

* Interpolation (Inserting expression inside String )

* Tagged template literal(Calling a function)

### Multi-line string

Before the template literals, if we want to create a multi-line then

```js
console.log('Line 1 \n' + 'Line 2');
```

But the above same can be simplified into

```js
let str = `Line 1
Line 2`;

console.log(str);

// or

console.log(`Line 1
Line 2`);
```

Template literals make multiline strings much simpler.

### Interpolation

This will allow you to insert a valid JavaScript expression inside the template literal, before evaluating the string, all the expressions are executed.

You can include the expression like `${expression}` .

```js
let a = 10;
let b = 20;

console.log(`Result = **${a + b}**`); // **Result = 30**
```

Using conditional expression

```js
var a = 10;

var b = 20;

console.log(` **${a > b ? a : b}** is greater`); // 20 is greater
```

Using function calls inside a template literal

```js
function getName() {
   return "JavaScript Jeep";
}

console.log(`Name => ${getName()}`); // Name => JavaScript Jeep

```

Printing ` using de template literal

```js
console.log(`\``); // `
```

Printing `${}` using template literal

```js
console.log(`$`); //$

console.log(`${`); // Uncaught SyntaxError: Unexpected end of input

console.log(`$\{}`); // ${}

// you can't have an empty ${}

console.log(`${}`);Uncaught SyntaxError: Unexpected token '}'

console.log(`$${100}`); //$100

console.log(`$${}`); // Uncaught SyntaxError: Unexpected token '}'

console.log(`$$\{}`); // $${}
```

### Tagged templates

The Tagged templates allow you to call a function.
> Tags allow you to parse template literals with a function.

```js
function tagFun(string, param1) {
   console.log(`String => ${string}`);
   console.log(`param1 => ${param1}`);
}

let a = 10;

tagFun`This is a ${a} test`;

output

String => This is a , test
param1 => 10
```

In the above function, all the string are passed to string `param`, and the a passed to `param1` .

Example 2

```js
function tagFun(string, param1, param2) {
   console.log(`string - ${string}`);
   console.log(`param1 = ${param1} param2 = ${param2}`);
}

var a = 10, b =20;

tagFun`a => ${a} b => ${b}`;

output

string -a => , b => ,
param1 = 10 param2 = 20
```

Instead of using multiple params, you can use the `rest parameter`

```js
function tagFun(string, ...params){
  console.log(params);
}

var a = 10, b = 20, c = 100;

tagFun`testing ${a} ${b} ${c} end`
// [10, 20, 100]
```

Another Example using destructing variables

```js
function testFun([str1, str2], value) {
   console.log(str1);
   console.log(str2);
}

testFun`This is ${10} a test`;

// Output

This is
 a test
```

Using all the above in the real-world example

```js
function math([x, y], operation) {
   return **operation**(Number(x), Number(y));
}

function plus(x, y) {
   return x + y;
}

math`1 ${plus} 2`; // 3
```

The above example is taken from [here](https://twitter.com/joelnet/status/1142217207042019330).

Thanks for reading.

Please donate [here](https://www.paypal.me/jagathishSaravanan?locale.x=en_GB), for making more tutorials.
