function test(){
    var a = 75;
    var b = 33;
    
    console.log('a awal =' , a);
    console.log('b awal =' , b);

        // a -= b; 
        // b += a;
        // a = b - a; => Cara dari bang dea 

        [a,b] = [b,a]; => cara jitu ini disebut Destructuring variable atau assignment

        // Coding
        // gimana cara nya supaya nilai b jadi nilai a
        // tanpa menambah variable baru

        console.log('a final =', a);
        console.log('b final =', b);
}
var testing = test();
