---
title: Function arguments
path: /function-arguments
date: 2020-05-28
summary: Learn about how to use arguments objects inside function in JavaScript
tags: ['Js', 'arguments', 'jstips', 'HTML5']
---

![Arguments in JavaScript](https://cdn-images-1.medium.com/max/2048/1*Z9IhXv0dyGqmzOr2_9qTvQ.png)*Arguments in JavaScript*

`arguments` is an object accessible inside functions that contains the values of the arguments passed to that function.
```js
function test(a, b, c) {

  console.log(arguments[0], arguments[1], arguments[2]);

}

test(1,2,3);  //1, 2, 3
```


The `arguments` object is only available inside non-arrow functions . Also the arguments object is not an array , but we can access using index , also it has length property, which contains the number of arguments passed to the function.

```js
function test(a, b, c) {

    console.log(arguments.length);

}

test(1); // 1
test(1, 2); // 2
```

The arguments objects contains all the argument passed during function call, even there are as many parameter in function declaration

```js
function test() {
  console.log(arguments.length);
}

test();  //0
test(1);  //1
test(1,2,3,5);  //4
```

You can update the value of arguments

```js
function test() {
  arguments[0] = 100;
  console.log(arguments[0]);
}

test(); //100
test(1); //100
```

When you updating arguments, it also update parameter value and vice versa.

```js
function test(a, b) {
  arguments[0] = 100;
  console.log("a=>", a, "arg[0]=>", arguments[0]);

  b = 0;
  console.log("b=>", b, "arg[1]=>", arguments[1]);

}

test(1,2);
 // a=> 100 arg[0]=> 100
 // b=> 0 arg[1]=> 0
```

But the above is not valid when you use default arguments. The rest, default, or destructured parameters **will not** sync new values assigned to argument variables in the function body with the arguments object.

```js
function test(a =10, b = 10) {
  arguments[0] = 100;
  console.log("a=>", a, "arg[0]=>", arguments[0]);

  b = 0;
  console.log("b=>", b, "arg[1]=>", arguments[1]);
}

test(1, 2);
 // a=> 1 arg[0]=> 100
 // b=> 0 arg[1]=> 2
 ```

Another Example

```js
function test(a =10, b = 10) {

  console.log("a=>", a, "arg[0]=>", arguments[0]);

  console.log("b=>", b, "arg[1]=>", arguments[1]);

}

test();
// a=> 10 arg[0]=> undefined
 // b=> 10 arg[1]=> undefined
```

### Properties

`length` → contains the number of arguments passed to the function

```js
function test() {
   console.log(arguments.length);
}

test(); // 0
test(1,2,3); //3
```

`callee` → contains the currently executing function reference .

```js
function test() {
  console.log(arguments.callee);
}

test();
```

Thanks for reading.

Please donate [here](https://www.paypal.me/jagathishSaravanan?locale.x=en_GB), for making more tutorials.
