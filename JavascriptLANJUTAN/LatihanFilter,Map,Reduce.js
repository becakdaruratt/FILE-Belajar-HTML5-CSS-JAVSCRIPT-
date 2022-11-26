        // Langkah-langkah atau algoritma yang akan kita gunakan

// 1. ambil semua element vidio
const data =  Array.from(document.querySelectorAll('[data-duration]'));

// 2. Pilih hanya yang 'Javascript Lanjutan'
let jsLanjut = data.filter(vidio => vidio.textContent.includes('JAVASCRIPT LANJUTAN'))


// 3. ambil durasi masing masing vidio 
        // Kita pakai method chaining tinggal .
    .map(item => item.dataset.duration)
// 4. Ubah durasi menjadi int, ubah menit menjadi detik
    .map(waktu => {
        // kita ubah 10:30 -> [10,30] = namanya di .split 
        let parts = waktu.split(':').map(part => parseInt(part));
            // Kita coba hialngkan : dengan menggunakan method .split();
        return (parts[0] * 60) + parts[1];
    })
// 5. jumlahkan semua detik
    .reduce((total, detik) => total + detik);
// 6. ubah formatnya jadi jam menit detik 
        // 1 Jam = 60 Menit, 1 Menit = 60 Detik, 1 Jam = 3600 Detik
        // Kita bulatkan hasilnya
    let jam = Math.floor(jsLanjut / 3600);
            // Mengambil sisa dari pembagiannya dan kita kalikan artinya kita membuatnya jadi detik
     jsLanjut -= jam * 3600;
        // lalu setelah jadi detik kita bagi dengan 60 disini kita buat jadi 1 menit atau 60 detik
     const menit = Math.floor(jsLanjut / 60);
        // Mendapatkan detiknya
        const detik = jsLanjut - menit * 60;
// 7. simpan di DOOM 
            // Total Durasi
    const pDurasi = document.querySelector('.total-durasi');
    pDurasi.textContent = `${jam} Jam , ${menit} Menit , ${detik} Detik.`;
    
    // Jumlah vidio 
    const jmlhVidio = data.filter(vidio => vidio.textContent.includes('JAVASCRIPT LANJUTAN')).length;
    const jVidio = document.querySelector('.jumlah-video');
    jVidio.textContent = `${jmlhVidio} Vidio.`
    
    console.log(jmlhVidio);
