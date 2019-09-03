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
  + Enables collison avoidance (reuse variable identifiers)

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

