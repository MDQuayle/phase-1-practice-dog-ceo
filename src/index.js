console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(json => {
    const dogPic = document.querySelector('div#dog-image-container')
    const img0 = document.createElement('img')
    img0.src =(json.message[0]);
    dogPic.appendChild(img0);
    const img1 = document.createElement('img')
    img1.src =(json.message[1]);
    dogPic.appendChild(img1);
    const img2 = document.createElement('img')
    img2.src =(json.message[2]);
    dogPic.appendChild(img2);
    const img3 = document.createElement('img')
    img3.src =(json.message[3]);
    dogPic.appendChild(img3);
})
fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(json => {
    Object.entries(json.message).forEach((entry) => {
        const [key, value] = entry;;
        const dogList = document.querySelector('ul#dog-breeds')
        const breed = document.createElement('li')
        const breedDrop = document.getElementById('breed-dropdown');
        dogList.appendChild(breed)
        breed.innerText = key + ": " + value;
        breed.addEventListener('click', () => breed.style.fontWeight = '700')
        

})})
