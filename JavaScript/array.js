            // Contoh array
// var t = [];
//     t = [
//       'senin' , 10 , true 
//     ];
//     console.log(typeof(t));
            // Elemen array Boleh beda

       var fungsi = function(){
            alert('Hello World');
        };

var myarray = ['teks' , 2 , false , fungsi , [4,5,6]];

        console.log(myarray[4][2]); 


                // Manipulasi Array
        // 1.Menampilkan seluruh array (secara object)
    var arrai = ['a',1,true];
    console.log(arrai);
        // 2. Menambah isi array 
    var menambahIsiArray = [];
        menambahIsiArray[0] = 'Nova';
        menambahIsiArray[1] = 'Sofyan';
        menambahIsiArray[2] = 'Tanjung';
            console.log(menambahIsiArray);  
            // Jika indexnya kita lompat jadi 4 dan index 3 tidak ada , maka akan bolong secara otomatis akan dibuatkan array jadi 5 dan isi array index 3 adalah UNDEFINED 

        // 3. Menghapus isi array secara Manual 
    var arai = ['sibolga','kota','ikan'];
    arai[1] = undefined;
    console.log(arai);
        
        // 4. Menampilkan Array satu persatu (looping(for))
    var looping = ['jakarta' , 'medan' , 'sumatra utara' , 'meja' , 'surabaya'];
        for(var i = 1; i <= looping.length; i++){
            console.log('Mahasiswa \nke-' + i  + ' : '+ looping[i]);
        }






                    // Method pada array
                    // .reverse(); =fungsinya untuk mengurutkan tapi dari akhir
    // 1. .length
    // 2. .join()
        var arr = ['roof' , 'chair' ,'street'];
        // 3. push => menambah atau mendorong ke array terakhir dari sebuah array bisa banyak elementnya
        arr.push('Dony' , 'Fitri');
        // 4. pop => menghilangkan element terakhir dari array , harus satu satu jika ingin menghapus tidak bisa sekaligus
        arr.pop();
        // 5. unshift => menambah atau mendorong ke array pertama dari sebuah array bisa banyak element nya 
        arr.unshift('awal' , 'akhir');
        // 6. shift => menghilangkan element pertama dari array , harus satu persatu
        arr.shift();
        arr.shift();    
        // 7. slice => mengiris array digunakan ketika ingin mengambil beberapa bagian pada array untuk menjadi array yang baru
                // Contekan slice(awal,akhir dikurangi -1)
        var baru = arr.slice(1,3);  
        console.log(baru.join('-'));              
                // Ctt: slice menghasilkan array Baru
        // 8. splice => menyambung atau menambal menyisipkan elemen di tengah tengah element array
                // Contekan splice(indexAwal, maudihapusBerapa, elementBaru1 , elemenBaru2)
        arr.splice(2,0, 'elemenBaru1' , 'elemenBaru2');
            // Menghapus element itu dimulai dari index yang dipilih dan dihitung dari index yang dipilih contoh
        arr.splice(2,1,);            

        // 9. forEach => digunakan untuk melakukan looping pada array tapi ini lebih keren dari pada for biasa , dengan menggunakan kedua method ini kita bisa melakukan sesuatu kepada element element yang ada didalam arraynya
            // Contoh cara pakainya ada dibawah 

        // 10. map =>  sama seperti forEach tapi map lebih baik karena , map ini mengembalikan array sedangkan forEach tidak
            // Contoh map
        var elementangka = [1,10,20,2,4,12,9];
            var angka2 = elementangka.map(function(e){
               return e * 2;
            });
            console.log(angka2.join('-'));

        // 11. sort => untuk mengurutkan isi arraynya dari yang tidak terurut jadi tersusun , perlu diperhatikan yang diurutkan adalah angka diawal dulu namun jika kita ingin paksa agar angka yang pali besar juga ter urut maka gunakan function dibawah ada contohnya
                // sort jika angka di awal terurut ada kesenjangan
                // contoh jika sort 1 nilai tidak ada kesenjangan
            var baru = [1,2,3,8,5,7,9];
            baru.sort();
                console.log(baru.join('-'));
                // contoh jika ada 2 nilai ada kesenjangan karena nilai pertama diambil
            var baru1 = [1,2,10,4,20,5,6];
            baru1.sort();
                console.log(baru1.join('-'));   
                // Contoh perbaikan jika ada 2 nilai ada kesenjangan dengan menggunakan function didalamnya
            var baru3 = baru1.slice(0,7);    
            baru3.sort(function(a , b){
                return a-b;
            });
                // fungsi a-b agar di jumlahkan urutannya atau nilai ke 2nya buka nilai pertama saja
                console.log(baru3.join('-'));


        // 12. filter => filter dan find digunakan untuk mencari element pada array hasilnya jika tidak ada maka array kosong jika ada index nya adalah 0 cara pakai :
            var angka0 = [1,2,10,5,20,3,6,8,4];
            var angkaindex = angka0.filter(function(x){
                return x > 5;
            });
            console.log(angkaindex.join('-'));
                    // Hasilnya ada banyak nilai tapi jika dengan find cuma 1 nilai itu pun tidak boleh .join()menggabungkan string
        // 13. find => find tidak menghasilkan array tapi mengembalikan 1 nilai sedangkan filter mengembalikan banyak nilai , join itu untuk menggabungkan array di find tidak jalan karena tidak menghasilkan array
        var angka00 = [1,2,5,20,3,6,8,4];
            var angkaindexx = angka00.find(function(x){
                return x > 5;
            });
            console.log(angkaindexx);


        

                    // Ctt: benar benar menghilangkan elemtnnya tidak mengubah jadi undefined
        console.log(arr.join());












                    // looping dengan for biasa 
var elementsaja = [10,2,1,4,5,6,7,8]; 
var elementdanIndex = ['motorcycle' , 'alfamidi' , 'car'];
        // for(var i = 0; i < angka.length; i++){
        //     console.log(angka[i]);
        // }

                    // looping dengan forEach
    // angka.forEach(function(e){
    //     console.log(e);
    // });                
            // atau
    var bonus = function(e){
        console.log(e)
    }            
    elementsaja.forEach(bonus);

    elementdanIndex.forEach(function(e,i){
        console.log(e,i+1);
        // Buat +1 jika mau dimulai dari angka 1
    });
            // dua 2 parameter , yang e untuk element dan i untuk indexnya
