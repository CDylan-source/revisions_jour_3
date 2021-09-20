const voir = document.querySelectorAll('button')[0];
const ajouter = document.querySelectorAll('button')[1];
const form = document.querySelector('form');
const nom = document.querySelectorAll('input')[0];
const prenom = document.querySelectorAll('input')[1];
const select = document.querySelector('select');
const ul_1 = document.querySelectorAll('ul')[0];
const ul_2 = document.querySelectorAll('ul')[1];
const regex = new RegExp('^([a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]{1,})([- ][a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]{1,})?$');
const h2 = document.querySelector('h2');
const select2 = document.querySelectorAll('select')[1];
const modif = document.getElementById('modif');
const suppr = document.getElementById('suppr');
const form2 = document.querySelectorAll('form')[1];
let nom2 = document.querySelector('form:nth-of-type(2) input:nth-child(1)');
let prenom2 = document.querySelector('form:nth-of-type(2) input:nth-child(2)');
const h3 = document.querySelector('h3');
const regenre = new RegExp('^[a-zéàùêâûôèîçäëïüöA-ZÉÀÙÊÂÛÔÎÈÇÄËÏÜÖ]{1,}$');
const ul_3 = document.querySelectorAll('ul')[2];

function loadData() {
    fetch('load.php')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            for (i = 0; i < response.length; i++) {
                let create = document.createElement('option');
                let content = document.createTextNode(response[i]['signes'].toUpperCase());
                create.appendChild(content);
                select.insertBefore(create, null);
                let create2 = document.createElement('option');
                let content2 = document.createTextNode(response[i]['signes'].toUpperCase());
                create2.appendChild(content2);
                select2.insertBefore(create2, null);
            }

        })
};

function loadData2() {

    fetch('load2.php')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            for (i = 0; i < response.length; i++) {
                let create = document.createElement('input');
                create.value = `response${[i]}['genre']`;
                create.setAttribute('type', 'checkbox');
                let create_l = document.createElement('label');
                let content = document.createTextNode(response[i]['genre']);
                create_l.appendChild(content);
                let create_li = document.createElement('li');
                let li = ul_2.insertBefore(create_li, null);
                li.insertBefore(create_l, null);
                li.insertBefore(create, null);

                let create2 = document.createElement('input');
                create2.value = `response${[i]}['genre']`;
                create2.setAttribute('type', 'checkbox');
                let create_l2 = document.createElement('label');
                let content2 = document.createTextNode(response[i]['genre']);
                create_l2.appendChild(content2);
                let create_li2 = document.createElement('li');
                let li2 = ul_3.insertBefore(create_li2, null);
                li2.insertBefore(create_l2, null);
                li2.insertBefore(create2, null)
            }

        })

};

window.addEventListener('load', function () { 
    loadData();
    loadData2();
 });

function voirfunct() {


    ul_1.innerHTML = "";
    fetch('voir.php')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            if (response.length > 0) {
                for (i = 0; i < response.length; i++) {
                    let create = document.createElement('li');
                    let create_p1 = document.createElement('p');
                    let create_p2 = document.createElement('p');
                    let create_p3 = document.createElement('p');
                    let create_p4 = document.createElement('p');
                    let content_p1 = document.createTextNode(response[i]['nom']);
                    let content_p2 = document.createTextNode(response[i]['prenom']);
                    let content_p3 = document.createTextNode(response[i]['genre']);
                    let content_p4 = document.createTextNode(response[i]['signes']);
                    create_p1.appendChild(content_p1);
                    create_p2.appendChild(content_p2);
                    create_p3.appendChild(content_p3);
                    create_p4.appendChild(content_p4);
                    let li = ul_1.insertBefore(create, null);
                    li.insertBefore(create_p1, null);
                    li.insertBefore(create_p2, null);
                    li.insertBefore(create_p3, null);
                    li.insertBefore(create_p4, null);
                    li.addEventListener('click', function () {
                        let form2 = document.querySelectorAll('form')[1];
                        form2.classList = "actif";

                        let nom_val2 = this.children[0].textContent;
                        let prenom_val2 = this.children[1].textContent;
                        let check2 = this.children[2].textContent;
                        let selected2 = this.children[3].textContent;
                        // let selected2 = select2.options[select2.selectedIndex].text.toLowerCase();
                        nom2.placeholder = this.children[0].textContent;
                        prenom2.placeholder = this.children[1].textContent;
                        let checkboxes = document.querySelectorAll('form:nth-of-type(2) input[type="checkbox"]');
                        for (j = 0; j < checkboxes.length; j++) {
                            if (checkboxes[j].value == check2) {
                                checkboxes[j].checked = true;

                            } else {
                                checkboxes[j].checked = false;
                            }
                        }
                        let selection = document.querySelectorAll('form:nth-of-type(2) option');
                        for (k = 0; k < selection.length; k++) {
                            if (selection[k].text.toLowerCase() == selected2) {
                                select2.selectedIndex = k;
                            }
                        }
                        modif.dataset.val = `${nom_val2}-${prenom_val2}-${check2}-${selected2}`;
                        suppr.dataset.val = `${nom_val2}-${prenom_val2}-${check2}-${selected2}`;
                    })
                }


            }
        })
}

voir.addEventListener('click', function () {
    voirfunct();
});

ajouter.addEventListener('click', function () {
    form.classList = "actif";
});

let check = document.querySelectorAll('form:nth-of-type(1) input[type="checkbox"]');
for (i = 0; i < check.length; i++) {
    check[i].addEventListener('change', function () {
        for (j = 0; j < check.length; j++) {
            check[j].checked = false;
        }
        this.checked = true;
    });
};

let check2 = document.querySelectorAll('form:nth-of-type(2) input[type="checkbox"]');
for (i = 0; i < check.length; i++) {
    check2[i].addEventListener('change', function () {
        for (j = 0; j < check2.length; j++) {
            check2[j].checked = false;
        }
        this.checked = true;
    });
};

function verif(value) {
    if (regex.test(value)) {
        return true;
    } else {
        return false;
    }
};

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let nom_val = nom.value;
    let prenom_val = prenom.value;
    h2.innerHTML = "";
    let checked = document.querySelector('form:nth-of-type(1) input[type="checkbox"]:checked').value;


    let selected = select.options[select.selectedIndex].text.toLowerCase();
    let verify_nom = verif(nom_val);
    let verify_pre = verif(prenom_val);
    if (!verify_nom && !verify_pre) {
        h2.innerHTML = "Veuillez rentrez un nom et un prénom correct svp&nbsp!";
    } else {
        fetch(`add.php?nom=${nom_val}&prenom=${prenom_val}&genre=${checked}&signe=${selected}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                if (response == true) {
                    h2.innerHTML = "Utilisateur-trice ajouté-e&nbsp!";
                    voirfunct();
                }
            })
    }

});

form2.addEventListener('submit', function (e) {
    e.preventDefault();
})

modif.addEventListener('click', function (e) {
    e.preventDefault();
    h3.innerHTML = "";
    let data = this.dataset.val;
    let selected = select2.options[select2.selectedIndex].text.toLowerCase();
    let name = nom2.value;
    let firstname = prenom2.value;
    let checked = document.querySelector('form:nth-of-type(2) input[type="checkbox"]:checked').value;
    if (name == "") {
        name = nom2.placeholder;
    }
    if (firstname == "") {
        firstname = prenom2.placeholder;
    }
    if (!verif(name) || !verif(firstname)) {
        h3.innerHTML = "Veuillez rentrer un nom et un prénom correct svp&nbsp!";
    } else {
        fetch(`modif.php?data=${data}&name=${name}&firstname=${firstname}&genre=${checked}&signe=${selected}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                if (response == true) {
                    h3.innerHTML = "Modification-s faite-s&nbsp!";
                    form2.classList = "";
                    voirfunct();
                }
            })
    }

});

suppr.addEventListener('click', function (e) {
    e.preventDefault();
    let data = this.dataset.val;
    fetch(`suppr.php?data=${data}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            if (response == true) {
                h3.innerHTML = "Suppression faite&nbsp!";
                form2.classList = "";
                voirfunct();
            }
        })
});

const genre_b = document.getElementById('genre');
const signe_b = document.getElementById('signe');
const h5 = document.querySelector('h5');
genre_b.addEventListener('click', function (e) {
    e.preventDefault();
    h5.innerHTML = "";
    let input = document.getElementById('input_f_1');
    if (!regenre.test(input.value)) {
        h5.innerHTML = "Rentrez un genre correct svp&nbsp!";
    } else {
        fetch(`genre.php?genre=${input.value}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                if (response == true) {
                    h5.innerHTML = "Ajout du genre&nbsp!";
                    voirfunct();
                }
            })
    }
});

signe_b.addEventListener('click', function (e) {
    e.preventDefault();
    h5.innerHTML = "";
    let input = document.getElementById('input_f_2');
    if (!regenre.test(input.value)) {
        h5.innerHTML = "Rentrez un signe correct svp&nbsp!";
    } else {
        fetch(`signe.php?signe=${input.value}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                if (response == true) {
                    h5.innerHTML = "Ajout du signe&nbsp!";
                    voirfunct();
                }
            })
    }
});