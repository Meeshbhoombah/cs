# `this` and Object Prototypes

## `this`
Binding made when function invoked, determined function's call-site

To determine `this` binding find call-site of that function

### Rules
|Case               | Rule           |
|-------------------|----------------|
| Called with `new` | Use newly constructed object |
| Called with `call` or `bind`? | Use specefied object |
| Called with context object owning the call? | Use context object |
| Default | `undefined` in strict mode, otherwise global object |

## Objectsa
Collections of key/value pairs
- Values accessible via properities (`.propName` or `["propName"]`)
  + When used, engine invokes `[[Get]]` or `[[Put]]` - traverses `[[Prototype]]`
    chain

Controlable characteristics 
- `writable`
- `configureable`
- `Object.preventExtensions(...)`
- `Object.seal(...)`
- `Object.freeze(...)`

Two forms:
- Literal (preferred)
- Constructed

### Literal 
```
var a = {...}
```

### Constructed
```
var a = new Array(...)
```


