    // Traged Templates
    const nama = "Sandhika Galih";
    const umur = 33;
    const email = 'pwdarurat@gmail.com';
        function coba(strings , satu , dua){
            // Yang di eksekusi 'coba'
            // return 'coba';
          return satu; 
            // Kita coba dengan membuat parameternya dan hasilnya akan ada sebuah array dengan berisi 3 element yang mana setiap index atau elementnya di pisahkan oleh ${} expression dan expressionnya tidak masuk ke dalamnnya
        }
        // Hasilnya adalah function coba tidak memakai `` di sampingnya  tapi kalau kita jalankan akan tampil coba , yang mana padahal function coba belum kita panggil dengan biasa coba() , jadi backtik yang didalamnya karena tidak ada parameter maka tidak di eksekusi cuma mengirim kan parameter 
    const str = coba `Halo, Nama saya ${nama} , saya ${umur} tahun.`;
            // Expressionnya masuknya ke parameter selanjutnya , ke 2 dan ke 3 kalau kita buat return dan parameter ke 2 dan ke 3 baru tampil nama dan umurnya 
            
    function cobalagi(stringg, ...value){

                        // iNI KITa menggunakan TragedTemplate
        // let result = '';
        // stringg.forEach((aray , i) => {
        //     result += `${aray}${value[i] || ''}`
            // Kita akali dengan or ketika value[i] ada isinya tampilkan tapi jika tidak ada isi dari value[i] maka tampilkan String kosong supaya undefined tidak keluar
        // });
        // return result;



            // Ini kita pakai .reduce()
        return stringg.reduce((str , o , i) => `${str}${o}${i || ""}`, ""); 
        // di akhir return , "" artinya kita kasih nilai awalnya string kosong

    }
        // Kita menggunakan rest parameter untuk menampung expression dari straight jadi berapapun nanti parameter nya akan masuk ke res parameter dengan keyword ... jadi dinamis gitu 
                // Dan value restparameternya sekarang membuat array baru 

            const straight = cobalagi `Halo, Nama saya ${nama} , saya ${umur} tahun.`;

     
            
            
            
            
            


                        // Contoh kasus dengan highlight dan alasan kita menggunakan ini agar ada background nya dans ecar aotomatis ini adalah penggunaan secara sederhana tag template
            function highlight(stringg, ...value){

            
            return stringg.reduce((strr , oo , ii) => `${strr}${oo}<span class="hl">${value[ii] || ""}</span>`, ""); 
        } 
            
            
            
            const light = highlight `Halo, Nama saya ${nama} , saya ${umur} tahun, dan email saya adalah : ${email}.`;

        document.body.innerHTML = light;



                    // Dengan menggunakan tag template ada cara penggunaan yanglain nya juga kita bisa melewatkan inputan user , dan kita ${}nama varaiblenya dulu sehingga inputan dari user tidak di eksekusi tapi cek dulu , agar menghindari dari script jahat dari hacking
