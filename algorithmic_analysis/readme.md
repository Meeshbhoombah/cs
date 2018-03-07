# Algorithmic Analysis
Study of the performance of computer **algorithms**, used to compare algorithms to make informed 
design decisions about **computer programs**.

## Algorithmic Analysis
1. [What is an algorithm?](#)
    - [Computer Programs](#)
2. [What factors are considered when comparing algorithms?](#)

### What is an algorithm?
- Set of instructions for solving a problem
- Independent of languge or machine

Algorithm = underlying logic of a computer program.

#### Computer Programs
- Use human readable programming languages
- Describes algorithms to computer
- Used by computers to function

### What factors are considered when comparing algorithms?
- Ignore 
    + Programming Language
        * Bogged down in uncessary semantics
    + Hardware
        * Relative performance depends on hardware of machine
        * **Solution** = Machine models
            - Premitve operations with a unit cost (a constant defined cost: 1)
            - RAM has a unit cost read/write to memory cells
    + Contents of the collection (i.e: inputs, dataset)
        * Sorted datasets may cause a sorting algorithm to run faster/slower
    + Size of the collection
        * Same algorithm that runs fast on a small collection may be slow for longer collections
        * Express runtime as function of problem size

- Focus on **computing resources** used by the underlying algorithm:
    + **Space** (memory)
    + **Runtime** (time required to execute)



## Resources
1. [Think Python](http://greenteapress.com/thinkpython/html/thinkpython022.html)

