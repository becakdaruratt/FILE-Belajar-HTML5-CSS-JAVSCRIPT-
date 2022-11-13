function test(){
    var a = 10;
    var b = 24;
    
    console.log('a awal =' , a);
    console.log('b awal =' , b);

        a -= b; 
        b += a;
        a = b - a;


        // Coding
        // gimana cara nya supaya nilai b jadi nilai a
        // tanpa menambah variable baru

        console.log('a final =', a);
        console.log('b final =', b);
}
var testing = test();
