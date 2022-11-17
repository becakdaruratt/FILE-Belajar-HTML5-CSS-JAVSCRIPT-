   
                    // Cara saya
   // const box = document.getElementsByClassName('box')[0];
    // box.addEventListener('click',function(){
    //     box.classList.toggle('size');
    //     const waktuMulai = new Date().getTime();
    //     setInterval(() => {
    //         if(new Date().getTime() - waktuMulai > 6000){
    //             clearInterval;
    //             return
    //         }
    //         box.classList.add('caption');
            
    //     }, 1000);
    // });

                    // Cara pak sandhika galih , this disini ngacunya ke obcject box
const box = document.querySelector('.box');                   
box.addEventListener('click',function(){
    let satu = 'size';
    let dua = 'caption';
    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua); 
    }, 600);
});







