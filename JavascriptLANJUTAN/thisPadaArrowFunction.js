                    <== thispadaArrowFunction ==>
jika kita mengubah funciton expression menjadi arrowFunction maka konsep thisnya 
menjadi berbeda 
                    <!-- Jika menggunakan FUnction expression konsep this -->
    const Mahasiswa = function(){
        this.nama = 'Sibolga';
        this.umur = 21;
        this.sayHello = function(){
            console.log(`Halo, nama saya ${this.nama} , dan Umur ${this.umur} tahun`);
        }
    }                    
    const sofyan = new Mahasiswa();

                <!-- Jika Menggunkan Arrow Function konsep this -->
        1. tidak bisa kalo mau bikin Constructor function meggunakan ArroW Function 
        2. tapi kalau method bisa 
=> contoh arrow function pada method nya bisa
        const expresiWajah = function(){
            this.makan = 'Nasih Goreng';
            this.energi = 200;
            this.tidur = 10;
            this.method = () => {
                console.log(`Selamat makan ${this.makan} , energi kamu ada ${this.energi} ya , dan selamat tidur ${this.tidur} `);
            }
        }
        const siboga = new expresiWajah();
                =>Kalaukita lihat sama saja fungsinya antara arrow function atau dengan function expression sama , tapi sebetulnya pada saat kita gunakan arrow function , arrow function tidak menyimpan konteks this. makanya dia cari diluar
    // Ini akan berbeda jika kita membuat nya bukan dengan constructor function tapi dengan object literal 
        => contoh kasus nya 
    const mhs1 = {
        nama : 'Tarutung',
        umur : 33,
        sayHello : function(){ => akan beda jika kita ganti jadi arrow Function () => , kalau dengna function expression dia bisa tangkap this.nama di lexsical scopenya dia cari keluar , dan dapat begitu sampai window tapi dengan arrow FUnction nilainya jadi undefined , karena arrow function nyarinya this kalau tidak ada this nya maka dia akan cari sampai window kalau tidak ada juga maka akan di isi undefined , this yang di maksud seperti ini =>
            this.nama != nama:'Tarutung'; => beda 
            console.log(`Halo ${this.nama} umur saya ${this.umur} tahun!`);
        }
    };

        => Arrow Function tidak memiliki konsep this

        const kasus = function(){
            this.nama = 'Hanya 2 menit';
            this.energi = 51;
            this.sayHello = function(){ => hoisting berlaku ngacunya this.nama
                console.log(`Buku ${this.nama} sangat bagus dan energinya ${this.energi}`);
            }
            setInterval(function(){ => Ini adalah function deklarasi yang ngacunya menggunakan this itu ke window , hoisting = menangkap , jadi pertama kali dia cek langsung ke windownya atau globalnya 
                console.log(this.energi++);
            }, 500);

            => lalu cara nya bisa kita gunakan arrow Function karena arrow Function tidak punya konsep this. sedangkan function deklarasi punya konsep this. this itu adalah window , makanya saat kita gunakan arrow function dia bisa tangkap object kasusnya
        }

        // studi kasus nya
    const keren = function(){
        this.namee = 'Siboooga';
        this.angka = 10;
        this.katakanSaya = function(){
            console.log(`heii ${this.namee} , ${this.angka}`);
        }
        setInterval(() => {
            console.log(this.angka++);
        },500);
    }

        // Studi kasus laiinya yang nyata















        

