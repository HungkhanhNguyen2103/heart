let messages = ['Cảm ơn tình yêu của bé dành cho anh','Anh ước mình có một đôi cánh thật to để bao bọc lấy em, ôm em thật chặt','Yey cuc cit',true]

function getMessage(){
    for(let i = 0; i < messages.length; i++){
        setTimeout(() =>
            show(messages[i])
        , i * 5000); 
    }
}

function show(msg){
    console.log(msg)
    if(msg == true){
        document.getElementById('loader-id').classList.remove('hide'); 
    }
    else{
        document.getElementById('text-id').classList.remove('hide');
        document.getElementById('text-id').innerText = msg;
        setTimeout(() => 
            document.getElementById('text-id').classList.add('hide')
        ,4300)
    }
    
}


