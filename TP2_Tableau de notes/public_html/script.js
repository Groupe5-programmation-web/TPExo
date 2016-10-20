/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.addEventListener("DOMContentLoaded", function (e) {

    var tableau = document.getElementById("idTable");

//    // Création de la première ligne (indice 0)
//   var ligne = tableau.insertRow(1);
//    // Insertion des cellules de la ligne
//   var  cell = ligne.insertCell(0);
//    cell.innerHTML = "RESEAU";
//    cell = ligne.insertCell(1);
//    cell.innerHTML = "12";
//    cell = ligne.insertCell(2);




    // fin de la création de ligne


//    // Création de la première ligne (indice 1)
//    ligne = tableau.insertRow(2);
//    // Insertion des cellules de la ligne
//    cell = ligne.insertCell(0);
//    cell.innerHTML = "SI";
//    cell = ligne.insertCell(1);
//    cell.innerHTML = "13";
//    cell = ligne.insertCell(2);
//    cell.appendChild(img1);
//    cell.appendChild(img2);
//    // fin de la création de ligne


//    // Création de la première ligne (indice 2)
//    ligne = tableau.insertRow(3);
//    // Insertion des cellules de la ligne
//    cell = ligne.insertCell(0);
//    cell.innerHTML = "SE";
//    cell = ligne.insertCell(1);
//    cell.innerHTML = "14";
//    cell = ligne.insertCell(2);
//    cell.innerHTML = "";
//    cell.setAttribute("id", "id3");
//    // fin de la création de ligne
    // Création de la dernière ligne (indice 2)

    var ligne = tableau.insertRow(-1);
    // Insertion des cellules de la ligne
    var cell = ligne.insertCell(0);
    cell.colSpan = 2;
    cell.innerHTML = "MOYENNE";
    cell = ligne.insertCell(1);
    cell.innerHTML = "";

    ajout("RESEAU", "12");
    ajout("SI", "13");
    ajout("SE", "14");


    // fin de la création de ligne

    function ajout(matiere, note) {
        var img1 = new Image();
        img1.src = 'images/modify.png';
        img1.setAttribute("alt", "Modifier");
        img1.setAttribute("onclick", "modifier(this.parentNode.parentNode.rowIndex)");

        var img2 = new Image();
        img2.src = 'images/del.png';
        img2.setAttribute("alt", "Supprimer");
        img2.setAttribute("class","image");
        img2.setAttribute("onclick", "supprimer(this.parentNode.parentNode)");
        nb = tableau.rows.length;
        // Création de la  ligne 
        li = tableau.insertRow(nb - 1);
        // Insertion des cellules de la ligne
        cel = li.insertCell(0);
        cel.innerHTML = matiere;
        cel = li.insertCell(1);
        cel.innerHTML = note;
        cel = li.insertCell(2);
        cel.appendChild(img1);
        cel.appendChild(img2);
    }


    window.ajouter = function () {
        matiere = "";
        note = "";

        // Lecture du nom de la nouvelle matière
        // en vérifiant qu'il ne soit pas vide
        do {
            matiere = prompt("Entrer le nom de la nouvelle matière");
        } while (!matiere);

        //Lecture de la note de la matière
        // en vérifiant que c'est bien une note
        do {
            note = prompt("Entrer la note de la nouvelle matière");
        } while ((!note) || isNaN(note) || (parseFloat(note) < 0) || (parseFloat(note) > 20));

        ajout(matiere, note);
        // fin de la création de ligne
        calculer();

    }

    window.calculer = function () {

        nb = tableau.rows.length;
        NB = nb;
        somme = 0;
        moyenne = 0;
        while (nb - 2 >= 1) {

            somme += parseFloat(tableau.rows[nb - 2].cells[1].innerHTML);
            nb--;
        }
        moyenne = somme / (NB - 2);
        tableau.rows[NB - 1].cells[1].innerHTML = moyenne.toFixed(2);
    }

    window.supprimer = function (i) {
        if(confirm("Cliquez sur OK pour confirmer la suppression de la note de "+i.cells[0].innerHTML)){
            tableau.deleteRow(i.rowIndex);
            calculer();
        }
    }

    window.modifier = function (i) {
        matiere = "";
        note = "";

        // Lecture du nom de la nouvelle matière
        // en vérifiant qu'il ne soit pas vide
        do {
            matiere = prompt("Entrer le nouveau nom de la matière");
        } while (!matiere);

        //Lecture de la note de la matière
        // en vérifiant que c'est bien une note
        do {
            note = prompt("Entrer la nouvelle note ");
        } while ((!note) || isNaN(note) || (parseFloat(note) < 0) || (parseFloat(note) > 20));

        // Insertion des cellules de la ligne
        cell = tableau.rows[i].cells[0];
        cell.innerHTML = matiere;
        cell = tableau.rows[i].cells[1];
        cell.innerHTML = note;
        // fin de la création de ligne
        calculer();
    }
    calculer();
});
