    var cobaObject = {
            // Property variable
        nama : 'Sofyan Tanjung',
        usia : 21,
            // function didalam objcet disebut method
        object : function(){

        },
            // Object didalam Object 
        alamat : {
            jalan : 'Murai' ,
            kota : 'Sibolga' ,
            provinsi : 'Sumatra Utara'
        }
    };
    console.log(cobaObject.alamat.jalan);


    function buatObjectMahasiswa(nama, nrp ,email, jurusan){
        var mhs = {};
        mhs.nama = nama;
        mhs.nrp = nrp;
        mhs.email = email;
        mhs.jurusan = jurusan;
            return mhs;
    }
        var panggilan = buatObjectMahasiswa('Sofyan Tanjung' , '089912' , 'pwdarurat@gmail.com' , 'Teknik Sepeda Motor');
        console.log(panggilan);