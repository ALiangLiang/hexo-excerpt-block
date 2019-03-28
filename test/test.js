'use strict'

const Hexo = require('hexo')
const hexoExcerptBlock = require('../hexo-excerpt-block')

const hexo = new Hexo(__dirname, {
  silent: true
})
hexo.extend.filter.register('after_post_render', hexoExcerptBlock)

describe('Introduce excerpt', async () => {
  it('should introduce excerpt before only one block tag', async () => {
    const data = {
      content: `
<p>block 1</p>
<p>block 2 <span>123</span></p>0
<!-- block -->
<div>block3</div>
`
    }
    await hexo.post.render(null, data)

    data.excerpt.should.equal(`<p>block 1</p>
<p>block 2 <span>123</span></p>0`)

    const contentShould = `
<p>block 1</p>
<p>block 2 <span>123</span></p>0

<div>block3</div>
`
    data.content.should.equal(contentShould)
    data.more.should.equal(contentShould)
  })

  it('should introduce excerpt between two block tags', async () => {
    const data = {
      content: `
<p>block 1</p>
<!-- block -->
<p>block 2 <span>123</span></p>0
<!-- block -->
<div>block3</div>
`
    }
    await hexo.post.render(null, data)

    data.excerpt.should.equal(`<p>block 2 <span>123</span></p>0`)

    const contentShould = `
<p>block 1</p>

<p>block 2 <span>123</span></p>0

<div>block3</div>
`
    data.content.should.equal(contentShould)
    data.more.should.equal(contentShould)
  })

  it('should not introduce any word as excerpt without no block tag', async () => {
    const data = {
      content: `
<p>block 1</p>
<p>block 2 <span>123</span></p>0
<div>block3</div>
`
    }
    await hexo.post.render(null, data)

    assert.notExists(data.excerpt)
  })
})
