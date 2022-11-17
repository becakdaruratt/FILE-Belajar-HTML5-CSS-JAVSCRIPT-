                    // Tanpa DOOM Traversal
// const x = document.getElementsByClassName('close');
    // const container = document.getElementsByClassName('card');

    // for (let i = 0; i < x.length; i++){
    //     x[i].addEventListener('click', function(){
    //         container[i].style.display = 'none';
    //     });
    // }

                            // Dengan DOOM Traversal
    // const x = document.querySelectorAll('.close');


    // for (let i = 0; i < x.length; i++){
    //     x[i].addEventListener('click', function(e){
                    // jIKA Tidak menggunakan eventnya 
            // x[i].parentElement.style.display = 'none';
                        // saat menggunakan eventnya lebih bermanfaat karena kita bisa tau informasi bermanfaat macam macam eventnya adalah   .target
    //         e.target.parentElement.style.display = 'none';
    //     });
    // }
  


                            // INI jika pakai forEach
    // x.forEach(function(el){
    //     el.addEventListener('click',function(e){
    //         e.target.parentElement.style.display = 'none';
    //           // Prevent Default
    //           e.preventDefault();
    //           e.stopPropagation();
    //     });
    // });                  
    
    // const nama = document.querySelector('.nama');
    // console.log(nama.previousElementSibling);


                        // Parent dari card
    // const cards = document.querySelectorAll('.card');
    // cards.forEach(function(event){
    //     event.addEventListener('click', function(){
    //         alert('Okey!');
    //     });
    // });         
    
    


                // Cara Membenarkan sedikit cardnya dengan menjadikan parentnya jadi event lalu menggunakan .target kita bisa tau apa yang sedang kita click dan informasi laiinya bisa kita dapatkan 
    const induk = document.querySelector('.container');
    induk.addEventListener('click',function(e){
        if(e.target.className == 'close'){
            e.target.parentElement.style.display = 'none';
            e.preventDefault();
            e.stopPropagation();
        }
    });
        // Penjelasannya adalah jika e (containernya) .target (apapun yang kita click) di dalam containernnya , dan class nya sama dengan close maka container nya yang kita click tadi ambil induknya lalu ubah stylenya dengan display none   
                    // lebih sederhana tambah 2 event dan javascript tidak peduli kalau ada tambahan di consolenya , karena yang pertama di cek oleh javascriptya adalah containernya bukan element barunya jadi tetap eventnya sudah terpasang


              

                


