let scoreWord = (string, num) => {
  if(string === null) { return 0 }

  const letterScores = {
    A: 1, B: 3, C: 3, D: 2,
    E: 1, F: 4, G: 2, H: 4,
    I: 1, J: 8, K: 5, L: 1,
    M: 3, N: 1, O: 1, P: 3,
    Q: 10, R: 1, S: 1, T: 1,
    U: 1, V: 4, W: 4, X: 8,
    Y: 4, Z: 10,
  };

  const stringArray = string.toUpperCase().trim().split('');
  let scoreArray = stringArray.map((L) => {
    return L !== ' ' ? letterScores[L] : 0;
  });
  let score = scoreArray.reduce((sum, val) => {
    return sum + val;
  }, 0);
  return num ? score * num : score;
};

export default scoreWord;
