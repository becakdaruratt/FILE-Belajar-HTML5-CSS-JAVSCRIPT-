   let benar = true;
   while(benar == true){
   // Pilihan Player
 let Player = prompt('Pilih : gajah , semut , orang');

    // Pilihan Computer
    let Computer = Math.round(Math.random() * 10);
    if(Computer < 4){
        Computer = 'gajah';
    } else if (Computer > 4 && Computer < 7){
        Computer = 'semut';
    } else {
        Computer = 'orang';
    }
    // Rules Permaiann
    let hasil = "";
    if(Player == Computer){
        hasil = "SERI";
    } else if (Player == 'gajah'){
        hasil = (Computer == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (Player == 'orang'){
        hasil = (Computer == 'semut') ? 'MENANG!' : 'KALAH!';
    } else if (Player == 'semut'){
        hasil = (Computer == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'memasukkan pilihan yang salah!';
    }
    
    // Tampilkan hasilnya

    alert(" Kamu memilih :" + Player + " dan Computer memilih " + Computer + "\nMaka hasilnya : Kamu" + hasil);

    benar = confirm('Mau bermain Lagi?');
   }    
   alert('Terimakasih Sudah Bermain!');
