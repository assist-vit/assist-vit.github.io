const group = {
    'general': {
        'Link': 'Under Construction. Please check back later.',
    },
    'wintersem2425': {
        'Link': 'https://docs.google.com/spreadsheets/d/1xItL90XfVk1qAu95FBm7VwmhwNFPwG_M56b4Af1wGPI/edit?usp=sharing',
        'Add' : 'https://forms.gle/o6QzUCU91EMpfgfT8',
    }
};

var originalDropdownOptions2 = Array.from(document.getElementById("dropdownsem").options);

function filterDropdownsem() {
    var groupinput = document.getElementById("groupinput").value.toLowerCase();
    var dropdownsem = document.getElementById("dropdownsem");

    dropdownsem.innerHTML = "";

    var filteredOptions1 = originalDropdownOptions2.filter(function (option) {
        return option.text.toLowerCase().includes(groupinput);
    });

    for (var i = 0; i < filteredOptions1.length; i++) {
        dropdownsem.appendChild(filteredOptions1[i]);
    }
}

document.getElementById("submitsem").addEventListener('click', function () {
    let dropdowns = document.getElementById("dropdownsem");
    let selectedsem = dropdowns.value;

    if (selectedsem in group) {
        let sem = document.getElementById("sem");
        let Link = group[selectedsem]['Link'];
        let Add = group[selectedsem]['Add'];
        let clickh = `Click Here!`
        sem.innerHTML = `<a href="${Link}" target="_blank">${Link}</a> <br> <br>;
                            <a href="${Add}" target="_blank">${Add}</a>`;
    } else {
        let sem = document.getElementById("sem");
        sem.innerHTML = `Please Select a option from the available options`;
        sem.setAttribute("style", `color: #FF1800;`);
    }
});




document.getElementById("submitsem").addEventListener('click', function () {
    let dropdowns = document.getElementById("dropdownsem");
    let selectedsem = dropdowns.value;

    if (selectedsem in group) {
        let sem = document.getElementById("sem");
        let Link = group[selectedsem]['Link'];
        let Add = group[selectedsem]['Add'];
        sem.innerHTML = `To Join and Find Groups: <a href="${Link}" target="_blank">${Link}</a> <br> <br>
                            To add your own group: <br> <a href="${Add}" target="_blank">${Add}</a>`;
    } else {
        let sem = document.getElementById("sem");
        sem.innerHTML = `Please Select a option from the available options`;
    }
});
