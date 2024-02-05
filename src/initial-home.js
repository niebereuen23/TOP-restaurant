export default function() {
    const content = document.querySelector('#content');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const div2 = document.createElement('div');
    const p = document.createElement('p');

    imgDiv.appendChild(img);
    img.src = '../src/assets/images/DALLE-Dulce-Oasis.webp';
    div2.textContent = 'Dulce Oasis';
    p.textContent = 'Welcome to the a cringy world of delicious food prepared keeping the highest standards for cleanness and freshness';

    return content.append(imgDiv, div2, p);
}
