                    // Tanpa DOOM Traversal
// const x = document.getElementsByClassName('close');
    // const container = document.getElementsByClassName('card');

    // for (let i = 0; i < x.length; i++){
    //     x[i].addEventListener('click', function(){
    //         container[i].style.display = 'none';
    //     });
    // }

                            // Dengan DOOM Traversal
    const x = document.querySelectorAll('.close');


    // for (let i = 0; i < x.length; i++){
    //     x[i].addEventListener('click', function(e){
                    // jIKA Tidak menggunakan eventnya 
            // x[i].parentElement.style.display = 'none';
                        // saat menggunakan eventnya lebih bermanfaat karena kita bisa tau informasi bermanfaat macam macam eventnya adalah   .target
    //         e.target.parentElement.style.display = 'none';
    //     });
    // }
  


                            // INI jika pakai forEach
    x.forEach(function(el){
        el.addEventListener('click',function(e){
            e.target.parentElement.style.display = 'none';
              // Prevent Default
              e.preventDefault();
        });
    });                  
    
    // const nama = document.querySelector('.nama');
    // console.log(nama.previousElementSibling);



              

                


