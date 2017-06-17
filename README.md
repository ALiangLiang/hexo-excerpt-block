# hexo-excerpt-block
A plugin for hexo, enable mark excerpt block in post easily. Inspired by [fuchen/hexo-less](https://github.com/fuchen/hexo-less).

## Install

`npm install --save hexo-excerpt-block`

## Usage

Add one or two `<!-- block -->` to your post file. Before or between these will be used as an excerpt.

## Example

#### Method 1
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
```
Here is excerpt block.
It's easy to use.
```

#### Method 2
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
```
This is an example post.

Before block tag will be used as an excerpt.
```

## Q&A

Q: Is this package compatible with [fuchen/hexo-less](https://github.com/fuchen/hexo-less)?  
A: Yes. But only one method in a post.

Q2: Is excerpt block will be removed in post?  
A2: No. It's difference from [fuchen/hexo-less](https://github.com/fuchen/hexo-less). Excerpt block will be reserved in post.