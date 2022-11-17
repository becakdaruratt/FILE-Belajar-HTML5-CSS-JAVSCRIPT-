            // Prototype dengan Constructor Function 
    function Mahasiswa(nama,energi){
        this.nama = nama;
        this.energi = energi;
        // Dan sebenarnya di belakang layar Javascript membuat kan sebuah object dengan let this ={}; dan di akhir kurung buka nya ada return this; dan sebetulnya juga javascript bukan cuma sekedar membuat object , tapi object.create(); dan sebetulnya argumen yang dikirim ke parameter itu javascript panggil adalah , Mahasiswa.prototype , seperti yangg kita tau di parameter nya itukan kayak pewarisan nah di blakang layar otomatis nih js nya manggil object.create(Mahasiswa.prototype); => prototypenya di jadikan sebagai parent secara default oleh javascript walaupun kita tidak perlu tulis 
    }   
                // Cara menambahkan method dengan Prototype alasan kenapa dipisahkan karena agar tidak menambah memori dan telah dijelaskan sebelum nya di materi Object.create();
    Mahasiswa.prototype.makan = function(porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat Makan!`;
    }
    Mahasiswa.prototype.main = function(jam){
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat Main!`;
    }
    Mahasiswa.prototype.tidur = function(jam){
        this.energi += jam * 2;
        return `Halo ${this.nama} Selamat Tidur!`
    }
    let sibolga = new Mahasiswa('Sofyan Tanjung' ,  10);
            // Dan konsep Prototype ini mirip seperti Konsep celass yang memiliki Pewarisan (Inheritance)




                    // Di atas Persi Object jadi punya Parent secara default yaitu prototype 
                    // Dibawah ini versi class nya yang kita buat sendiri 
// Versi Class
class Murid {
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }
   makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat Makan!`;
    }
    main(jam){
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat Main!`;
    }
    tidur(jam){
        this.energi += jam * 2;
        return `Halo ${this.nama} Selamat Tidur!`
    }
}
    let guru = new Murid('cekguBesar' , 51);
    let doly = new Murid('Jakarta' , 60);

   
    