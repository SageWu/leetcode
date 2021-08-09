/**
 * 得出分数的排名
 */
// function findRelativeRanks(score: number[]): string[] {
//   let sortedScore = score.slice().sort((a, b) => b - a);
//   let res = [];

//   let len = sortedScore.length;
//   if (len > 0) {
//     res[score.indexOf(sortedScore[0])] = 'Gold Medal';
//   }
//   if (len > 1) {
//     res[score.indexOf(sortedScore[1])] = 'Silver Medal';
//   }
//   if (len > 2) {
//     res[score.indexOf(sortedScore[2])] = 'Bronze Medal';
//   }
//   for (let i = 3; i < len; ++i) {
//     res[score.indexOf(sortedScore[i])] = '' + (i + 1);
//   }

//   return res;
// };

function findRelativeRanks(score: number[]): string[] {
  let cache = score.slice()
    .sort((a, b) => b - a)
    .reduce((map, cur, index) => map.set(cur, index + 1), new Map());
  
  let res = [];
  for (let i = 0; i < score.length; ++i) {
    const rank = cache.get(score[i]);
    switch (rank) {
      case 1:
        res[i] = 'Gold Medal';
        break;
      case 2:
        res[i] = 'Silver Medal';
        break;
      case 3:
        res[i] = 'Bronze Medal';
        break;
      default:
        res[res.length] = '' + rank;
    }
  }

  return res;
}