
# Gx

Minimal responsive React grid system based on the
[Fab Four Technique](https://medium.freecodecamp.com/the-fab-four-technique-to-create-responsive-emails-without-media-queries-baf11fdfa848#.hnwla2u14).

## Features

- Element-query-like behavior
- No CSS dependencies
- No client-side JS
- Works with server-side rendering
- Works in email
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

## Examples

## Demo

http://jxnblk.com/gx

[MIT License](.github/LICENSE.md)

