    // Kita punya class yang merepresentasikan sebuah blueprint atau cetakan ini ada di javascript modern jadi kita bisa melakukan pewarisan gitu 
class BilanganPrima {
    result = [];
    constructor (n){
        // Constructor ini akan di cetak saat pertama kali di panggil classnya
        this.n = n;
    }
    prima(){    
        // prima adalah method cuma akan di eksekusi saat di panggil 
        for(let i = 2; i < this.n; i++){
            let flag = 0;
            for(let j = 2; j < i; j++){
                if(i % j == 0){
                    flag = 1;
                    break;
                }
            }
            if (i > 1 && flag == 0){
                this.result.push(i);
            }
        }
        return this.result;
    }
}
const data = new BilanganPrima(10);
// argument ini akan dikirim ke constructor sebuah method yang akan di eksekusi langsung
console.log(data.prima());