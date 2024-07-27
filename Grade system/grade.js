function calculateGrades() {

    let math = +(document.getElementById('math').value) ;
    let science = +(document.getElementById('science').value) ;
    let english = +(document.getElementById('english').value);
    let history = +(document.getElementById('history').value);
    let geography = +(document.getElementById('geography').value);

    
    let totalMarks = math + science + english + history + geography;

    
    document.getElementById('totalMarks').textContent = 'Total Marks: ' + totalMarks;

    
    let grade;
    if (totalMarks >= 450) {
        grade = 'A';
    } else if (totalMarks >= 400) {
        grade = 'B';
    } else if (totalMarks >= 350) {
        grade = 'C';
    } else if (totalMarks >= 300) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    
    document.getElementById('grade').textContent = 'Grade: ' + grade;
}
