export const kebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-')

/*
             "gray",
              "red",
              "yellow",
              "green",
              "blue",
              "indigo",
              "purple",
              "pink",
*/
let categoryColors = new Map()
  .set('gray', { fg: "text-gray-800", bg: "bg-gray-100" })
  .set('red', { fg: "text-red-800", bg: "bg-red-100" })
  .set('yellow', { fg: "text-yellow-800", bg: "bg-yellow-100" })
  .set('green', { fg: "text-green-800", bg: "bg-green-100" })
  .set('blue', { fg: "text-blue-800", bg: "bg-blue-100" })
  .set('indigo', { fg: "text-indigo-800", bg: "bg-indigo-100" })
  .set('purple', { fg: "text-purple-800", bg: "bg-purple-100" })
  .set('pink', { fg: "text-pink-800", bg: "bg-pink-100" })

export const categoryColor = categoryColors;