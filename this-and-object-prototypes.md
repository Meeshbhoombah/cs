# `this` and Object Prototypes

## `this`
Binding made when function invoked, determined function's call-site

To determine `this` binding find call-site of that function

### Rules
|Case               | Rule           |
|-------------------|----------------|
| Called with `new` | Use newly constructed object |
| Called with `call` or `bind`? | Use specefied object |
| Called with conext object owning the call? | Use context object |
| Default | `undefined` in strict mode, otherwise global object |

