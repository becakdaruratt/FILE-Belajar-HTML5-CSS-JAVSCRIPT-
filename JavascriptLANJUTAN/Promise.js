        // Sebelum kita masuk Promise dividio sebelumnya kita sudah tau kalau kita ingin melakukan sebuah request ke sebuah API , kita bisa menggunakan jQuery ajax ya 
    // contohnya
        // $.ajax adalah method dari ajax
    // $.ajax({
    //     url: 'https://www.youtube.com/watch?v=wIrZq4Z9hLU&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=22',
            // Kita ingin cari sesuatu dengan url tersebut
        // success: yotub => console.log(yotub)
        // Apabila alamat url benar dan berhasil kita mau ngapaiin kita bisa jalankan function 
        // error: -> kita juga bisa menambahkan error apabila error yang terjadi apa tapi kali ini kita tidak lakukan karena sudah di mater callback sebelumnya
    // }) -> Ini masih error karena Request API nya  , ini kita menggunakan Library ajax


            // Ada cara yang lebih gampang dengan menggunakan library dan lebih simple dari pada ketika kita menggunakan object Ajax yang panjang 
    // fetch()
                //Ctt:  url yang kita masukkan adalah url API milik orang lain
// const movies = fetch('http://img.omdbapi.com/?apikey=[yourkey]&');
        // Hasil dari movies ini adalah Promies
// console.log(movies);
            // APabila kita ingin melihat isi atau film dari web orang lain yang kita ambil url dari API nya kita bisa gunakan method lagi 
    // Ini contohnya ->
    fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
        // kita gunakan .then() yang isinya berupa callback
        .then(respon => respon.json())
        // Kita gunakan method json() karena method ini mengembalikan Promise
        .then(response => console.log(response));
        // . Disini adalah method chaining






                // Promise Yang sangat sederhana 
// contoh 1
let diTepati = true;
const janji1 = new Promise((Resolve,reject) => {
    if(diTepati){
        Resolve(`Janji Telah ditepati!`); 
        // Ini sebenarnya bisa apa saja bisa request ke API bisa juga menjalankan sebuah prosess yang kompleks
    }
    else {
        reject(`Ingkar janji...`);
    }
})
// Kita buat object tapi objectnya object khusus , dengan 2 parameter 1. terpenuhi 2. tidak terpenuhi 
// console.log(janji1); -> tangkapnya cuma satu jika ingin tangkap ke dua 2 nya

    // Kita bisa lakukan dengan then dan catch 

    janji1
    .then(respwon => console.log(`OK! : ${respwon}`))
    .catch(respon => console.log(`NOT OK! : ${respon}`));



        // COntoh ke 2 kita buat agar nunggu dulu janji nya tidak terpenuhi karena datanya banyak
        let TelahDitepati = true;
    const janji2 = new Promise((Resolve , reject) => {
        if( TelahDitepati ){
            setTimeout(() => {
                Resolve(`Ditepati Setelah beberapa waktu`);
            }, 2000)
        }
        else {
            setTimeout(() => {
                Resolve(`Tidak Ditepati Setelah beberapa detik`);
            }, 2000)
        }
    });
            // Kita akan cek apakah synchronous atau asynchronous 
        // Ini kita lakukan agar pending nya keliatan
        console.log(`Mulai`);
        // console.log(janji2.then(() => console.log(janji2)));
            // Janji2 sebelum then kita buat untuk jalankan , lalu kita panggil lagi janji2 didalam console log itu adalah saat consol nya selesai jadi 2x pemanggilan janji2 
            // karena janji2 sebelum then = console.log(janji2);



    // dibawah ini kita panggil lagi tapi pandingnya tidak keliatan
    janji2
    .finally(() => console.log('Selesai Mengunggu!'))
    .then(respwon => console.log(`OK! : ${respwon}`))
    .catch(respon => console.log(`NOT OK! : ${respon}`));
        console.log(`Selesai`);


            // Alasan janji2 dan janji1 telat dalam eksekusi karena ke2 hal tersebut masuk ke API dulu lalu ke callback dicek sama EVENT Loop setelah kosong track baru di eksekusi beda dengan console.log langsung masuk track makanya ada waktu , karena prosess menjalankannya tersebut masuk di API web




            // Terakhir Promise.all() -> adalah sebuah method Promise untuk menjalankan sekaligus Promise yang banyak , misalkan kita connect ke 2 API yang berbeda

    // COntoh nya =>
    const filmm = new Promise(resolve => {
            // Kita tidak buat reject karena biar lebih sederhana dan singkat
        setTimeout(() => {
            resolve([{
                judul : 'Avengers',
                sutradara: 'Sandhika Galih',
                pameran : 'Doddy , Erik'
            }])
        }, 1000);
    });
            // Lalu kita punya promise lagi , karena mungkin saja dalam 1 halaman web kita ngambil banyak API
    const cuaca = new Promise(Resolve => {
        setTimeout(()=>{
            Resolve([{
                kota: 'bandung',
                tempt: 26,
                kondisi: 'Cerah Berawan'
            }]);
        },500);
    });

            // Lalu jika kita ingin jalankan Satu satu 
    // filmm.then(respon => console.log(respon));
    // cuaca.then(respon => console.log(respon));

            // Namun jika kita ingin menjalankannya sekaligus
    Promise.all([filmm,cuaca])
        // Kita membuat Promisenya didalam array
        // .then(response => console.log(response)) -> jadinya array dalam array namun jika tidak ingin array dalam array atau terpisah kita bisa gunakan spread Operator
        .then(e => {
            const [film,cuaca] = e;
            console.log(film);
            console.log(cuaca);
        });
