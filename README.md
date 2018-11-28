# static-implements
Define static methods in interfaces in TypeScript

## Setup
`npm install --save-dev @peregrine/static-implements`

**Note: you might have to add/enable `"experimentalDecorators": true` in your `tsconfig.json`**

## Usage
**MyInterface.ts**
```TypeScript
export interface MyInterface {
    greeting(): string
}
```

**MyClass.ts**
```TypeScript
import ImplementsStatic from "@peregrine/static-implements"
import MyInterface from "./MyInterface"

@ImplementsStatic<MyInterface>() // instead of "class MyClass implements MyInterface"
class MyClass {
    static greeting(): string {
        return "Hello World!"
    }
}
```