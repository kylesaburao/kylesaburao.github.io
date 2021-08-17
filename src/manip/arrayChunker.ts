export default function chunkArrayInGroups(arr: any[], size: number) {
  var myArray: any[] = [];
  for (var i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
}
