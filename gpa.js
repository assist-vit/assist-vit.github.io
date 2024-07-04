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

document.getElementById('submitgpa').addEventListener('click', function() {
    let totalPoints = 0;
    let totalCredits = 0;
    let totalHours = 0;

    for (let i = 1; i <= 6; i++) {
        let grade = document.getElementById('g' + i).value;
        let credit = parseInt(document.getElementById('c' + i).value);

        if (grade !== 'x' && credit && !isNaN(credit) && credit > 0) {
            if (grade in points && credit.toString() in credits) {
                totalPoints += points[grade] * credit;
                totalCredits += credit;
                totalHours += credits[credit.toString()];
            }
        }
    }

    let gpa = 0;
    if (totalCredits > 0) {
        gpa = totalPoints / totalCredits;
    }

    let resultMessage = totalCredits > 0 ? `GPA: ${gpa.toFixed(2)}` : 'Please select valid grades and credits.';
    document.getElementById('resultsgpa').innerHTML = resultMessage;
    let resultMessage1 = totalCredits > 0 ? `<br>Total Credits: ${totalCredits} <br>Total Hours in classes: ${totalHours}` : 'Please select valid grades and credits.';
    document.getElementById('resultsgpa1').innerHTML = resultMessage1;
});

