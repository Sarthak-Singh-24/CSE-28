function calculateGrades() {
    // Array of input IDs to target with our loop
    const subjectIds = ['sub1', 'sub2', 'sub3', 'sub4'];
    let totalMarks = 0;
    let isValid = true;

    // Loop through the input IDs to calculate total marks
    for (let i = 0; i < subjectIds.length; i++) {
        const markValue = document.getElementById(subjectIds[i]).value;
        
        // Validation check to ensure fields aren't empty
        if (markValue === "") {
            alert("Please fill in all subject marks.");
            isValid = false;
            break;
        }

        const mark = parseFloat(markValue);

        // Validation for reasonable marks range
        if (mark < 0 || mark > 100) {
            alert("Marks should be between 0 and 100.");
            isValid = false;
            break;
        }

        totalMarks += mark;
    }

    // If validation passed, calculate average and grade
    if (isValid) {
        const averageMarks = totalMarks / subjectIds.length;
        let grade = '';

        // Assigning grades based on average score
        if (averageMarks >= 90) {
            grade = 'A+';
        } else if (averageMarks >= 80) {
            grade = 'A';
        } else if (averageMarks >= 70) {
            grade = 'B';
        } else if (averageMarks >= 60) {
            grade = 'C';
        } else if (averageMarks >= 50) {
            grade = 'D';
        } else {
            grade = 'F (Fail)';
        }

        // Displaying results on the UI
        document.getElementById('resTotal').innerText = totalMarks;
        document.getElementById('resAverage').innerText = averageMarks.toFixed(2);
        document.getElementById('resGrade').innerText = grade;

        // Reveal the result container
        document.getElementById('result').classList.remove('hidden');
    }
}