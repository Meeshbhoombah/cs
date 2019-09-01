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
_AST_ = streak of tokens (array) and formed into a...
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

