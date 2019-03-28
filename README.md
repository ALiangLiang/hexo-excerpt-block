# hexo-excerpt-block

[![Travis (.org)](https://img.shields.io/travis/ALiangLiang/hexo-excerpt-block.svg)](https://travis-ci.org/ALiangLiang/hexo-excerpt-block) [![npm version](https://img.shields.io/npm/v/hexo-excerpt-block.svg)](https://www.npmjs.com/package/hexo-excerpt-block) [![Coveralls github](https://img.shields.io/coveralls/github/ALiangLiang/hexo-excerpt-block.svg)](https://coveralls.io/r/ALiangLiang/hexo-excerpt-block?branch=master)

A plugin for hexo, enable mark excerpt block in post easily. However, the excerpt will remain.

Inspired by [fuchen/hexo-less](https://github.com/fuchen/hexo-less).

## Install

`npm install --save hexo-excerpt-block`

## Usage

Add one or two `<!-- block -->` to your post file. It will be used as an excerpt before or between the block tag.

## Example

### Method 1 - between two block tags

```markdown
---
title: Example post
---

## This is an example post.

<!-- block -->
Here is excerpt block.
It's easy to use.
<!-- block -->

Some contents.

```

Excerpt:

```text
Here is excerpt block.
It's easy to use.
```

### Method 2 - before one block tag

```markdown
---
title: Example post
---

This is an example post.

Before block tag will be used as an excerpt.
<!-- block -->

Some contents.

```

Excerpt:

```text
This is an example post.

Before block tag will be used as an excerpt.
```

## Q&A

Q: Is this package compatible with [fuchen/hexo-less](https://github.com/fuchen/hexo-less)?  
A: Yes. But only one method in a post.

## License

MIT
