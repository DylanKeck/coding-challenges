function isPangram(string){
    string = string.toLowerCase();


    const letters = new Set();

    for (let char of string) {
        if (/[a-z]/.test(char)) {
            letters.add(char);
        }
    }


    return letters.size === 26;
}