    // Pilihan Computer
function getPilihanComputer(){
    const Computer = Math.round(Math.random() * 10);
    if (Computer < 4) return 'gajah';
    if (Computer > 4 && Computer < 7) return 'semut';
    return 'orang';
    };
    
    // Rules Permainan
function Hasil(Computer , Player){
    if(Player == Computer) return "SERI";
    if (Player == 'gajah') return (Computer == 'orang') ? 'MENANG!' : 'KALAH!';
    if (Player == 'orang') return (Computer == 'semut') ? 'MENANG!' : 'KALAH!';
    if (Player == 'semut') return (Computer == 'gajah') ? 'MENANG!' : 'KALAH!';
    return 'memasukkan pilihan yang salah!';
}


    function putar(){
        const imgComputer = document.querySelector('.img-komputer');
        const gambar = ['gajah','semut','orang'];
        let i = 0;
        const waktuMulai = new Date().getTime();
        setInterval(function(){
            if(new Date().getTime() - waktuMulai > 1000){
                clearInterval;
                return
            }
            imgComputer.setAttribute('src', '../' + gambar[i++] + '.jpg');
            if(i == gambar.length) return i = 0;
        }, 100);
    }





const pilihan = document.querySelectorAll('li img');
            // Pill itu artinya adalah informasi dari Event yang sedang terjadi tapi terjadinya saat kita click saja ya walaupun aslinya sudah tampil seluruh datanya tapi tidak muncul akan muncul sesuai event yang kita click atau yang kita click saja
    pilihan.forEach(function(pil){
        pil.addEventListener('click',function(){
            const pilihanComputer = getPilihanComputer();
            const pilihanPlayer = pil.className;
            const hasilnya = Hasil(pilihanComputer,pilihanPlayer);
            const MenangKalah = document.querySelector('.info');
            MenangKalah.innerHTML = hasilnya;
            putar();

        setTimeout(function(){
            
            const imgGambar = document.getElementsByClassName('img-komputer')[0];
            imgGambar.setAttribute('src', '../' + pilihanComputer + '.jpg');

        },1000);

         
        });
    });









        // Ini menjadikan yang akan di tampilkan hanya yang di click saja , karena dengan forEach semua isi dari li img nya , itu kan tampilnya array , nah forEach mengambil atau melooping semua isinya satu satu , lalu di masukkan ke parameter pil , kalau kita consolpil sebelum addEventListener maka kita bisa lihat gambarnya satu satu seakan pakai index gitu , nah barulah kita gunakan pil.addEvenListener karena skarang pill nya sudah berisi semua isi dari arraynya , sebenarnya sudah ada semua isi arraynya cuma belum ditampilkan kita ingin ditampilkan nnya saat kita click yang mau kita inginkan saja 









    // Menangkap Tombol Gajah
// const Gajah = document.getElementsByClassName('gajah')[0];    
//     Gajah.addEventListener('click', function(){
//        const pilihanComputer = getPilihanComputer();
//        const pilihanPlayer = 'gajah';
//        const hasilnya = Hasil(pilihanComputer,pilihanPlayer);
//        const MenangKalah = document.querySelector('.info');
//        MenangKalah.innerHTML = hasilnya;

//        const imgGambar = document.getElementsByClassName('img-komputer')[0];
//        imgGambar.setAttribute('src', '../' + pilihanComputer + '.jpg');
//     });
//     // Menangkap Tombol orang
//     const orang = document.getElementsByClassName('orang')[0];    
//     orang.addEventListener('click', function(){
//        const pilihanComputer = getPilihanComputer();
//        const pilihanPlayer = 'orang';
//        const hasilnya = Hasil(pilihanComputer,pilihanPlayer);
//        const MenangKalah = document.querySelector('.info');
//        MenangKalah.innerHTML = hasilnya;

//        const imgGambar = document.getElementsByClassName('img-komputer')[0];
//        imgGambar.setAttribute('src', '../' + pilihanComputer + '.jpg');
//     });
//     // Menangkap Tombol Semut
//     const semut = document.getElementsByClassName('semut')[0];    
//     semut.addEventListener('click', function(){
//        const pilihanComputer = getPilihanComputer();
//        const pilihanPlayer = 'semut';
//        const hasilnya = Hasil(pilihanComputer,pilihanPlayer);
//        const MenangKalah = document.querySelector('.info');
//        MenangKalah.innerHTML = hasilnya;

//        const imgGambar = document.getElementsByClassName('img-komputer')[0];
//        imgGambar.setAttribute('src', '../' + pilihanComputer + '.jpg');
//     }); 
                    // Kita akan perbaiki agar tidak 3 function seperti itu