import Implements from "../main/index"

interface MyInterface {
    doesThisWork(): boolean
    greeting(): string
}

@Implements<MyInterface>() // instead of "class MyClass implements MyInterface"
class MyClass {
    static doesThisWork(): boolean {
        return true
    }
 
    static greeting(): string {
        return "Hello World!"
    }
}