/* JavaScript fundamentals: Type Conversion vs Type Coercion vS Type Casting ..
'COERCION' means: forcefully ..

What is Type Conversion?
1:Implicit Type Conversion (Type Coercion)....

=>  Type coercion is implicit conversion done automatically by JavaScript when it encounters an operation involving two values of different types.
JavaScript tries to "coerce" (force) the values into a common type without you explicitly telling it to.

   ***Example***
let numberVar = 10;
let stringVar = "20";
let result = numberVar + stringVar;
console.log(result); // Output: "1020"


2:Explicit Type Conversion (Type Casting)...

=> Type conversion refers to explicitly converting a value from one type to another.
This is done deliberately by the programmer using functions or methods...

There are 3 types of explicit conversion:
1:Conversion to Boolean
2:Conversion to Number
3:Conversion to String

    
Q.   WHAT IS "TYPE CASTING " ?

Type casting is often used interchangeably with type conversion, but technically, in the JavaScript context, type casting refers to explicit conversion (similar to type conversion). The difference between "type conversion" and "type casting" can be negligible, but "casting" is usually associated with more low-level programming languages (like C or Java) where data types are more rigid.
In JavaScript, "type casting" would refer to the manual, explicit conversion of a value from one type to another, similar to how type conversion works.


DIffernces Between them ... "CORECION  VS  CONVERSION  VS  CASTING  "
1:Type coercion is automatic and implicit; the language (JavaScript) decides when to coerce values.

2:Type conversion and type casting are explicit; you, as the programmer, are deliberately converting one type to another.



Summary:

Term	Description	Example...

Type Coercion	Implicit conversion done by JavaScript automatically when it needs values of the same type.	"5" + 2 results in "52"

Type Conversion	Explicit conversion from one type to another done by the programmer using functions or methods.	Number("5") results in 5

Type Casting	Essentially the same as type conversion, referring to explicit type conversion in JavaScript.	Boolean(1) results in true
In JavaScript, type conversion and type casting are often used interchangeably, while type coercion is different because it happens automatically.       */






