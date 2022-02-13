export const splitAuthorName = (author) => {
  const authorReplace = author.replace(/ /g, '+')
  return authorReplace
}
