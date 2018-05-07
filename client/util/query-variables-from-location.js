export default ({search}) => {
  const searchParams = new URLSearchParams(search)
  return {title: title(searchParams), tags: tags(searchParams)}
}

function title(searchParams){
  const title = searchParams.get("title")
  return title === "null" ? null : title
}

function tags(searchParams){
  const unsplitTags = searchParams.get("tags")
  if(!unsplitTags || unsplitTags === "null") return null
  return unsplitTags.split("~")
}
