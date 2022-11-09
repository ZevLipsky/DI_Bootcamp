const promise = Promise.resolve(
    setTimeout(()=>{
        console.log("success");
    }, 4000)
);

Promise
    .then((res) => console.log("Result:", res))
    .catch((err) => console.error("Oops, something went wrong!", err));