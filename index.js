/* global hexo */
var rExcerpt = /<!--+\s*block\s*--+>(.|\n)*<!--+\s*block\s*--+>/i
var rExcerpt2 = /(.|\n)*<!--+\s*block\s*--+>/i
var rReserve = /<!--+\s*block\s*--+>/g

hexo.extend.filter.register('after_post_render', function(data) {
  let content = data.content
  let match = rExcerpt.exec(content) || rExcerpt2.exec(content)
  if (!match) {
    return
  }
  data.excerpt = content.substring(match.index, match.index + match[0].length).replace(rReserve, '').trim()
  data.content = data.more = content.replace(rReserve, '')
})
