# Scope and Closures
JavaScript = _dynamic_ (_interpreted_) language **BUT STILL** compiled

## Compiler Theory
Any compiled programming language undergoes three steps (generalizing):
1. Tokenizing/Lexing
2. Parsing
3. Code Generation

### Tokenizing/Lexing
Break up a string of characters into chunks - i.e: _tokens_
- E.g: `var a = 2;` (most likely) = `var, a, =, 2, ;`

### Parsing
_AST_ = stream of tokens (array) and formed into a...
- **A**bstract **S**yntax **T**ree

### Code Generation
Take AST and generate machine-readable code
- Language specefic

Javascript engine has a multitide of steps beyond this
- Complexity increased due to language requirements 
  + E.g: JIT compilation, lazy compilation, hot re-compliation

### Lookups
_LHS_ = left-handed lookup
- Source of assignment

_RHS_ = right-handed lookup
- Target of assignment

Javascript engines look at scope from the innermost -> outermost
- Outermost = `Global` scope

## Scope
### Lexical Scope
Describes how the JavaScript parser resolves var names when functions are nested
- "Lexical" refers to the usage of the location of a variable to determine its 
  scope

### Function Scope
- Nested functions have access to variables declared in all levels of its
  surrounding scope
- Variables are bound to their function scope and cannot be accessed by outer
  scopes
  + Follows "Princple of Least Privlege (aka Least Exposure, or Least 
    Authority)"
  + Enables collison avoidance (reuse variable identifiers in different scopes)

#### Anonymous Functions
- Function expressions can be anon, but not function declarations

#### Immediately Invoked Function Expressions (IIFE)
```
var a = 2;

(function IIFE(){
  var a = 3;
  console.log(a); // 3
})();

console.log(a); // 2
```

### Block Scope
```
for (var i=0; i<10; i++) {
  console.log(i);
}
```
`i` is only only available between the curly braces of the `for` loop

```
var foo = true;

if (foo) {
  var bar = foo * 2;
  bar = something( bar );
  console.log( bar );
}l
```
`if` statements also have their own block scope

```
try {
  eg();
} catch (err) {
  console.error(err);
}

// Reference Error
console.error(err); 
```
The catch statement creates its own block scope

#### `let`
Isolates variable declaration to the scope it is defined within
- Does not hoist variable

```
var foo = true;

if (foo) {
  let bar = foo * 2;
  bar = something(bar);
  console.log(bar);
}

console.log(bar); // ReferenceError
```

##### Garbage Collection
```
function process(data) {
  // do something interesting
}

// anything declared inside this block can go away after!
{
  let someReallyBigData = { .. };

  process( someReallyBigData );
}

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
  console.log("button clicked");
}, /*capturingPhase=*/false );
```

#### `const`
```
var foo = true;

if (foo) {
  var a = 2;
  const b = 3; // block-scoped to the containing `if`

  a = 3; // just fine!
  b = 4; // error!
}

console.log(a); // 3
console.log(b); // ReferenceError!e
```

## Hoisting
```
var a = 3;
```
Is seperated into its _declaration_ and _assignment_
- Declaration = compiler-phase
  + Declaration is hoisted to the top of its scope
- Assignment = execution-phase

## Closures
Lexically scoped name binding
```
function foo() {
  var a = 2;

  function bar() {
    console.log( a );
  }

  return bar;
}

var baz = foo();

baz(); // 2 -- Whoa, closure was just observed, man.
```

### Loops
```
for (var i=1; i<=5; i++) {
  (function(){
    var j = i;
    setTimeout(function timer(){
            console.log(j);
    }, j*1000);
  })();
}
```
Linters often get triggered by the use of closures

Alternative way to write the above:
```
for (var i=1; i<=5; i++) {
  (function(j) {
    setTimeout(function timer(){
            console.log(j);
    }, j*1000);
  })(i);
}
```

### Modules
```
function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! " ) );
	}

	return {
		doSomething: doSomething,
		doAnother: doAnother
	};
}

var foo = CoolModule();

foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```

#### New ES6 Module
```
function hello(who) {
	return "Let me introduce: " + who;
}

export hello;
```
**bar.js**

```
// import only `hello()` from the "bar" module
import hello from "bar";

var hungry = "hippo";

function awesome() {
	console.log(
		hello( hungry ).toUpperCase()
	);
}

export awesome;
```
**foo.js**

```
// import the entire "foo" and "bar" modules
module foo from "foo";
module bar from "bar";

console.log(
	bar.hello( "rhino" )
); // Let me introduce: rhino

foo.awesome(); // LET ME INTRODUCE: HIPPO
```

