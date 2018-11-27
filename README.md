# static-implements
Define static methods in interfaces in TypeScript

**Note: you might have to add/enable `"experimentalDecorators": true` in your `tsconfig.json`**

## Usage
**MyInterface.ts**
```TypeScript
interface MyInterface {
    doesThisWork(): boolean
    greeting(): string
}
```

**MyClass.ts**
```TypeScript
import ImplementsStatic from "static-implements"
import MyInterface from "./MyInterface"

@ImplementsStatic<MyInterface>() // instead of "class MyClass implements MyInterface"
class MyClass {
    static doesThisWork(): boolean {
        return true
    }

    static greeting(): string {
        return "Hello World!"
    }
}
```