{
    // problem 8

    function validateKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): boolean {
        for (const key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    }
















    // Sample Input:
    // const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(validateKeys(person, ["name", "age"]));
    // console.log(validateKeys(person, ["name", "id"]));
}