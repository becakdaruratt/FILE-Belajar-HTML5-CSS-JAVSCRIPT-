var penumpang = ['sambilan' , undefined , 'benar'];
var tambahPenumpang = function(namaPenumpang , penumpang){

    if(penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return namaPenumpang;
    } 
    else {

        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if(penumpang[i] == namaPenumpang){
                console.log('Mohon maaf Nama yang sama sudah ada');
                return penumpang;
            } else if(i == penumpang.length -1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }

    }
}

        var hapusPenumpang = function(namaPenumpang, penumpang){

            if(penumpang.length == 0){
                console.log('Angkot Kosong!');
                return penumpang;
            } else{
                for (var n = 0; n < penumpang.length; n++){

                    if(penumpang[n] == namaPenumpang){
                        penumpang[n] = undefined;
                        return penumpang;
                    } else if (n == penumpang.length -1){
                      console.log(namaPenumpang + 'tidak ada didalam angkot');
                      return penumpang;
                    }

                }
            }

        }