        // Function deklarasi
// function jumlahDuaBuahBilangan(a , b){
//     var total;
//     total = a + b;
//     return total;
// }
// var asli = jumlahDuaBuahBilangan(10,10);   
// console.log(asli);

//             // Function expression
//            var jumlahbilangan = function(a , b){
//                 var total;
//                 total = a + b;
//                 return total;
//             }
//             var asli = jumlahbilangan(10,40);   
//             console.log(asli);
//             var asli = jumlahbilangan(40,40);   
//             console.log(asli);
//             var asli = jumlahbilangan(100,40);   
//             console.log(asli);


            // Menjumlahkan volume 2 kubus
//   var a = 8;
//   var b = 3;
//   var volumeA;
//   var volumeB;
//   var total;

//         volumeA = 8 * 8 * 8;
//         volumeB = 3 * 3 * 3;

// total = volumeA + volumeB;
//     console.log(total);    
    
            //Membuat functionnya
    // function jumlahVolumeDuaKubus(a , b){
    //     var total, volumeA, volumeB;

    //     volumeA = a * a * a;
    //     volumeB = b * b * b;

    //     total = volumeA + volumeB;
    //     return total;
    // }            
    // var hasil = jumlahVolumeDuaKubus(8,3);
    // alert(hasil);

            // penggunaan function sederhana
// function tambah(a , b){
//     return a + b;
// }
// var a = parseInt(prompt('Masukkan nilai 1 :'));
// var b = parseInt(prompt('Masukkan nilai 2 :'));

//     var jumlah = tambah(a*2 , b*2);
//     alert(jumlah);

                // Penggunaan function dengan parameter function
// function tambah(a,b){
//     return a + b;
// }                
// function kali (a,b){
//     return a * b;
// }
//     var hasil = kali(tambah(1,3) , tambah(3,4));
//     alert(hasil);

                // Cara pemanggilan array
    // var arguments = [5,10,20,'hi' , false];
    // function tambah (){
    //     return arguments;
    // }
    // var coba =  tambah(5,10,20,'hi' , false);
    // console.log(coba);

                            // Sudo variable argument
        // function tambah(){
        //     var hasil = 0;
        //     for(var i = 0; i < arguments.length; i++){
        //         hasil += arguments[i];
        //     }
        //     return hasil;
        // }
        // console.log(tambah(5,10));

                // Penyederhanaan volume kubus
    // function volume(a,b){
    //     return a * a * a + b * b * b;
    // }   
    
            // block scope
    // var i = 2;
    //     if(i % 2 === 0){
    //         var genap = true;
    //     }
    //     if(genap){
    //         console.log('genap!');
    //     }

                // Function contoh Rekursif
    // function tes(){
    //     return tes();
    // }                
    // tes();

                // Jika menggunakan looping hasilnya sama dengan recursif
    // for(var i = 10; i >= 1; i--){
    //     console.log(i);
    // }    
                // dengan recursif 
    // function panggil(n){
    //     console.log(n);
    //     return panggil(n-1);
    // }                
    // panggil(10);
    // Tidak akan berhenti karena kita tidak berikan perintah pada 1 agar berhenti

            // jika dengan Base Case kita bisa memberhentika pada titik tertentu
    function cetak(n){

             if( n === 0) return;
            //    { return;
            // }
        console.log(n);
        return cetak(n-1);
    }            
    cetak(10);

            // Faktorial dengan rekursif
function ajinamoto(n){
    if(n === 0) return 1;
    return n * ajinamoto(n-1);
}
console.log(ajinamoto(5)); 
        // Hasil 120 karena setelah
        // 5 x 4 x 3 x 2 x 1 dilanjutkan dengan 
        // 2 x 1 x 3 x 4 x 5 = 120

            // Faktorial dengan looping(perulangan for)
    function fur(a){
    var hasil = 1;
        for(var i = a; i > 0; i--){
            hasil *= i;
        }
        return hasil;
    }            
    console.log(fur(3));
