const container = document.querySelectorAll('.container');
const besar = document.querySelector('.object');
const thumbs = document.querySelectorAll('.gambar');
container.forEach( e =>{
    e.addEventListener('click',iven => {
        if(iven.target.className == 'gambar'){
            besar.src = iven.target.src;
            besar.classList.add('fade');
            setTimeout(() => {
                besar.classList.remove('fade');
            }, 500);
        }   
        thumbs.forEach(asli =>{
            asli.className = 'gambar';
        });
        iven.target.classList.add('active');
        iven.preventDefault();
        iven.stopPropagation();
    });
});