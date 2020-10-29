# Reproduction for [mgechev/injection-js#48](https://github.com/mgechev/injection-js/issues/48).

## ES5

Use `npm run es5` to compile and run with `target=es5`.

```
> ts-node -P tsconfig.es5.json index.ts

{ name: 'bar' }
```

## ES2015

Use `npm run es2015` to compile and run with `target=es2015`.

```
> ts-node -P tsconfig.es2015.json index.ts


..snip..\repro-injection-js-48\node_modules\injection-js\injection.bundle.js:1015
        var parentProto = Object.getPrototypeOf(ctor.prototype);
                                 ^
TypeError: Cannot convert undefined or null to object
    at Function.getPrototypeOf (<anonymous>)
    at getParentCtor (..snip..\repro-injection-js-48\node_modules\injection-js\injection.bundle.js:1015:34)
    at ReflectionCapabilities.parameters (..snip..\repro-injection-js-48\node_modules\injection-js\injection.bundle.js:886:30)
    at Reflector.parameters (..snip..\repro-injection-js-48\node_modules\injection-js\injection.bundle.js:1064:48)
    at _dependenciesFor (..snip..\repro-injection-js-48\node_modules\injection-js\injection.bundle.js:1348:32)
    at constructDependencies (..snip..\repro-injection-js-48\node_modules\injection-js\injection.bundle.js:1340:20)
    at resolveReflectiveFactory (..snip..\repro-injection-js-48\node_modules\injection-js\injection.bundle.js:1260:28)
    at resolveReflectiveProvider (..snip..\repro-injection-js-48\node_modules\injection-js\injection.bundle.js:1275:86)
    at Array.map (<anonymous>)
    at resolveReflectiveProviders (..snip..\repro-injection-js-48\node_modules\injection-js\injection.bundle.js:1282:35)
```
