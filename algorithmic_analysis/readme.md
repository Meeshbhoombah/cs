# Algorithmic Analysis
Study of the performance of computer **algorithms**, used to compare algorithms to make informed 
design decisions about **computer programs**.

1. [What is an algorithm?](#)
2. [What factors are considered when comparing algorithms?](#)

## What is an algorithm?
- Set of instructions for solving a problem
- Independent of languge or machine

Algorithm = underlying logic of a computer program.

### Computer Programs
- Use human readable programming languages
- Describes algorithms to computer
- Used by computers to function

## What factors are considered when comparing algorithms?
- Ignore 
    + Programming Language
        * Bogged down in uncessary semantics
    + Hardware
        * Relative performance of algos depend on hardware of machine
        * **Solution** = Machine models
            - Constrain algorithms to conceptual machines
            - Can only preform premitve operations with a unit cost (a constant defined cost, 1)
                + Parallels RAM which has a unit cost read/write to memory cells
    + Contents of the collection (aka: inputs or dataset)
        * Sorted datasets may cause a sorting algorithm to run faster/slower depending on algo
        * **Solution** = determine best/average/worst case
            - Best = resource useage at least
            - Average = resource usage on average
            - Worst = resource usage at most
    + Size of the collection
        * Same algorithm that runs fast on a small collection may be slow for longer collections
        * Express runtime as function of problem size
        * **Solution** = asympto

- Focus on **computing resources** used by the underlying algorithm:
    + **Space** (memory)
    + **Runtime** (time required to execute)

## Big-O Notation

## Resources
1. [Think Python](http://greenteapress.com/thinkpython/html/thinkpython022.html)
2. [Problem Solving with Algorithms and Data Structures](http://interactivepython.org/runestone/static/pythonds/AlgorithmAnalysis/WhatIsAlgorithmAnalysis.html)

