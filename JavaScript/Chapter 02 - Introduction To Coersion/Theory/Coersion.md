Javascript type coercion
===================

## Javascript types

The types used in ES5 (currently widely supported JS spec version)
Pirimitives:  `String`, `Boolean`, `Number`, `undefined`
Objects: `Object`, with sub-classes at least for `Function`, `Array`, `Date`, `RegExp`, `Error`
Special cases: `Null`

**Primitives**
A primitive is just a value (String is a 0-x letters, boolean is true or false, numbers are numbers).

This might not be what you expected, as for ex. strings seem to have methods. They seem to (and for practical purposes you can think they have methods) but strictly speaking they don’t. You’ll see why this is a bit later.

**Objects**
Objects are objects (surprise!) with a property Class explaining what subclass they inherit their behavior from. Function is basically a callable object.

**null**
Null is a special case, with the infamous ‘typeof null returns “object”?!?’. Let’s not go there this time.

## What is coercion?

Javascript is a dynamically typed language. Basically this means that *variables don’t have types, values do*. So when a variable is used, JS has to check what type its value is, and then figure out if that type needs to be cast to some other type.

Sometimes this is handy, for ex.

    var numberOfCows = 10,
        outputTxt = ‘We will proceed to catapult ‘ + numberOfCows + ‘ cows.';

Type coercion is the reason you didn’t have to write

    outputText = ‘We will proceed to catapult ‘ + String(numberOfCows) + ‘ cows.’;

This said, in many cases it’s confusing or at worst misleading. Like presented in https://www.destroyallsoftware.com/talks/wat

#### WAT just happened?


Javascript is not a type safe language.

When javascript expects a certain type for parameter/operand x, and doesn’t get it, it will try to assign x to the type it’s expecting.

    [] + [] == “”              // returns true

Why? Because the plus-operator expects strings or numbers. Which means it will try to coerce the operands to some useful type. If String length is zero, the string will be empty.

Testing

    [1, 2] + [3]    // “1,23”

Shows more clearly what’s happening.

## Why learning about this is important?
Because it’s done in everywhere in JS. To understand JS deeply, you really have to understand how coercion works. At the very least to the level where you understand the “safety measures” you sometimes see used to safeguard against unwanted coercion. The most known of these is probably the often seen advice to avoid == operator.

But other operators and statements also trigger coercion, like +, -, if, while to mention a few. Understanding the general idea and knowing where to look if you suspect something fishy is happening with your code is useful. This will help you also understand when it’s good to use strict equality === and when == might be more apropriate.

It’s not black magic. It’s described in the EcmaScript spec (which is a lot more clear than I had feared), and even V8 code is extremely legible.

### What triggers type coercion?
Common cases are `==` (aka double equals, or “Abstract equality”), `<`, `>` `<=`, `>=`, `if ()`, `+`, `-`, .. But basically any operation or statement that clearly expects some type will probably go for coercion, and either give you ok, some really weird results (meaning the coercion almost worked), or an error (coercion failed miserably enough).

`==` is the most complicated one, so we might as well tackle that first.

### Abstract Equality (double equals, ==)

(

## Workarounds for unwanted type coercion
### Explicit type casting (recommended)

The syntax should be self-evident from the code.

    x = String(10);             // ’10’
    x = Boolean(0)              // false
    x = Boolean(1)              // true
    x = Number(’19’)            // 19

### Checking for strict equality (===), sometimes recommended
Checking for strict equality checks that both the type and value match. So

    1 === '1'                                     // false
    1 === 1                                       // true
    1 === {valueOf: function() { return 1; } }    // false
    1 === true                                    // false

compared to

    1 == '1'                                     // true
    1 == 1                                       // true
    1 == {valueOf: function() { return 1; } }    // true
    1 == true                                    // true

Most of the time, this is what we want. But sometimes type coercion is practical.


### implicit type casting (not recommended should be understood)

This is mostly useful for reading code “in the wild”. I prefer explicit casting just because it’s more understandable to people who aren’t familiar with all JS details, and makes very clear when we want a value of a certain type.

**Cast to String (from number)**

    10 + “”             // 10

**Cast to String (from array)**

    [1, 2, 3] + “”      // “1,2,3”

**Cast to number (from string)**

    ’10’ - 0            // 10

**Cast to boolean (From any type)**

    !!10                // true
    !!0                 // false
    !!null              // false
    !!undefined         // false

but watch out..

    !![]                    // true
    !!””                    // false

Implicit conversion of objects needs use of overwriting inbuilt `valueOf` or `toString` functions.
for ex.

    10 * {}                                           // NaN
    10 * { valueOf: function() { return 7; }}         // 70
    10 * { toString: function() { return “7”; }}      // 70

`toString` and `valueOf` are important for evaluation of objects, and have their uses in object evaluation, but more on these another time.








