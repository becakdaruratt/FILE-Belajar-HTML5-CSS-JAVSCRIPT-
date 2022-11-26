    // forOF ada banyak hal untuk melakukan sebuah looping
        // Dibawah ada ragam cara

                // Array
    const mhs = ['sandhika','Doddy','Erik'];

                // Cara pertama manual looping array
    // for(let i = 0; i < mhs.length; i++){
    //     console.log(mhs[i]);
    // }

                // Cara kedua menggunakan method looping array
    // mhs.forEach(e => console.log(e));

                // Ketiga menggunakan For OF iterable looping array
    for(const k of mhs){
        console.log(k);
    }


                // Kali ini kita akan looping String forEach tidak bisa menlooping String karena dia bukan array tapi dengan for OF kita bisa 
    const nama = "Sofyan Tanjung";
    for(const n of nama){
        console.log(n);
    }
            // Dia akan melooping tiap tiap karakternya per satu karakter bahkan spasi pun di hitung

    // Kita melooping array
    const lop = ['sandhika','doddy','erik'];
    // lop.forEach((h,j) => {
    //     console.log(`${h} adalah mahasiswa ke- ${j + 1}`);
    // });


            // Kalau kita menggunakan forOF secara default tidak punya index maka kita harus menggunakan 1 method yang membuatkan array barunya tetapi yang ditampilkan hanya isinya saja
    // Tidak bisa pakai index tapi isinya saja -> contohnya
    for(const l of lop){
        console.log(l);
    }
        // Menggunakan method dan kurung siku destructuring assignment
        for(const [s,w] of lop.entries()){
            console.log(`${s} adalah mahasiswa ke- ${w + 1}`);
        }




                    // Nodelist pada forOF iterable kita bisa query atau dapatkan isinya
    const getUser = document.querySelectorAll('.name');

                    // Mengquery atau dapatkan isinya dengan forEach
    // getUser.forEach(e => console.log(e.textContent));

                    // Mengquery dengan forOf langsung dapat karena nodelist
    for(const Nodelist of getUser){
        console.log(Nodelist.textContent);
    }



                // Arguments dengan forOf , perku di ingat jika kita looping nya dengan .reduce() or forOf jelas tidak bisa karena itu bukanlah sebuah array -> kita gunakan for of untuk menangkap arguments objectnya

        // Contoh menggunakan forOf iterable arguments
    function love(){
        let total = 0;
        for(const sos of arguments){
            total += sos;
        }    
        return total;
    }
    console.log(love(1,2,3,4,5));