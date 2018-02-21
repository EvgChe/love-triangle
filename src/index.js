/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var prefLength = preferences.length;
  var count = 0;
  var a = preferences;
  for (var i = 0; i < prefLength; i++)  {
      if(a[a[a[i] - 1] - 1] - 1 === i) {
         if(a[a[i] - 1] - 1 === a[i] - 1)  {
             continue;
         }  else if(a[i] - 1 === i)  {
             continue;
         } else {
             count++;
         }
      }
  }
  return count/3;
};
