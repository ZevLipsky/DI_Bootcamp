function compareToTen(num){
    return new Promise((resolve, reject) =>{
        if (num < 10){
            resolve("Number is smaller than 10.")
        }else{
            reject("Number is too high.")
        }
    });
}

compareToTen(5)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));