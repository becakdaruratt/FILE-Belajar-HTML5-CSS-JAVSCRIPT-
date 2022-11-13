
                // Contoh onclick='diubahdariHTML';
// const seleksi = document.querySelector('.p3');

    // function ubahWarna(){
    //     p2.style.backgroundColor = 'lightblue';
    // }

         // bisa juga seperti ini Event Hendler di Javascriptnya
//     const contoh = document.getElementsByTagName('p')[2];
//     contoh.onclick = function(){
//          contoh.style.backgroundColor = 'red';
//      }

    // function ubahWarna1(){
    //     seleksi.style.backgroundColor = 'lightblue';
    // } 

    // Cont Menggunakan onclick DI Ubah dengan method dari Javascript
    // const p2 =document.getElementsByClassName('p2')[0];
    // p2.onclick = ubahWarna ; 










            // addEventListener ada 2 parameter diterima nya 1. Eventnya 2. functionnya atau yang mau dijalankan apa
//     const p4 = document.querySelectorAll('p')[3];            
//     p4.addEventListener('click' , function(){
//         console.log('Hello World');
//     });


            // Menambah List item baru dengan addEventListener
    

    const Paragraph4 = document.querySelectorAll('p')[3];
    Paragraph4.addEventListener('click' , function(){

        const li = document.createElement('li');
    const liText = document.createTextNode('Judul Baru');

    li.appendChild(liText);

                const Penempatan = document.querySelector('section#b ul');
                Penempatan.appendChild(li);   
        
    });

    const p3k = document.querySelectorAll('p')[2];
    p3k.addEventListener('click' , function(){
        p3k.style.backgroundColor = 'red';   
        p3k.style.color = 'white'; 
    });
 
               
  

    
