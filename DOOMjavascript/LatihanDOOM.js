    const bandan = document.getElementsByTagName('button')[0];
    bandan.addEventListener('click',function(){
        document.body.style.backgroundColor = 'red';
    });    


    const button = document.createElement('button');
    const textnya = document.createTextNode('Tombol Baru');
    button.setAttribute('type','button')

    button.appendChild(textnya);
    bandan.after(button);

    button.addEventListener('click' , function(){
        const r = Math.round(Math.random() * 255 + 1);
        const g = Math.round(Math.random() * 255 + 1);
        const b = Math.round(Math.random() * 255 + 1);
        console.log(r);
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    });



    // Menyeleksi slider dengna atribute name dan membuat warna random
    const sMerah = document.querySelector('input[name=sMerah]');
    const sHijau = document.querySelector('input[name=sHijau]');
    const sBiru = document.querySelector('input[name=sBiru]');
    sMerah.addEventListener('input', function(){
        const r = sMerah.value;
        const g = sHijau.value;
        const y = sBiru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ y +')';
    });
    
    sHijau.addEventListener('input', function(){
        const r = sMerah.value;
        const g = sHijau.value;
        const y = sBiru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ y +')';
    });
    sBiru.addEventListener('input', function(){
        const r = sMerah.value;
        const g = sHijau.value;
        const y = sBiru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ y +')';
    });


                // Diatas jika menggunakan Slider , namun di bawah ini kita akan coba dengan cursor ketika cursor digerakkan warna berubah yang mana kita akan berkerja dengan posisi dari mouse , dan cursor tadi akan realatif terhadap lebar dan tinggi dari mouse nya
    document.body.addEventListener('mousemove' , function(e){
        // ada 2 hal yang kita cari tahu 1. Posisi mouse sumbu x dan sumbu y
        // console.log(e.clientX);
        // clientX ini akan bekerja jika kita tempelkan ke sebuah parameter 

        // 2. Ukuran dari Browser ada di dalam object window bukan document
        // console.log(window.innerWidth);
        const xPos = Math.round((e.clientX / window.innerWidth) * 255);    

        const yPos = Math.round((e.clientY / window.innerHeight) * 255);

        document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
        // Alasan kenapa bisa ada bug karena sebetulnya yang kita ubah itu adalah body sedangkan content kita masih segitu sehingga dibawahnya tidak di anggab body makanyalah tidak dapat bekerja jika dibawah , hanya akan bekerja jika terkena element nya atua content , begitu juga dengan di atasnya dan cara akalinnya gampang , pergi ke CSS ketik html,css {height:100%} karena html itu kan diluar dari bodynya
    });                
