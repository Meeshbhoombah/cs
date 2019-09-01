# Scope and Closures
JavaScript = _dynamic_ (_interpreted_) language **BUT STILL** compiled

## Compiler Theory
Any compiled programming language generally undergoes three steps:
1. Tokenizing/Lexing
2. Parsing
3. Code Generation

### Tokenizing/Lexing
Break up a string of characters into chunks - i.e: _tokens_
- E.g: `var a = 2;` (most likely) = `var, a, =, 2, ;`

### Parsing
Take in streak of tokens (array) and form an _AST_
- **A**bstract **S**yntax **T**ree

### Code Generation
Take AST and generate machine-readable code
- Language specefic

Javascript engine has a multitide of steps beyond this
- Complexity increased due to language requirements
- 

