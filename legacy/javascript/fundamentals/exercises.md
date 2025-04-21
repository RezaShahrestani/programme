# JavaScript fundamentals - exercises

## Q1

Given the following code:

```js
var s = "Hello";
var x = s.toLowerCase();
var l = s.length;
```

What are the types of the following?

1. `s`
2. `x`
3. `s.toLowerCase()`
4. `s.toLowerCase`
5. `s.length`
6. `l`

## Q2

In `var x = 5 + 6;`, what is `+`?

1. Function
2. Operator
3. Number
4. Aggregator

## Q3

In `var x = 5 + 6;`, what is `var`?

1. Variable
2. Keyword
3. Operator
4. Constant

## Q4

Given the following code:

```js
var x = z[y];
```

What is `y`?

1. Index
2. Key
3. Index or key
4. Array

## Q5

Given the following code:

```js
var y = 1;
var x = [1, 2, 3];
var z = x[y];
```

What is `y`?

1. Index
2. Key
3. Index or key
4. Array

## Q6

Given the following code:

```js
var joe = {
  name: "Joe",
  age: 24,
};
var joesName = joe.name;
var joesAge = joe["age"];
```

- What is `'age'` in the last line?
  1. Index
  2. Key
  3. Array
  4. Object
- What are `name` and `age` of the object `joe`?
  1. Index
  2. Key
  3. Object
  4. Property

## Q7

Given the following code:

```js
var y = "length";
var x = [1, 2, 3];
var z = x[y];
```

What is `y`?

1. Index
2. Key
3. Index or key
4. Array

## Q8

What is the element for index `1` in array `x`?

## Q9

Fill in: "The value of the (...) `length` of `x` is (...)"

## Q10

What is the name of these functions?

1. `function a() { return true; }`
2. `var a = function b() { return true; }`
3. `var c = function () { return true; }`

## Q11

Write a function that has two parameters, called `first` and `second`.

## Q12

Write a function call that passes three arguments.

## Q13

Write code for the following:

1. Declare a variable called `x` and initialize it with the string "Hello".
2. Declare a variable called `y` and initialize it with the property `length` of `x`.
3. Declare a variable called `z` and initialize it with the result of calling the method `toUpperCase` on `x`
4. Declare a function called `myFunction`. This function should take two arguments, and should call the second argument with the first argument as its argument. Then, declare a variable called `f` and initialize it with an empty anonymous function, and call `myFunction` with the arguments `10` and `f`.

## Q14

Explain as precisely as possible (in English) what the following code does, line by line.

(Tip: it should look like the items in the previous question!)

```js
var s = "HackYourFuture";
var i = s.indexOf("Your");
function sum(a, b) {
  return a + b;
}
var s = sum(4, 5);
var r = Math.sqrt(s);
```

## Q15

For each of these, indicate whether it is an expression or a statement:

1. `l`
1. `l = 4;`
1. `l == 4`
1. `if (l == 4) { console.log("yes"); }`
1. `console.log("yes");`
1. `"yes"`
1. `console.log(l == 4 ? "yes" : "no")`
1. `function a() { return 4; }`
1. `var a = function () { return 4; }`

## Q16

How can you tell whether something is a statement?

## Q17

How can you tell whether something is an expression?

## Q18

Given the following code:

```js
var s = "Hello".toLowerCase();
var l = s.length;

function sum(a, b) {
  return a + b;
}
var max = function (a, b) {
  return a > b ? a : b;
};

var s1 = sum(4, 5);
var s2 = 4 + 5;

if (s2 == s1) {
  console.log("same");
} else {
  console.log("not same");
}
```

List all 11 _statements_ in the code above.

## Q19

Bonus question!

List all 28 _expressions_ in the code from Q18.
