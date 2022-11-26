    // Destructuring Variable / Assignment
            // Destructuring array
    const manual = ['nama','saya','adalah','Sofyan Tanjung'];
    // Destructuring array manual
        const ambilManual1 = manual[0];
        const ambilManual3 = manual[3];
        console.log(ambilManual1);
        console.log(ambilManual3);

                // Jika dengan variable , nama variable nya bebas di ikuti dengan nama variable array nya apa
        const [satu , dua , tiga , empat] = manual ;
            // Namun kita juga bisa melompati nya tapi jangan di hilangkan komanya
            const [sadak , , ,duak] = manual;
        console.log(tiga);
        console.log(duak);


            // Swap Items atau menukar isi dari Array dengan Destructuring assignment
            let a = 1;
            let b = 2;
            console.log(a);
            console.log(b);
            [a,b] = [b,a];
            console.log(a);
            console.log(b);

            // Dengan Destructuring assigment atau variable juga kita bisa 
                // return value pada function , jadi functionnya bisa mengembalikan array lalu di tangkap oleh syntax destructuring variable ini 

        // Return value pada Function
    function coba(){
        return [1,2];
    }
    const [e,f] = coba();
    console.log(f);


            // Rest Parameter -> Di isi di akhir dari arraynya dan perlu di ingat restparameter akan membuat array baru , namun jika restparameter di pakai di object maka isinya adalah object
        const [g,...h] = [12,3,5,6,7,8,10];
        console.log(g);
        console.log(h);

        // Destructuring variable pada object , nama variablenya harus sama dengan nama propertynya atau keynya

    const mhs = {
        nama: "Honda",
        umur: 21,
        email: 'pwdarurat@gmail.com'
    }
        const {nama,umur,email} = mhs;
        console.log(email);


        // Ada juga Assignment tanpa deklarasi Object
    ({namaAsli , umurAsli , emailAsli} = {namaAsli : 'Sofyan Tanjung' , umurAsli : 21 , emailAsli : 'sofyan.tanjung7923@gmail.com'});
    // Ada syaratnya harus kita berikan kurung buka dan tutup ()
    console.log(emailAsli);


        // Selanjutnya kita juga bisa assignment ke variable yang baru 
    // const vBaru = {
    //     marga : 'sidempuan',
    //     usia : 20
    // }    => bisa juga kita persingkat tanpa deklarasi Object
        
    ({marga: m , usia: u} = {marga : 'sidempuan' , usia : 21});
    console.log(u);



            // Dengan destructuring variable / assignment kita bisa memberikan 
    // Default value

    ({mouse : m , chair: c , email: d = 'sofyan.tanjung9678@gmail.com'} = {mouse : 'alat laptop' , chair : 'kursi'});
            // Syarat punya nilai default kita deklarasikan di variableny , jika tidak ada email di objectnya saat di cek maka akan di tampilkan nilai default tapi jika ada maka yang ditampilkan adalah yang ada di object
    console.log(d); 

        // Kita gunakan Restparameter pada object dan isinya adalah object
    ({nilai1 : p , ...nilai2} = {nilai1: 'okekawan' , kedua: 'benarkan' , ketiga: 'honda Ahas' , keEmpat: 'siapSalah'})
    console.log(p);
    console.log(nilai2);
            // Nama parameternya bebas asal ada titik ... didepannya

    
    // Mengambil Field / property attribute pada Object , setelah dikirim sebagai parameter untuk Function

    const objek = {
        id: 123,
        nama: 'Kamu nanyak',
        email: 'pwdarurat@gmail.com'
    }
    const isi = terserah => terserah.id;
    console.log(isi(objek));
        // Ini normal

            // Namun kita bisa memisahkannya , misalkan kita tangkap dari argumen itu objectnya lalu di kirim ke parameter dan yang di tangkap di parameter cuma id nya saja , atau namannya saja , asalkan sesuai dengan nama field atua attributeny  => Contohnya

    const lagicoba = {
        id: 097,
        alas: 'Mouse',
        tikus: 'monyet'
    }
    const benar = ({id , tikus}) => id + tikus;
    console.log(benar(lagicoba));
    // Perlu di ingat karena kita memisahkan object jangan lupa untuk pakai ({id}) kurung buka dan kurung siku nya juga 


