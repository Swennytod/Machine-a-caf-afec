 let hi = ""
 hi = prompt("Bonjour je suis la machine a café , comment tu t'appel ?")
 hi = document.getElementById("café").innerHTML = `${hi}`


let water = "";
let nbCofee = "";
let time = "";
let image = document.getElementById('image');
let resultat = document.getElementById('resultat') 
resultat.innerHTML = `<h3>Bonjour <span class="mandarine">${hi}</span>, je suis Nounette ta machine intéligente !</h3>`
const start = document.getElementById('start')

start.addEventListener("click",(event) => {
    water = parseInt(prompt("Combien de litres d'eau voulez-vous mettre ?"))
         if (water > 1) {
        image.setAttribute('src', 'nohappycafe.png');
        resultat.innerHTML = `<h3>MAIS NOOON <span class="mandarine">${hi}</span>, tu a innondée la machine a café !</h3><p>tu a mis ${water}L d'eau, il y' en a partout.</p>`
        start.innerText = "Recommencer";
        }else {
            nbCofee = parseInt(prompt("Nombre de cuillères à café ?"))
            if(nbCofee > 10) {
                image.setAttribute('src', 'nohappycafe.png');
                resultat.innerHTML = `<h3>OULAAaaa <span class="mandarine">${hi}</span>, c'est le volcan ici !</h3><p>tu a mis ${nbCofee}cuillères à café , il y' en a partout.</p>` 
                start.innerText = "Recommencer";
            } else {
                time = parseInt(prompt('Temps de chauffe de la machine en secondes ?'))
                if(time > 60){
                    image.setAttribute('src', 'nohappycafe.png');
                    resultat.innerHTML = `<h3>ATTENTION ! <span class="mandarine">${hi}</span>, tu veux tous faire cramé !</h3><p>tu a mis ${time}seconde , c'est trop !</p>`
                    start.innerText = "Recommencer";
                }else {
                    let propre = confirm("Avez-vous nettoyé la machine à café ? Cliquez sur OK pour Oui, Annuler pour Non.");

                    if (propre) {
                        image.setAttribute('src', 'happycafe.png');
                        resultat.innerHTML = `<h3>Votre café est pret !</h3><p>à bientot <span class="mandarine">${hi}</span>.</p>`
                        start.innerText = "Recommencer"; 
                    } else {
                        image.setAttribute('src', 'nohappycafe.png');
                        resultat.innerHTML = `<h3>TU ES DEGUEULASSE <span class="mandarine">${hi}</span> !!!</h3>`
                        start.innerText = "Recommencer"; 
                    }
                        }
                    }
                }      
                });
