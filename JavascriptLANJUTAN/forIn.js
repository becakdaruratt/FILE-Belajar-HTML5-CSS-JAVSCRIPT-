        // for..In pada Object

    const forIn = {
        nama: 'Sofyan Tanjung',
        umur: 21,
        email: 'pwdarurat@gmail.com'
    }

            // Jelas error karena for OF tidak bisa melooping property object
    // for(const m of forIn){
    //     console.log(m);
    // }
                // Kita melooping isinya dengan for In (property)
    for(const m in forIn){
        console.log(m);
    }
                // Jika kita ingin melooping beserta indexnya
    for(const l in forIn){
        console.log(forIn[l]);
            // Harus dipanggil dulu objectnya lalu indexnya l
    }
