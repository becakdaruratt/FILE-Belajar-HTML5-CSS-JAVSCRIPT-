                    // DOOM Selection
                    // document.getElementById();
const judul = document.getElementById('judul');  
    // Otomatis judul ada nilai yang dikembalikan yaitu H1 beserta element didalamnya = karena mengembalikan Element = dan getElementById hanya bisa memanipulasi 1 elemnt saja atau node 

    judul.style.color = 'red'; 
    //  Cara manipulasinya , panggil variablenya - style - property CSS nya - nilai dan Otomatis dibuatkan Inline CSS , jadi CSSnya nambah di HTMLnya bukan di Tempat CSS nya

    judul.style.backgroundColor = 'orange';
    // di javaScript jangan tulis background-Color karena Js akan anggab itu operator mati matika - , tapi gunakanlah cemalCasing 

    judul.innerHTML = 'Sofyan Tanjung';
    // innerHTML digunakan untuk mengubah isi dari HTML (Textnya) , textnya berubah bukan karena HTMLnya tapi karena Javascriptnya



                     // getElementByTagName()
    const p = document.getElementsByTagName('p'); 
    // Mengembalikan HTMLCollection jadi dia bisa memanipulasi banyak tag <P> SEkaligus namun tidak untuk <text> = dan menyeleksi seluruh TAG <P> Termasuk walaupun P nya punya class dan dibungkus dengan array []

   
    // perlu diingat kita harus pakai []index array yang ingin kita pilih warnai , karena getElementByTagName() mengembalikan array , jadi gk bisa kalau cuma p.style.backgroundColor =''; harus di tambah dengan indexnya []

    for(let i = 0; i < p.length; i++){
        p[i].style.backgroundColor = 'lightblue';
    }
    // Menggunakan Looping untuk mewarnai semua indexnya
    let h1 = document.getElementsByTagName('h1')[0];
    h1.style.fontSize = '50px';
    // Walaupun elementnya hanya satu jika menggunakan getElementsByTagName() tetap harus menggunakan index karena dia mengembalikan HTMLCollection dan array []

    const p1 = document.getElementsByClassName('p1')[0];
    p1.style.color = 'red';
    // sama dengan Penjelasan getElementsByTagName() perbedaannya adalah , ClassName khusus class yang sama yang bisa ikut diubah walau pun 1 saja classnya akan tetap berubah sedangkan kalau Tag khusus element yang sama 

                    // querySelector()
    const p4 = document.querySelector('#b p');                    
    p4.style.color = 'green';
    p4.style.fontSize = '30px';
    // Cara mentarget element nya sama seperti saat kita menggunakan CSS dan querySelector() itu tidak perlu pakai index []

    const pEmpat = document.querySelector('section#b ul li:nth-child(2)');
    pEmpat.style.color = 'red';
    // dengan lebih spesifik CSS nya juga bisa di querySelector()

    const p44 = document.querySelector('p');
    p44.innerHTML = 'Ini diubah dari JavaScript';
    // Dengan querySeelctor(); juga bisa mengubah elementnya , hanya saja element yang bisa di ubah hanya 1 karena memang , querySelector hanya mengembalikan 1 element saja 

    const pBiasa = document.querySelectorAll('p')[2];
    pBiasa.style.backgroundColor = '#333';
    pBiasa.style.color = 'white';
    // querySelectorAll() Ini sebenarnya sama dengan kita menggunakan getElementByTagName() sama sama memiliki array beda nya , ini adalah Nodelist sedangkan ByTagName adalah HTMLCollection

    const Perulangan = document.querySelectorAll('p');
    for (let o = 0; o < Perulangan.length; o++){
        Perulangan[o].style.backgroundColor = 'lightblue';
  
    }


                    // Cara mempersempit scope pencarian biasanya kita gunakan document. tapi sekarang kita perkecil scope pencariananya
                    //  caranya adalah seperti di bawah ini 
        const sectionA = document.getElementById('a');            
    const persempitLocalScope = sectionA.querySelectorAll('p')[1];                    
    persempitLocalScope.style.color = 'pink';
