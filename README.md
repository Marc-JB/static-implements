# ts-static-implements
Define static methods in interfaces in TypeScript

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
import ImplementsStatic from "ts-static-implements"
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