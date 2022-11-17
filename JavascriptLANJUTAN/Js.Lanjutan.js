            // Cara untuk membuat Object pada Javascript
    // 1. Object Literal
    let mahasiswa = {
            // Nilai ini artinya property
        nama : 'Sofyan Tanjung' ,
        energi : 21,
            // function ini artinya method
        makan : function(porsi){
            this.energi = this.energi + porsi;
            console.log(`Hallo ${this.nama} Selamat Makan!`);
            // Cara memanggilnya , mahasiswa.makan; dnseterusnya
        }
    };
            // Tapi masalahnya kalau kita menggunakan Object literal saat kita punya Mahasiswa selanjutnya kita harus copy paste kembali karena nama variablenya juga gk boleh sama 
    // 2. Fucntion declaration
        function Mhasiswa(nama,energi){
                // Membuat object didalama function deklarasi
                // dua parameter nama, dan energi itu hanya nilai awal saja karena sudah di tangkap oleh .nama dan .energi jadi itu akan berisi nilai disana sendangkan di .makan belum kita bisa kirim argumen kedalamnya makanya nilainya nambah
            let benda = {};
            benda.nama = nama;
            benda.energi = energi;

            benda.makan = function(porsi){
                this.energi += porsi;
                console.log(`Halo ${this.nama} , Selamat Makan!`);
            }
                // jika kita panggil mahasiswa yang tampil adalah functionnya bukan objectnya dan jangan lupa untuk return objectnya dan cara memanggil objectnya seperti object literal asal sudah di inisiasi sofyan.makan(21) + 21 = 42

            benda.main = function(jam){
                this.energi -= jam;
                console.log(`Halo ${this.nama}, Selamat Bermain!`);
            }



            return benda;
        };
        let sofyan = Mhasiswa('Sofyan Tanjung' , 21 );
            // kalau mau Mhasiswa berikutnya jadi gampang tidak seperti object literal tinggal instansiasi saja
        let sofyan1 = Mhasiswa('Doddy' , 10);  
        
    // Constructor Function
        // keyword new

    function Constructur(nama,energi){
        this.nama = nama;
        this.energi = energi;
        this.makan = function(porsi){  
            this.energi += porsi;
            console.log(`Halo ${this.nama} , Selamat Makan!`);
        }
        this.main = function(jam){
            this.energi -= jam;
            console.log(`Halo ${this.nama}, Selamat Bermain!`);
        }
    }
                // Tidak perlu kita membuat objectnya dan return tapi ingat harus menggunakan keyword new di bawah kita akan manggil function Constructor
        let manggilConstructorFunction = new Constructur('Sibolga' , 20);

            // Kedepannya kita akan menggunakan constructorFunction karena , akan memudahkan kita kalau membuat prototype dan juga akan lebih jelas ketika kita mau menggunakan object.create




                // Perbaikan Function Deklarasi dengan Object.create();
    const objectlagi = {
        makan : function(porsi){
            this.energi += porsi;
            console.log(`Halo ${this.nama} , Selamat Makan!`);
        },

        main : function(jam){
            this.energi -= jam;
            console.log(`Halo ${this.nama}, Selamat Bermain!`);
        },

        tidur : function(jam){
            this.energi += jam * 2;
            console.log(`Halo ${this.nama} Selamat Tidur!`);
        }
    };


    function berkibar(nama,energi){
        let bende = Object.create(objectlagi);
        bende.nama = nama;
        bende.energi = energi;
        // Harus dipanggil jika tidak menggunakan Object.create(); or manual gitu
        // bende.makan = objectlagi.makan;
        // bende.main = objectlagi.main;
        // bende.tidur = objectlagi.tidur;

        return bende;
    }       
    let soal = berkibar('Indonesia' , 76);     
    
    let mahasiswa2 = ['Sandhika Galih' , 'Doddy Ferdiansyah' , 'Erik Tohir'];
    let jumlahAngka = mahasiswa2.map(nama => ({ nama:nama, jumlhhuruff:nama.length }));
    console.table(jumlahAngka);

    function contoh(waktu){
            return nama => {
                console.log(`Halo ${nama} , selamat ${waktu}, Semoga harimu menyenangkan`);
            }
        }

        const seleksi = contoh('Malam');
            seleksi('Sofyan');


                


        