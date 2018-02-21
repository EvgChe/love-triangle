/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var prefLength = preferences.length;
  var count = 0;
  var arr = preferences.slice();
  for (var i = 0; i < prefLength; i++)  {
      if(arr[arr[arr[i] - 1] - 1] - 1 === i) {
         if(arr[arr[i] - 1] - 1 === arr[i] - 1)  {
             continue;
         }  else if(arr[i] - 1 === i)  {
             continue;
         } else {
             count++;
         }
      }
  }
  return count/3;
};
