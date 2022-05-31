const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const Linear_search = () => {
  const algoritm = (array, item) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return i
      }
    }
  }
  const data = algoritm(array, 10)
  console.log(data)

  return <div>{data}</div>
}
