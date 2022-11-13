    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = '<em>CRF</em>';
            // Dengan Method InnerHTML kita bisa manipulasi HTML tag didalamnya juga cuma bedanya kita manipulasi dengan menggunakan JavaScript

    const sectionA = document.getElementById('a');        
    sectionA.innerHTML = 'Hello World';
            // Susunan Paragraph yang sudah dibuat sudah runtuh karena kita Telah manipulas agar sectionA nya hanya punya Hello World ,dan sebenarnya kita bisa bangun kembali tinggal memasukkan seperti saat kita membangunnya di HTML tapi bedanya ini melaly javaScript
    sectionA.innerHTML = '<div><p>Serigala</p><p>Paragraph</p></div>';            
    sectionA.style.color = 'red';
    sectionA.style.fontSize = '30px';
            // Barusan kita telah sedikit Memanipulasi Node dengan method innerHTML

    h1.style.backgroundColor = 'salmon';
    
    
    const setAtribute = document.querySelector('section#b ul li:nth-child(3)');
    setAtribute.setAttribute('class' , 'ribut');
        // setAtribute adalah cara Untuk membuat Atribut baru atau memanipulasi
    
    const diva = document.getElementById('container');
    let oke = diva.getAttribute('id');
    console.log(oke);
        // Cara untuk mendapatkan atua melihat Attribut

    const a = document.querySelector('div#container');    
    a.removeAttribute('id');
        // Cara untuk menghapus Attributenya

            // Class list Mengelola class
     // add
    const add = document.querySelector('section#b ul li:nth-child(2)');
    add.classList.add('p2','label');
    
    

