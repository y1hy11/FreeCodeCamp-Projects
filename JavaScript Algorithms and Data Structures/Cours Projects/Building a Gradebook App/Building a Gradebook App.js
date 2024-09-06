function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }
  
  function studentMsg(totalScores, studentScore) {
    let classAverage = getAverage(totalScores);
    let studentGrade = getGrade(studentScore);
    let message;
  
    if (hasPassingGrade(studentScore)) {
      message = "Class average: " + classAverage + "- Your grade: " + studentGrade + "- You passed the course.";
    } else {
      message = "Class average: " + classAverage + "- Your grade: " + studentGrade + "- You failed the course.";
    }
  
    return message;
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

  /*
  Big Thanks to FreeCodeCamp 

  All rights reserved to FreeCodeCamp 
*/
  