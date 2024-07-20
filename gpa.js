const points = {
    'S': 10,
    'A': 9,
    'B': 8,
    'C': 7,
    'D': 6,
    'E': 5,
    'F': 0,
    'x': 0 
};

const credits = {
    '4': 60,
    '3': 45,
    '2': 30,
    '1': 15
};

document.getElementById('addRow').addEventListener('click', function() {
    const rowsContainer = document.getElementById('rowsContainer');
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.innerHTML = `
        <select class="gradeSelect">
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="x">Not Available</option>
        </select>
        <select class="creditSelect">
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
            <option value="x">Not Available</option>
        </select>
    `;
    rowsContainer.appendChild(newRow);
});

document.getElementById('removeRow').addEventListener('click', function() {
    const rowsContainer = document.getElementById('rowsContainer');
    if (rowsContainer.children.length > 1) {
        rowsContainer.removeChild(rowsContainer.lastChild);
    }
});

document.getElementById('submitgpa').addEventListener('click', function() {
    let totalPoints = 0;
    let totalCredits = 0;
    let totalHours = 0;

    const rows = document.querySelectorAll('.row');
    rows.forEach((row, index) => {
        const grade = row.querySelector('.gradeSelect').value;
        const credit = parseInt(row.querySelector('.creditSelect').value);

        if (grade !== 'x' && credit && !isNaN(credit) && credit > 0) {
            if (grade in points && credit.toString() in credits) {
                totalPoints += points[grade] * credit;
                totalCredits += credit;
                totalHours += credits[credit.toString()];
            }
        }
    });

    let gpa = 0;
    if (totalCredits > 0) {
        gpa = totalPoints / totalCredits;
    }

    let resultMessage = totalCredits > 0 ? `GPA: ${gpa.toFixed(2)}` : 'Please select valid grades and credits.';
    document.getElementById('resultsgpa').innerHTML = resultMessage;
    let resultMessage1 = totalCredits > 0 ? `<br>Total Credits: ${totalCredits} <br>Total Hours in classes: ${totalHours}` : 'Please select valid grades and credits.';
    document.getElementById('resultsgpa1').innerHTML = resultMessage1;
});
