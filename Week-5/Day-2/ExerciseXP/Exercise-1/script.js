const xhr= new XMLHttpRequest();
xhr.open("GET","https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
xhr.send();
xhr.responseType = "json";

xhr.onload = () => {
    if(xhr.status == 200){
        const data = JSON.parse(xhr.response)
       console.log(data)

    }else{
        console.log('Error');
    }
}