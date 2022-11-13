    var beroperasi = 6;
    var jumlahAngkot = 10;
    var sedangLembur = 8;
    for(var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++){
        
        if(noAngkot <= beroperasi){
            console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
        } else if (noAngkot === sedangLembur) {
            console.log('Angkot No. ' + noAngkot + ' Sedang Lembur.');
        } else {
            console.log('Angkot No. ' + noAngkot + ' Sedang Tidak beroperasi.');
        }

    }