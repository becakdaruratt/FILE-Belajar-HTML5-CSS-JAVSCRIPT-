            // Doom Manipulation part 2
        // Buat element baru dan cara penulisannya seperti Node Element 
    const pBaru = document.createElement('p');
        // Buat text Baru dan cara penulisannya seperti "Text"
    const teksPBaru = document.createTextNode('Paragraph Baru');
            // Perlu di ingat kedua Node tersebut , elemetn dan "text" masih terpisah gk ada hubungan nya karena belum di rangkai (disatukan)
        // Sekarang kita akan menyimpan "text" kedalam Paragraph atau elementnya dirangkai istilah nya , anggab saja elementnya sebagai vas bungannya dan "text" sebagai bunga caranya dengan menggunakan vasbunganya.appenChild('bunganya');
    pBaru.appendChild(teksPBaru);
        // Hasil nya belum tampak karena baru kita gabungkan dan kita belum menempatkan di tempat yang kita inginkan
        // simpan pBaru diakhir section A
                // Penempatan vas bunga yang sudah di gabungkan
    const sectionA = document.getElementById('a');                
    sectionA.appendChild(pBaru);


            // contoh lain cara penggunaannya
    const h1 = document.createElement('h1');            
    const texth1 = document.createTextNode('h1 Ini di buatkan di Javascript');

    h1.appendChild(texth1);
    const pemilihan = document.querySelector('section#b ul li:nth-child(3)');
    pemilihan.appendChild(h1);

                    // Itu jika menggunakan appendChild()
                    
    const liBaru = document.createElement('li');               
    const textliBaru = document.createTextNode('item Baru');
    liBaru.appendChild(textliBaru);
                // Untuk menggunakan insertBefore(); kita harus tangkap dulu parent nya , baru kita ingin simpan sebelum element apa
    const li = document.querySelector('section#b ul');
    const li2 = li.querySelector('li:nth-child(2)');
    li.insertBefore(liBaru,li2);
        
                // removeChild() = jika kita ingin meremove ada 2 hal 1. parentnya siapa 2.element yang mau kita removenya
    const a = document.getElementById('a');
    const linkNya = document.getElementsByTagName('a')[0];
            // Cara meremovenya kita rangkai juga  panggil parentnya lalu node yang ingin Kita Remove apa
    a.removeChild(linkNya);   
    
    
                // replaceChild(); ada 2 hal juga sama dengan removeChild();      1. Tangkap parent nya terlebih dahulu 2. Tangkap Element yang mau diganti 3. rangkai element baru atau createEelement() 4. buat tulisan Elementnya atau createTextNode(); 5. gabungkan element dengan "text" 6. Letakkan atau tempelkan ke tempat yang sudah di target , dibawah adalah cara pembuatannya

    const induk = document.getElementById('b');                
    const elementnya = induk.getElementsByTagName('p')[0];

        const h2 = document.createElement('h2');
        const texth2 = document.createTextNode('Judul Baru');
        h2.appendChild(texth2);
                // Setelah kita rangkai baru kita tangkap parentnya replaceChild(); menerima 2 parameter 1. node barunya 2. node yang di replace atua diganti dibawah cara menggunakannya
    induk.replaceChild(h2,elementnya);                


    // yang baru di manipulation
    pBaru.style.backgroundColor = 'lightblue';
    h2.style.backgroundColor = 'lightblue';
    h1.style.backgroundColor = 'lightblue';



            