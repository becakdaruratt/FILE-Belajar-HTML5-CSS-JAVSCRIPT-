        // Destructuring Function Return Value
    const PenjumlahanPerkalian = (a , b) => [a + b , a * b];
    // const jumlah = PenjumlahanPerkalian(2,3)[0]; 
    // Pertama di tambah dahulu baru ke 2 di kali
    // const kali = PenjumlahanPerkalian(2,3)[1];
             // Ini normal namun kita bisa persingkat dengan menggunakan Destructuring
    const [jumlah , kali] = PenjumlahanPerkalian(2,3);
            // Urutannya sangat berpengaruh
    console.log(jumlah);
    console.log(kali);

        const Kalkulasi = (a , b) => [a + b , a * b , a / b , a - b];
        const [ditambah , dikali , dibagi , dikurang] = Kalkulasi(5,10);
        console.log(dikurang ,"","",dikurang); 
                 // Gk bisa kita akali namun jika kita ingin agar return valuenya tidak berpengaruh kita harus menggunakan object jangan array
    // Dengna object Destructruing Functionnya Return value

        const object = (j, k) => ({tambahh : j + k, kurangg : j - k, kalii: j * k , baggii : j / k});
        const {tambahh , kurangg , kalii , baggii} = object(15,20);
        console.log(tambahh);
        // Urutan nya atau nama variablena jadi bebas asalkan saam dengan key nya atua indexnya nama propertynya akan tetap ngacunya ke property itu karena kita sudah inisiasi secara langsung pada objectnya nama propertynya





        // Sekarang
                // Destructuring Function pada Arguments
        const Mahasiswa = {
            nama: 'Sofyan Tanjung',
            umur: 21,
            email: 'pwdarurat@gmail.com',
            nilai : {
                tugas: 80,
                uts: 85,
                uas: 75
            }
        };
        // function deklarasi (satu,dua){
        //     return `Halo, Nama saya ${satu}, dan umur saya ${dua}`
        // }
        // console.log(deklarasi(Mahasiswa.nama,Mahasiswa.umur));
        // Atau bisa juga kita pecah kita tangkap di arguments sebagai object lalu di kirim ke parameter di saring tergantung kita pilihnya yang mana kita sudha bahas di Destructuring variable / assignment

        // Begini contohnya
        // function deklarasi (satu){
        //     return `Halo, Nama saya ${satu.nama}, dan umur saya ${satu.umur}`;
        // }
        // console.log(deklarasi(Mahasiswa));

                    // Kita juga bisa mempersimplenya lagi sehingga di parameternya langsung di pecah menjadi object => Begini contohnya
        // function deklarasi ({nama , umur , email}){
        //     return `Halo, Nama saya ${nama}, dan umur saya ${umur} terakhir email saya ${email}`;
        // }
        // console.log(deklarasi(Mahasiswa));


        // Ini akan terpakai sekali jika objectnya kompleks begini contohnya 
        // function deklarasi ({nama , umur , email , nilai}){
        //     return `Halo, Nama saya ${nama}, dan umur saya ${umur} terakhir email saya ${email} dan nilai uas saya adalah ${nilai.uas}`;
        // }
        // console.log(deklarasi(Mahasiswa));
        // Ini normal 

            // Namun kita bisa pecha lagi di parameternya kan object kita pecah lagi jadi object sehingga lebih sederhana begini contohnya =>
            function deklarasi ({nama , umur , email , nilai: {tugas,uts,uas}}){
                return `Halo, Nama saya ${nama}, dan umur saya ${umur} terakhir email saya ${email} dan nilai uas saya adalah ${uts}`;
            }
            console.log(deklarasi(Mahasiswa));
            