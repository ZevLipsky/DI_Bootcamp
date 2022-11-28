const fs= require('fs');

fs.readFile('./RightLeft.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    const display=data;
    // console.log(display);
    const arr=display.split('');
    let position=0;
    
    arr.forEach((element)=>{
        if(element==='>'){
            position++;
        }else if(element==='<'){
            position--;
        }
    });
    console.log(position);


    position=0;
    let count=0;
    let i=0;
    while(position!== -1){
        count++;
        if(arr[i]==='>'){
            position++;
        }else if(arr[i]==='<'){
            position--;
        }
        i++;
    }
    console.log(count);
})
