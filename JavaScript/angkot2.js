//     var nilaimax = 6
//     var nilaiAwal = 1;
// while ( nilaiAwal <= nilaimax){
//     console.log('Angkot No. ' + nilaiAwal + ' beroperasi dengan baik.');
//     nilaiAwal++
// }           
//     for(var nilaiakhir = 7; nilaiakhir <= 10; nilaiakhir++){
//         console.log('Angkot No. ' + nilaiakhir + ' sedang tidak beroperasi.');
//     }            

    var jumlahAngkot = 10;                    // Perbaiki Code Program
    var nilaimax = 7
    var nilaiAwal = 1;
while ( nilaiAwal <= nilaimax){
    console.log('Angkot No. ' + nilaiAwal + ' beroperasi dengan baik.');
    nilaiAwal++
}           
    for(var nilaiAwal = nilaimax + 1 ; nilaiAwal <= jumlahAngkot; nilaiAwal++){
        console.log('Angkot No. ' + nilaiAwal + ' sedang tidak beroperasi.');
    }