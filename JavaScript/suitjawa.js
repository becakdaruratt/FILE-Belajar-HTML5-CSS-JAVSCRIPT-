  
  var tanya = true;
  while (tanya == true) {
  // Menangkap Pilihan Player
    var p = prompt('Pilih: gajah , semut , orang');
    // Menangkap Pilihan Computer

    // Membangkitkan bilangan Random
    var Comp = Math.random();

        if(Comp < 0.34){
            Comp = 'gajah';
        } else if (Comp > 0.34 && Comp < 0.67){
            Comp = 'orang';
        } else {
            Comp = 'semut';
        }
        console.log(Comp);

    // Menentukan rules
        var hasil = '';
    if (p == Comp){
        hasil = 'SERI!';
    } else if (p == 'gajah'){
        // if (Comp == 'orang'){
        //     hasil = 'Menang!'
        // } else {
        //     hasil = 'KALAH!'
        // } 
        hasil = (Comp == 'orang') ? "MENANG!" : "KALAH!";
    } else if ( p == 'orang'){
        // if(Comp == 'semut'){
        //     hasil = 'KALAH!'
        // } else {
        //     hasil = 'MENANG!';
        // }
        hasil = (Comp == 'semut') ? "KALAH!" : "MENANG!";
    } else if (p == 'semut'){
        hasil = (Comp == 'gajah') ? "KALAH!" : "MENANG!";
    } else {
        hasil = 'Memasukkan pilihan yang salah';
    }

    // tampilkan hasilnya
    
        alert(" Kamu memilih :" + p + " dan Computer memilih " + Comp + "\nMaka hasilnya : Kamu" + hasil);

        tanya = confirm("Lagi ?");
  }        
  alert('Terimakasih Telah bermain!');