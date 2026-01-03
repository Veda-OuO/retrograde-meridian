export function gradeExam(answers) {
  let score = 0;
  const maxScore = 100;
  
  // Grade each question
  // Example structure - customize for your mystery
  
  // Question 1: Who is the victim? (10 points)
  if (answers.q1 === 'correct-answer') {
    score += 10;
  }
  
  // Question 2: What was the weapon? (10 points)
  if (answers.q2 === 'correct-answer') {
    score += 10;
  }
  
  // Add more questions...
  
  return {
    score,
    maxScore,
    percentage: Math.round((score / maxScore) * 100)
  };
}