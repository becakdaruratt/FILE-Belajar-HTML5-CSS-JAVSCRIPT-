    // 1. HTML fragments (Menampilkan Element HTML di Javascript)

    const mhs = {
        nama: 'Sandhika Galih',
        umur:  33,
        nrp: '043040023',
        email: 'sandhikagalih@unpas.ac.id'
    };
        // Kita mengambil data dari object untuk ditampilkan
    const el = `<div class="mhs">
        <h2>${mhs.nama}</h2>
        <span class="nrp">${mhs.nrp}</span>
    </div>`;

        // 2. Looping bagaiamana mengulang data yang didapatkan dari Array 
    const mhs1 = [
        {
            nama: 'Sandhika Galih',
            email: 'sandhikagalih@unpas.ac.id'
        },
        {
            nama: 'Doddy Ferdiansyah',
            email: 'doddy@unpas.ac.id'
        },
        {
            nama: 'Erik',
            email: 'erik@unpas.ac.id'
        },
    ];
            // Isi dari arraynya adalah object dan dibawah contoh jika menggunakan looping
    const eli = `<div class="mhs">
        ${mhs1.map(m => `<ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
        </ul>`).join('')}
    </div>`;
        // kita gunakan method .join('') string kosong agar koma nya hilang


            // Kita akan coba tampilkan di Browser dengan DOOM
    // Perlu di ingat element HTML nya tidak akan ikut tampil ini data mhs => kita ambil datanya dari object


    // 3. Conditionals (Kondisional)
    // sebetulnya kita bisa pake ternary kondisional 
    const lagu = {
        judul: 'Kau adalah',
        penyanyi: 'Isyana Sarasvat',
        feat: 'Rayi Putra'
    }

    const elo = `<div class="lagu">
     <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
     </ul>
    </div>`;

    // 4. Nested
    // HTML Fragments Bersarang atau Nested
    const mahasiswa = {
        nama: 'Sofyan Tanjung',
        semseter: 5,
        matakuliah: [
            'Rekayasa Web',
            'Analisis dan perancangan sistem Informasi',
            'Pemrograman Sistem Interaktif',
            'Perancangan Sistem Berorientasi Object'
        ]
    }
            // Kita akan tampilkan semua data ini kedalam HTML Fragments
    function cetakMataKuliah(matakuliah){
        return `
            <ol>
                ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
            </ol>
        `;
    }
        // Foreach Tidak mengembalikn array

    const tampil = `<div class="mhs">
        <h2>${mahasiswa.nama}</h2>
        <span class="semester">Semester : ${mahasiswa.semseter}</span>
        <h4>Mata Kuliah :</h4>
        ${cetakMataKuliah(mahasiswa.matakuliah)}
    </div>`

    document.body.innerHTML = tampil ;



