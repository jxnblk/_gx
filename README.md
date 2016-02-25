
# Gx

[![Build Status](https://travis-ci.org/jxnblk/gx.svg)](https://travis-ci.org/jxnblk/gx)

Minimal responsive React grid system based on the
[Fab Four Technique](https://medium.freecodecamp.com/the-fab-four-technique-to-create-responsive-emails-without-media-queries-baf11fdfa848#.hnwla2u14).

## Features

- Element-query-like behavior
- No CSS dependencies
- No client-side JS
- Works with server-side rendering
- Works in email
- Single React component
- <1KB gzipped & minified

## Getting Started

```sh
npm i gx
```

```js
import React from 'react'
import Gx from 'gx'

class MyComponent extends React.Component {
  render () {
    return (
      <div>
        <Gx col={7}>
          <h1>Left Column</h1>
        </Gx>
        <Gx col={5}>
          <h2>Right Column</h2>
        </Gx>
      </div>
    )
  }
}

export default MyComponent
```

## Props

- `col` (number) - Width of column above the breakpoint. Based on a 12 column grid. Default: `6`
- `breakpoint` (number) - Width in pixels at which columns render side-by-side. Default: `512`

## Configuration

A custom `breakpoint` value can be set with the `config.set()` method.

```jsx
import React from 'react'
import Gx, { config } from 'gx'

config.set({ breakpoint: 768 })
```

## Examples

### 3 Columns

```jsx
<div>
  <Gx col={4}>Col 4</Gx>
  <Gx col={4}>Col 4</Gx>
  <Gx col={4}>Col 4</Gx>
</div>
```

### 7/5 Split

```jsx
<div>
  <Gx col={7}>Col 7</Gx>
  <Gx col={5}>Col 5</Gx>
</div>
```

### Custom Breakpoint

```jsx
<div>
  <Gx col={6} breakpoint={768}>Breakpoint 768</Gx>
  <Gx col={6} breakpoint={768}>Breakpoint 768</Gx>
</div>
```


## Demo

http://jxnblk.com/gx

[MIT License](.github/LICENSE.md)

