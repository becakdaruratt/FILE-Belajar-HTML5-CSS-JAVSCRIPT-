                 <== Higher Order Functipn ==>
ini adalah topik yang sangat penting saat belajar Modern Javascript     

    Definisinya => 
    . Function Yang beroperasi pada function yang lain baik itu digunakan dalam 
            arguments, maupun sebagai return value. 
    . Javascript memperlakukan function sebagai object. - sitepoint.com

        // Studi kasus kita membuat function didalam argument
        function selesai(){
            alert(`Selesai Mengerjakan tugas!`);
        }

        // Disebut High Order Function karena ada function didalamn argumentnya
    function deklarasi (matakuliah , selesai){ => function sebagai argumen disebut 
                                                    callback
        console.log(`Mulai mengerjakan Tugas ${matakuliah}...`);
        selesai();
    }
        deklarasi('Informatika',selesai); => function tidak bisa 
                                            di jalankan didalam function ()


        // Contoh lainya
            // setTimeout bisa kita sebut HigherOrderFunction
        setTimeout(function(){

        },100); => Menerima 2 parameter 1. function (callback) 2. berapa milisecon
                                                                intervalnya
        // COntoh lain
                // Higher order Function
        Element.addEventlistener('click',function(){ => callbak

        });

        // Contoh lainnya di closures
        function contoh(waktu){ => sama Higher Order function karena didalamnya ada 
                                    return value function
            return function(nama){
                console.log(`Halo ${nama} , selamat ${waktu}, Semoga harimu menyenangkan`);
            }
        }

        const seleksi = contoh('Malam');
            seleksi('Sofyan');



                Alasan kenapa Menggunakan Higher Order function
        1. abstraksi untuk membuat agar code yang kita buat lebih sederhana atua lebih simple karena jika menggunakan function kita menyembunyikan kerumitan

                . Semakin besar sebuah program, semakin tinggi kompleksitasnya, Semakin membingungkan programmernya == Semakin banyak codenya semakin membingungkan , makanya ada baiknya di pisahkan dengan function function sendiri , dengna membuat function dengan function  sendiri kita membuat programnnya semakin simple 

           #Anekdot => ada dua cara untuk merancang sebuah software. cara pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas jelas tidak ada kekurangannya, dan cara lainnya adalah untuk membuat programmnya se kompleks mungkin sehingga tidak ada kekurangan yang jelas      
    
        2. Dengan terbiasa kita memasukkan segala sesuatu nya kedalam function kita masuk kedalam pendekatan kedalam Functional Programming => dan dengan kita menggunakan paradigma ini dengan benar itu akan membuat programkita lebih efektif lebih aman dan efisien lagi
        
        
        
        
        // latihan looping sederhana
        let totall = 0, count = 1;
        while(count <= 10){
            totall += count;
            count += 1;
        }
            console.log(totall);
    
                    // jika dengan function jadi lebih dinamis
            function dinamis (e){
                for(let i = 0; i <= e; i++){   
                    console.log(i);
                }
            }
            dinamis(100);
                
                    // contoh lainnya bisa juga kita kirim ke parameter console.log hasilnya tidak ada karena console.log tidak memberika nilai apapun
            function repeat(n , action){
                for(let o = 0; o <= n; o++){
                    alert(o);
                }
            }
            repeat(10, console.log);
                    // Alert di tangkap lagi karena alert yang ke 11 itu akan mencari keluar atua ke windownya makanya di ulang 1x lagi walaupun parameter ke dua tidak kita gunakan 
            repeat(10, alert);


            Ctt: kerumitan nya kita simpan didalm functi
            