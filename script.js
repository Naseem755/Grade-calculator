document.addEventListener('DOMContentLoaded', function () {
    const subjectInputs = document.querySelectorAll('.subject-input');
    
    subjectInputs.forEach(input => {
        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                calculateGrade();
            }
        });
    });
});

function calculateGrade() {
    // Input elements
    const subject1 = document.getElementById('subject1');
    const subject2 = document.getElementById('subject2');
    const subject3 = document.getElementById('subject3');
    const subject4 = document.getElementById('subject4');
    const subject5 = document.getElementById('subject5');

    // Result elements
    const resultContainer = document.getElementById('resultContainer');
    const totalMarksElement = document.getElementById('totalMarks');
    const obtainMarksElement = document.getElementById('obtainMarks');
    const percentageElement = document.getElementById('percentage');
    const gradeElement = document.getElementById('grade');
    const remarksElement = document.getElementById('remarks');

    // Calculate total marks and obtain marks
    const totalMarks = 500;
    const obtainMarks = parseInt(subject1.value || 0) + parseInt(subject2.value || 0) +
                        parseInt(subject3.value || 0) + parseInt(subject4.value || 0) +
                        parseInt(subject5.value || 0);

    // Display results
    totalMarksElement.textContent = `Total Marks: ${totalMarks}`;
    obtainMarksElement.textContent = `Obtain Marks: ${obtainMarks}`;

    if (obtainMarks > 500) {
        // Display error message for invalid input
        resultContainer.classList.add('hidden');
        alert('Invalid input. Marks cannot be more than 100 in each subject.');
    } else {
        // Calculate percentage, grade, and remarks
        const percentage = (obtainMarks / totalMarks) * 100;
        let grade, remarks;

        if (percentage >= 90) {
            grade = 'A+';
            remarks = 'Excellent';
        } else if (percentage >= 80) {
            grade = 'A';
            remarks = 'Very Good';
        } else if (percentage >= 70) {
            grade = 'B';
            remarks = 'Good';
        } else if (percentage >= 60) {
            grade = 'C';
            remarks = 'Satisfactory';
        } else if (percentage >= 50) {
            grade = 'D';
            remarks = 'Needs Improvement';
        } else {
            grade = 'F';
            remarks = 'Fail';
        }

        // Display calculated results
        percentageElement.textContent = `Percentage: ${percentage.toFixed(2)}%`;
        gradeElement.textContent = `Grade: ${grade}`;
        remarksElement.textContent = `Remarks: ${remarks}`;

        // Show result container
        resultContainer.classList.remove('hidden');
    }
}
