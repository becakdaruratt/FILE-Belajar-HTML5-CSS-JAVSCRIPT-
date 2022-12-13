    class Fibonacci {
        constructor(n){
            this.n = n;
        }
        Output(){
            let result = [];
            let fn = 1; 
            let fn_1 = 1; //4
            let fn_2 = 0;
            for(let i = 0; i < this.n; i++){
                result.push(fn);
                fn = fn_1 + fn_2; //1 , 
                fn_2 = fn_1; //2 , 3
                fn_1 = fn; //  2 ,3 ,5 ,8 ,13
            }
            return result;
        }
    }
    const datl = new Fibonacci(7);
    console.log(datl.Output());