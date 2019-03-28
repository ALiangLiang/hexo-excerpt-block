const rExcerpt = /<!--+\s*block\s*--+>(.|\n)*<!--+\s*block\s*--+>/i
const rExcerpt2 = /(.|\n)*<!--+\s*block\s*--+>/i
const rReserve = /<!--+\s*block\s*--+>/g

module.exports = function hexoExerptBlock (data) {
  const content = data.content
  const match = rExcerpt.exec(content) || rExcerpt2.exec(content)
  if (!match) {
    return
  }

  data.excerpt = content.substring(match.index, match.index + match[0].length).replace(rReserve, '').trim()
  data.content = data.more = content.replace(rReserve, '')

  return data
}
