        // callBack yang dikirimkan sebagai parameter pada Function lain
    //callBack synchronous 

                //function ini akan langsung kita masukkan ke tampilkanPesan
    // function halo(nama){
    //     alert(`Halo ${nama}`);
    // }

    // function tampilkanPesan(callBackk){
    //     const nama = prompt(`Masukkan Nama :`);
    //     callBackk(nama);
    // }

    // tampilkanPesan(halo => alert(`Halo ${halo}`));



                // yang kita butuhkan adalah Asynchronous Callback
    const mhs = [
        {
            "nama" : "Sandhika Galih",
            "nrp"  : "043040023",
            "email": "pwdarurat@gmail.com",
            "jurusan": "Teknik Computer",
            "idDosenWali": 1
        },
        {
            "nama" : "Erik",
            "nrp"  : "023050093",
            "email": "sofyan.tanjung7923@gmail.com",
            "jurusan": "Teknik Informatika",
            "idDosenWali": 3
        },
        {
            "nama" : "Doddy Ferdiansyah",
            "nrp"  : "133049923",
            "email": "doddy@gmail.com",
            "jurusan": "Teknik Computer",
            "idDosenWali": 2
        }
    ]
    // for(const f of mhs){
    //     console.log(f);
    // }

            // Looping namanya saja dengan callback
    // dan biasanya High order function itu callbacks juga
    mhs.forEach(m => console.log(m.nama));

    // const {...satu} = [...mhs];
    // console.log(satu);



            // Asynchronous Callback , urlnya kita ambil harusnya dari API cuma karena ini contoh jadi gpp success dan error adalah callback , dan kita akan menjalankan Ajax
    function getDataMahasiswa(url, success , error){
        let xhr = XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(xhr.readystate === 4){
                if(xhr.status === 200){
                    success(xhr.response);
                } else if (xhr.status === 404){
                    error();
                }
            }
        }
        xhr.open('get',url);
        xhr.send();
    }
    getDataMahasiswa('data/Mahasasiswa.json', () => {}, ()=>{});

    // Intinya adalah bedanya denganyang tadi ini Asynchronous sehingga kaalu ada macet yang macet itu di masukkan ke API dulu , jadi yang macet itu terakhir di eksekusi dan File json yang kita buat ini dengan Vanila JAVASCRIPT atau javascript murni


            //ada cara gampangnya kita menggunakan JQUERY connect secara ONline

    // jQuery
    $.ajax({
        url: 'data/mahasiswa.json',
        success: (mhs) => {
            mhs.forEach(e => console.log(e.nama));
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });



















