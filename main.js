const input = document.querySelector('.qr');
const button = document.querySelector('.btn');
const qrimg = document.querySelector('.qr-img')


function generate(){
    let data = input.value;
    if(!data){
        alert('enter a url')
        } ;
    
    let url =  `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=150x150`
    qrimg.src = url;

    input.value ='';
    

}
button.addEventListener('click', generate);



