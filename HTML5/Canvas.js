    const mycanvas = document.getElementById('mycanvas');

    mycanvas.width = window.innerWidth;
    mycanvas.height = window.innerHeight;

    const c = mycanvas.getContext('2d');
        c.fillRect(25,25,100,100); 
        // Kita mulainya dari 25 width dan height 25 juga , lalu lebar panjangnya 100 width nya dan tingginya juga 100 dengan asumsi canvasnya memenuhi satu layar

        // Jika ingin lebih fleksibel lagi -> Untuk Kotak Rectangle 
            c.fillStyle = 'pink';
            // Isi warnanya mau apa
            // Huruf S nya harus besar Style
            c.strokeStyle = '#33333';
            // Mau ada garis bordernya atau tidak
            c.lineWidth = 5;
            // Tebal Bordernya mau berapa

                // Sehingga tidak perlu kita langsung fillReact karena kita tulis satu satu
        c.rect(50,50,300,400);
            // Lebarnya 300 , dan tingginya 400
            c.fill();
            // Ngacunya ke Isi warnanya
            c.stroke();
            // Ngacunya ke garibordernya


        // UNTUK lingkaran atau circle
        c.fillStyle = 'lightblue';
        // Warnanya mau apa
        c.strokeStyle = '#000';
        // Garisnya Mau apa
        c.lineWidth = 2;
        // Tebalnya Berapa

        c.arc(300,300,150,0,2 * Math.PI);
        // Mau mulai dari mana sumbu x dan sumbu y , lalu radiusnya berapa , sudut awalnya mau berapa , dan sudut akhirnya mau berapa
        c.fill();
        c.stroke();


