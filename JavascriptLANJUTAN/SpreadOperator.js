        // Spread Operator
        // memecah iterables menjadi single element

    const mhs = ['sandhika','doddy','erik'];
        // Jika dengan Destructuring
            // const [satu,dua,tiga] = mhs;
            // console.log(tiga);

                    // Jika dengan SpreadOperator paling sederhana ... (titik tiga)
        // console.log(...mhs);
            // Namun jika kita pecah ingat , ddalam arraynya String juga termasuk iterable sehingga kita bisa memecah masing masing hurufnya
    console.log(...mhs[0]);
        // Yang di tampilkan adalah caracter satu persatu elementnya

            // Dengan Spread Operator kita bisa menggabungkan 2 array 
    const gabung1 = ['sibolga','medan','bandung'];
    const gabung2 = ['jakarta','surabaya','sibuluan'];
        const gabungan = [...gabung1, 'bisakan' ,...gabung2];
            // dengan spread kita bisa buat array baru di tengah tengahnya
        console.log(gabungan);

                // kalau seperti ini , ini salah karena array dalam array dibawha conthnya
            // const gabungan = [gabung1,gabung2];
    // Sebetulnya kita bisa menggunakan method .concat(); namun dengan spread operator bisa lebih fleksibel jika kita tambahkan element baru di tengah tengah nya 
            // const gabungan = gabung1.concat(gabung2);




                    // Spread Operator sering digunakan untuk
            // Mengcopy array


            // Normalnya gini kan tapi sebenarnya ada kekurangannya kalau saat kita ubah array copyannya sebenarnya array induknya juga ikutan tertukar
    const newMhs = ['sandhika','doddy','erik'];
    // const newMhs1 = newMhs;
    //     newMhs1[0] = 'fajar';
    // console.log(newMhs1);

        // Solusinya adalah menggunakan Spread Operator element parentnya tidak berubah yang berubah element array coppyannya saja 
        const sol = [...newMhs];
        sol[0] = 'Kucing';
            console.log(sol);



            // ceritanya kita ingin tangkap element html dan memasukkan nya ke array
    const seap = document.querySelectorAll('li');
    // const araybaru = [];
    // for(const Nodelist of seap){
    //     araybaru.push(Nodelist.textContent);
    // }
    
    // Ini cara manualnya
    //         const araybaru = [];
    //         for(let i = 0; i < seap.length; i++){
    //     araybaru.push(seap[i].textContent);
    // }
    // console.log(araybaru);

                    // Kita tidak bisa petakan dengan .map() karena dia Nodelist bukan array tapi kalau .forEach() bisa cuma forEach menampilkan aray bukan membuat nya jadi array baru 
    
        // Namun jika kita tetap ingin agar .map()nya jadi array kita harus gunakan spread Operator
    
    const mhss = [...seap].map(e => e.textContent);
        // Kita gunakan ... spread operator
    console.log(mhss);




                // Latihan Sederhana
        const namaak = document.querySelector('.name');
        const mhsk = [...namaak.textContent].map(h => `<span>${h}</span>`).join("");
        console.log(mhsk);
                // Setelah kita dapatkan percaracter nya dan kita buat di dalam span setiap caracternya , skarang kita timpa ke namaak sehingga kalu kita lihat console , kita bisa lihat perbedaannya 
        namaak.innerHTML = mhsk;

        

                
