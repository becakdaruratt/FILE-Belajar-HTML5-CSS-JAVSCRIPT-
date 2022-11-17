const angka = [-1 , 8 , 9 , 1 , 4 , -5 , -4 , 3 , 2 , 9];
const baru = [];
// lebih besar sama dengan 3 dan array baru 
// for(let i = 0; i <= angka.length; i++ ){
//         if( angka[i] >= 3){
//             baru.push(angka[i]);
//         }
//     }
    // vERSI method filter
// let panggil = angka.filter( e => e >= 3);

// baru.push(panggil);
// console.log(baru.join('-'));

        // isi arraynya di kali 2 dengan map
// let constan = angka.map(e => e * 2);
// baru.push(constan);
// console.log(angka.join('-'));
// console.log(baru.join('-'));

        // Menjumlahkan seluruh element arraynya + dengan .reduce() menerima 2 parameter    
            // versi function expression
    // const param = angka.reduce(function(accoumulator, currentValue){
    //     return accoumulator + currentValue;
    // });        
    // Versi arrow Function
    // const param = angka.reduce((accoumulator, currentValue) => accoumulator + currentValue );        
    // baru.push(param);
    // console.log(baru.join('-'));


                // Method Chaining
        // Cari angka > 5
        // kalikan 3
        // jumlahkan
    // const hasil = angka.filter(a => a > 5)
    // .map(b => b * 3)
    // .map(b => b / 2)
    // .reduce((acc , cur) => acc + cur);
    // console.log(hasil);



