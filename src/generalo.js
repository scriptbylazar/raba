const gomb = document.querySelector('button')
const hibakijelzo = document.getElementById('hiba')
const szovegdoboz = document.getElementById('szoveg')
const mennyisegdoboz = document.getElementById('mennyiseg')
const rejtettkijelzo = document.getElementById('rejtettkijelzo');
const ideg = document.getElementById('kijelzoo')

var megadottmennyiseg = 0

gomb.addEventListener('click', function() {
    let megadottszoveg = szovegdoboz.value
    let rejtett = document.getElementById('rejtett')
    megadottmennyiseg = parseInt(mennyisegdoboz.value)
    console.log(megadottmennyiseg)
    if (megadottszoveg != '') {
        if (megadottmennyiseg != 0) {
            megadottmennyiseg++
            rejtettkijelzo.innerHTML = ''
            rejtett.value = ''
            for (let i = 1; i < megadottmennyiseg; i++) {
                rejtettkijelzo.innerHTML += ` ${i} ${megadottszoveg}`
            }
            masolas()
        } else { alert('Kérlek adj meg egy mennyiséget!') }
    } else { alert('Kérlek adj meg egy szöveget!') }
});


function masolas() {
    let rejtett = document.getElementById('rejtett')
    rejtett.style.display = 'block'
    rejtett.value = rejtettkijelzo.innerHTML
    rejtett.select();
    rejtett.setSelectionRange(0, 99999)
    document.execCommand("copy");
    setInterval(() => {
        rejtett.style.display = 'none'
    }, 0);
    setTimeout(() => {
        alert('Kimásolva!')
    }, 150);
}