const myElement = document.querySelector('#root');

const createElements = () => {
    return `<h1>Visszajelzés</h1>
    <input type="text" placeholder=Tárgy>
    <textarea name="" id="">Megjegyzés</textarea>
    <input type="checkbox" name="" id="">
    <input type="checkbox" name="" id="">
    <button>Mentés</button>
    `; 
};

document.addEventListener('DOMContentLoaded', function () {
    const myElement = document.querySelector('#root');
        myElement.insertAdjacentHTML("beforeend", createElements());
});