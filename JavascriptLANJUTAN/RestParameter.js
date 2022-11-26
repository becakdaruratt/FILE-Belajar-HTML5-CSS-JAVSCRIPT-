        // Rest Parameter 
            // Cara Penggunaan sederhana 
    function myFunc(a,b,...myArgs){
        return `a = ${a}, b = ${b} dan myArgs = ${myArgs}`
            // Rest parameter hanya bisa kita gunakan di akhir dari agument
        // Sebenarnya bisa kita tangkap dengan arguments , tapi bentuk nya bukan array sehingga kita tidak dapat memakai method method array , karena arguments itu object
        
        // Namun jika kita paksa agar argumentsnya jadi array kita gunakan method Array.from(arguments);

        // Atau kita juga bisa pakai spread operator untuk membuatnya jadi array
        // return [...arguments];
        // Pastikan parameternya kosong
    }
    // console.log(myFunc(1,2,3,4,5));




            // Contoh lain penjumlahan dengna for OF
    function jumlahAngka(...angka){
        let total = 0;
        for(let sip of angka){
             total += sip;
            }
            return total;

                // Ini dengan .reduce();
        // return angka.reduce((e,d) => e + d);
    }
    console.log(jumlahAngka(1,2,3,4,5));


        // Array destructuring , dengan rest parameter
    const kelompok1 = ['Sibolga','Kapal','PondokBatu','Erik','Fajar'];
    const [ketua,wakil,...anggota] = kelompok1;
    console.log(anggota);


        // Object destructuring , dengan rest parameter
     const team = {
        pm: 'sandhika',
        frontEnd1: 'doddy',
        frontEnd2: 'Erik',
        backend: 'fajar',
        ux: 'Hendra',
        devOps: 'Ferry'
     }
     const {pm , ...kolt} = team;
     console.log(kolt);


            // COntoh lain Filtering
        function filterBy(type , ...values){
            return values.filter(v => typeof v === type);
        }

                // Tugas kita adalah mana saja dari parameter yang dikirim ke filterBy yang bentuknya angka
        console.log(filterBy('string',1,2,'Sandhika',false,10,true,'Doddy'));
            // hasilnya bisa number karena 'number' <- kita memilihnya number