function init(){
    let nama = 'Sandhika';
    function tampilNama(){
        console.log(nama);
    }
    // tampilNama(); disini kita menjalankan function tampilNama()
            // Di bawah ini kita akan coba tidak menjalankannya
    return tampilNama; 
        // Pakai return untuk mengembalikan nilai karena ini function
}   
        // Kita bungkus dengan variable dan fungsi nya baru sebagian yang berjalan 
        // Karena tampilNama belum kita jalankan dengna kita bungkus ke dalam variable setelah nya baru bisa kita jalankan seluruh functionya
//    init();
    let panggilNama = init();
        panggilNama();
                // ini memungkinkan kita untuk bisa melakukan function factory


        function satu(){
            // Kita akan membuat nama nya sesuai dengan inpus oleh user
            function dua(name){
                console.log(name);
            }
                // yang tampil adalah function dua karena kita mengembalikan function dua dan dalam keadaan object dan function dua belum di jalankan
            return dua;
        } 
                // agar function dua bisa jalan kita harus bungkus ke dalam variable jadi seperti menjalankan sebagian yang belum jalan
        let panggilan = satu();
         panggilan('Jakarta');


            // Kita juga bisa membuatnya jadi anonymous function atau function tanpa nama

    function tanpaNama (){
        return function(name){
            console.log(name);
        }
    }
    let ubahnama = tanpaNama();
        ubahnama('berhasil');
        ubahnama('success');

                // Ini juga cara dari closures




        // Studi kasus CLosure lagi => Function Factories
    function ucapkanSalam(waktu){
                    // console waktunya tampil artinya yang dijalankan jika kita gunakan return pada function anonymous adalah function parentnya di jalankan sedangkan function didalmnya tidak
            //  console.log(`waktu nya ${waktu}`);
        return function(nama){
            console.log(`Halo ${nama}, Selamat ${waktu}, Semoga Harimu Menyenangkan`);
        }
       
    }   
    let bungkusan = ucapkanSalam('Pagi');
    // bungkusan dibawah yang dijalankan adalah function ke dua yaitu anonymous 
    bungkusan('Sibolga');
    // Belum jalan sepenuhnya karena yang masih jalan function ucapkanSalam sedangkan anonymous function belum karena kita me return nilainya

    // console.dir(bungkusan); => kalau kita lihat dengan menggunakan console.dir kita bisa lihat closure (waktu) 'pagi' sudah berjalan walaupun hanyak setengah nya atau function anonymousnya belum di eksekusi atau dijalankan, tinggal nunggu ('sibolga') atua kit ajalankan bungkusannya 



                    // Studi kasus lain agar punya Private Method
            // Jadi masalah jika kit apunya variable ukuran di luar atau windownya karena dia hoisting cek didalam function baru ke luar atau window walupun itu dibawah akan di cek terus jadi ketimpa gitu makanya penting sebuah private metho cara nya yaitu dengan closre
    // let ukuran = 0;
    // let asli = function(){
    //     return ++ukuran;
    // }         

    // ukuran = 100; 
    // console.log(asli());
    // console.log(asli());
    // console.log(asli());


                // Dengan closure inner Function private method
    function deklarasikan(){
        let janji = 0;
        function dibawah(){
            return ++janji;
        }
        return dibawah;
    }            
    let janji = 100;
    // Tidak akan berpengaruh karena private method 
    let sekolah = deklarasikan();
    console.log(sekolah());
    console.log(sekolah());
    console.log(sekolah());
    console.log(sekolah());

            // Sebenarnya ada caranya agar kita tidak membua ttampung variable janji dn sebagainya untuk menjalankan function innernya yaitu dengna imediatle infoFunction yaitu dengna cara (bungkus di functionya)(diakhir functionya);

    let iihJeleknya = (function(){
        let nominal = 0;
        return function(){
            return ++nominal;
        }
    })();
    console.log(iihJeleknya());
    console.log(iihJeleknya());
    console.log(iihJeleknya());
    console.log(iihJeleknya());
    console.log(iihJeleknya());






   














