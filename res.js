const subs = {
    'MAT': {
        'Link': 'https://1drv.ms/f/s!Ap0RqjyeMmhGbJNpj2Ra01QKk_M?e=ZcIO8B',
    },
    'CHY': {
        'Link': 'https://1drv.ms/f/s!Ap0RqjyeMmhGgRA81mU1cPWHAR79?e=1uO0Pl',
    },
    'CSE': {
        'Link': 'https://1drv.ms/f/s!Ap0RqjyeMmhGgWZhQmT91TneScPF?e=qHafut',
    },
    'EEE': {
        'Link': 'https://1drv.ms/f/s!Ap0RqjyeMmhGgVBdJRmNeWVBGOb6?e=dp9sVC',
    },
    'PHY': {
        'Link': 'https://1drv.ms/f/s!Ap0RqjyeMmhGgS65jyymbE9lPlUn?e=1AuPVb',
    },
    'ENG': {
        'Link': 'https://1drv.ms/f/s!Ap0RqjyeMmhGgXT830XVnE6OA1GY?e=ddBk2M',
    },
    'HUM': {
        'Link': 'https://1drv.ms/f/s!Ap0RqjyeMmhGghMJdtJXifj4E4ko?e=E5ZXIy',
    },
    'CSA': {
        'Link': 'https://1drv.ms/f/s!Ap0RqjyeMmhGgXuirW1poPi9JDER?e=Lx8PV7',
    },

};

var originalDropdownOptions1 = Array.from(document.getElementById("dropdownres").options);

function filterDropdownres() {
    var subjectinput = document.getElementById("subjectinput").value.toLowerCase();
    var dropdownres = document.getElementById("dropdownres");

    dropdownres.innerHTML = "";

    var filteredOptions1 = originalDropdownOptions1.filter(function (option) {
        return option.text.toLowerCase().includes(subjectinput);
    });

    for (var i = 0; i < filteredOptions1.length; i++) {
        dropdownres.appendChild(filteredOptions1[i]);
    }
}

document.getElementById("submitres").addEventListener('click', function () {
    let dropdownr = document.getElementById("dropdownres");
    let selectedres = dropdownr.value;

    if (selectedres in subs) {
        let subject = document.getElementById("subject");
        let Link = subs[selectedres]['Link'];
        let clickh = `Click Here!`
        subject.innerHTML = `<a href="${Link}" target="_blank">${Link}</a>
        ff
        <br>`;
    } else {
        let subject = document.getElementById("subject");
        subject.innerHTML = `Please Select a Course from the available options`;
        subject.setAttribute("style", `color: #FF1800;`);
    }
});




document.getElementById("submitres").addEventListener('click', function () {
    let dropdownr = document.getElementById("dropdownres");
    let selectedres = dropdownr.value;

    if (selectedres in subs) {
        let subject = document.getElementById("subject");
        let Link = subs[selectedres]['Link'];
        subject.innerHTML = `<a href="${Link}" target="_blank">${Link}</a><br>`;
    } else {
        let subject = document.getElementById("subject");
        subject.innerHTML = `Please Select a Course from the available options`;
    }
});
