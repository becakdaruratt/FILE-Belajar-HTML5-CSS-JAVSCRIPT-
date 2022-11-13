    var penumpang = ['sandhika' , undefined , 'doddy'];
    var tambahPenumpang = function(namaPenumpang ,penumpang){


        if(penumpang.length == 0){
            penumpang.push(namaPenumpang);
            return penumpang;
        } else {
            for(var i = 0; i < penumpang.length ; i++){

                if(penumpang[i] == undefined){
                    penumpang[i] = namaPenumpang;
                    return penumpang;
                } else if (penumpang[i] == namaPenumpang){
                 return console.log('Maaf nama yang sama sudah ada');
                } else if (i == penumpang.length -1){
                    penumpang.push(namaPenumpang);
                    return penumpang;
                } 
            }
        }


    }

    var hapusPenumpang = function(namaPenumpang , penumpang){
        if(penumpang.length == 0){
            console.log('Angkot kosong');
            return penumpang;
        } else {

            for(var n = 0; n < penumpang.length; n++){

                if(penumpang[n] == namaPenumpang){
                    penumpang[n] = undefined;
                    return penumpang;
                } else if (n == penumpang.length - 1){
                    console.log(namaPenumpang + 'tidak ada di dalam Angkot');
                    return penumpang;
                }

            }


        }
    }

