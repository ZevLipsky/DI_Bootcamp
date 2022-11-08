const xhr2= new XMLHttpRequest();
xhr2.open("GET","https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2");
xhr2.send();
xhr2.responseType="json";
xhr2.onload=()=>{
   console.log(xhr2.response); 
}