const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let count = 0
export const Binary_search = () => {
  const binarySearch = (array, item) => {
    let start = 0
    let end = array.length 
    let mid = Math.floor((start + end) / 2)

    while (array[mid] !== item && start <= end) {
      count++
      if (item < array[mid]) {
        end = mid 
      } else {
        start = mid 
      }
      mid = Math.floor((start + end) / 2)
    }

    return array[mid] === item ? mid : 0
  }
  count = binarySearch(array, 5)
  console.log(count)
  

  return <div>{count}</div>
}
