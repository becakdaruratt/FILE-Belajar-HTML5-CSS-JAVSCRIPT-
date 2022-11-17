    const container = document.querySelectorAll('.container');
    const besar = document.querySelector('.jumbo');
    const thumbs = document.querySelectorAll('.anak');
    container.forEach(function(e){
        e.addEventListener('click',function(iven){
            if(iven.target.className == 'anak'){
                besar.src = iven.target.src;
                besar.classList.add('fade');
                setTimeout(function(){
                    besar.classList.remove('fade');
                }, 500);
            }   
            thumbs.forEach(function(asli){
                asli.className = 'anak';
            });
            // Penjelasannya adalah kita mengubah asli.className kita ubah seluruh thubms atau asli menjadi memiliki class 'anak' saja tidak lebih , kita akan tambahakn 'active' hanya saat kita click saja




            iven.target.classList.add('active');
        });
    });
                // Setelah kita tambahkan classnya dengan add , lalu kita hapus dengan remove dengna method setTimeout juga