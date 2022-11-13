for (var i = 3; i >= 1; i--){
    // Pilihan Player
    var player = parseInt(prompt('Masukkan angka pilihan anda : 1 - 10'));
    // Pilihan Computer bilangan random
    var angka = parseInt(Math.floor(Math.random() * 10) + 1);
        var jawaban1 = 4;
    if (angka == jawaban1 ){
        angka = 4;
    } else {
        angka = 8 || 6;
    } 
    console.log(angka);
    // Rules permainan
        var hasil = '';
        var pemberitahuan = '';
    if(player === angka){
        hasil = 'Jawaban yang anda Masukkan benar';
        pemberitahuan = 'Sisa Jawaban benar anda' + i + 'lagi';
    } else if (angka < 3){
        hasil = 'Angka terlalu rendah';
        pemberitahuan = 'Anda punya' + i +  'kesempatan Lagi';
    } else if (angka >= 4 && angka < 6){
        hasil = 'Angka yang anda masukkan hampir benar';
        pemberitahuan = 'Anda punya' + i +  'kesempatan Lagi';
    } else if (angka >= 6 && angka < 8){
        hasil = 'Angka yang anda masukkan hampir benar lagi';
        pemberitahuan = 'Anda punya' + i +  'kesempatan Lagi';
    } else {
        hasil = 'Angka yang anda masukkan terlalu tinggi';
        pemberitahuan = 'Anda punya' + i +  'kesempatan Lagi';
    }
    // Tampilkan hasil
    alert(hasil + pemberitahuan);
}