document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let studentName = document.getElementById('studentName').value;
    let subject1 = parseInt(document.getElementById('subject1').value);
    let subject2 = parseInt(document.getElementById('subject2').value);
    let subject3 = parseInt(document.getElementById('subject3').value);
    let subject4 = parseInt(document.getElementById('subject4').value);
    let subject5 = parseInt(document.getElementById('subject5').value);

    let total=(subject1 + subject2 + subject3 + subject4 + subject5);
    let averageGrade = (subject1 + subject2 + subject3 + subject4 + subject5) / 5;
    let letterGrade = getLetterGrade(averageGrade);

    let result = `Total: ${total}
                Average Score: ${averageGrade.toFixed(2)}
                Grade: ${letterGrade}`;
    document.getElementById('result').innerText = result;
});

function getLetterGrade(averageGrade) {
    if (averageGrade >= 97) {
        return 'A+';
    } else if (averageGrade >= 95) {
        return 'A';
    } else if (averageGrade >= 92) {
        return 'A-';
    } else if (averageGrade >= 87) {
        return 'B+';
    }
    else if (averageGrade >= 85) {
        return 'B';
    }
    else if (averageGrade >= 82) {
        return 'B-';
    }
    else if (averageGrade >= 77) {
        return 'C+';
    }
    else if (averageGrade >= 75) {
        return 'C';
    }
    else if (averageGrade >= 72) {
        return 'C-';
    }
    else if (averageGrade >= 67) {
        return 'D+';
    }
    else if (averageGrade >= 65) {
        return 'D';
    }
    else if (averageGrade >= 60) {
        return 'D-';
    }
     else {
        return 'F';
    }
}
