/* global hexo */

const hexoExcerptBlock = require('./hexo-excerpt-block')

hexo.extend.filter.register('after_post_render', hexoExcerptBlock)
