function alphanumeric(string){
    //your code here
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(string);
}