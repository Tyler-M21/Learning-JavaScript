
// Type	Common Use	Example
// Assignment -Assigns values to variables	x = 5
// Arithmetic	-Performs arithmetic between variables	x = y + 2
// Comparison	-Compares variables	x > 8
// Logical	-Defines the logic between variables	(x>0 || x>0)
// Bitwise	-Performs bitwise operatins on 32 bits numbers	x = 5 & 1
// Misc	-Miscellaneous operators	void(0)


// Assignment operators assign values to JavaScript variables.

// Given that x = 10 and y = 5, the table below explains the assignment operators:

// Oper	Name / Link	Example	Same As	Result
// =	Simple	x = y	x = y	x = 5
// +=	Add	x += y	x = x + y	x = 15
// -=	Subtract	x -= y	x = x - y	x = 5
// *=	Multiply	x *= y	x = x * y	x = 50
// /=	Divide	x /= y	x = x / y	x = 2h
// %=	Remainder	x %= y	x = x % y	x = 0
// :	Colon	x: 45	x = 45	x = 45

// Logical Assignment Operators
// Oper	Name / Link	Example	Result
// &&=	AND	true &&= 10	x = 10
// ||=	OR	false ||= 10	x = 10
// ??=	Nullish	null ??= 10	x = 10

// Arithmetic operators are used to perform arithmetic between variables and/or values.

// Given that y = 5, the table below explains the arithmetic operators:

// Oper	Name / Link	Example	Results
// +	Addition	x = y + 2	y=5, x=7
// -	Subtraction	x = y - 2	y=5, x=3
// *	Multiplication	x=y*2	y=5, x=10
// /	Division	x = y / 2	y=5, x=2.5
// **	Exponentiation	x = y ** 2	y=5, x=25
// %	Remainder	x = y % 2	y=5, x=1
// ++	Increment	x = y++	y=6, x=5
// ++	Increment	x = ++y	y=6, x=6
// --	Decrement	x = y--	y=4, x=5
// --	Decrement	x = --y	y=4, x=4
// +	Unary Plus	x= +y	x=5
// -	Unary Negation	x= -y	x=-5

// Comparison operators are used in logical statements to determine equality or difference between variables or values.

// Given that x = 5, the table below explains the comparison operators:

// Oper	Name / Link	Comparing	Returns
// ==	Equal to	x == 8	false
// ==	Equal to	x == 5	true
// ===	Strict Equal	x === "5"	false
// ===	Strict Equal	x === 5	true
// !=	Not Equal	x != 8	true
// !==	Strict not Equal	x !== "5"	true
// !==	Strict not Equal	x !== 5	false
// >	Greater than	x > 8	false
// <	Less than	x < 8	true
// >=	Greater or Equal	x >= 8	false
// <=	Less or Equal	x <= 8	true

// Logical operators are used to determine the logic between variables or values.

// Given that x = 6 and y = 3, the table below explains the logical operators:

// Oper	Name / Link	Example
// &&	AND	(x < 10 && y > 1)
// ||	OR	(x === 5 || y === 5)
// !	NOT	!(x === y)
// ??	Nullish Coalescing	x ?? y

// Bit operators work on 32 bits numbers. Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

// Oper	Name	Example	Same as	Result	Dec
// &	AND	x = 5 & 1	0101 & 0001	0001	1
// |	OR	x = 5 | 1	0101 | 0001	0101	5
// ~	NOT	x = ~ 5	~0101	1010	10
// ^	XOR	x = 5 ^ 1	0101 ^ 0001	0100	4
// <<	Left Shift	x = 5 << 1	0101 << 1	1010	10
// >>>	Right Shift	x = 5 >>> 1	0101 >>> 1	0010	2
// >>	Signed Right	x = 5 >> 1	0101 >> 1	0010	2

// Some miscellaneous JavaScript operators are described below.

// Operator	Name / Link	Example
// :	Colon	age : 45
// .	Dot Access	person.age
// [ ]	Bracket Access	person["age"]
// [ ]	Array Literal	cars = ["Saab", "Volvo", "BMW"]
// { }	Block	car = {}
// { }	Object Literal	car = {type:"Fiat", model:"500"}
// ?.	Optional Chaining	x ?. y
// ...	Spread	...myArray
// ( )	Grouping	( x + y )
// ( ) ? x : y	Ternary Conditional	(z < 18) ? x : y
// ( )	Invocation	myFunction()
// =>	Arrow Function	(a, b) => a + b
// new	Constructor	new Date()
// delete	Delete	delete person.age
// in	Relational in	"age" in person
// instanceof	Instance of	x instanceof Array
// typeof	Type of	typeof "John"
// void	Void	void(0)
// yield	Yield	yield x
// yield*	Yield	yield* x


// Operator Precedence
// Operator precedence describes the order in which operations are performed in an arithmetic expression.

// Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

// Val	Operator	Description	Example
// 18	( )	Expression Grouping	(100 + 50) * 3
// 17	.	Member Of	person.name
// 17	[]	Member Of	person["name"]
// 17	?.	Optional Chaining ES2020	x ?. y
// 17	()	Function Call	myFunction()
// 17	new	New with Arguments	new Date("June 5,2022")
// 16	new	New without Arguments	new Date()