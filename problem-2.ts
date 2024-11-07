{
    // Problem 2

    function removeDuplicates(allNumbers: number[]) {
        const onlyUniqueNumbers: number[] = []
        for (const number of allNumbers) {
            if (!onlyUniqueNumbers.includes(number)) {
                onlyUniqueNumbers.push(number)
            }
        }
        return onlyUniqueNumbers;
    }




    // Test array
    // const numbers = [1, 2, 2, 3, 4, 4, 5];
    // console.log(removeDuplicates(numbers));

}