
# Gx

[![Build Status](https://travis-ci.org/jxnblk/gx.svg)](https://travis-ci.org/jxnblk/gx)

Minimal responsive React grid system based on the [Fab Four Technique][0].

<http://jxnblk.com/gx>

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

```jsx
<Gx w={1/2} x={256} />
```

```.jsx
<Gx w={1/2} breakpoint={256}>
  Hello
</Gx>
```

```..jsx
// import React from 'react'
// import Gx from 'gx'

const App = () => (
  <div>
    <Gx w={7/12}>
      <h1>Left Column</h1>
    </Gx>
    <Gx w={5/12}>
      <h2>Right Column</h2>
    </Gx>
  </div>
)

render(<App />)
```

## Props

- `w` (number) - Width of element above the breakpoint. Numbers between 0–1 are treated as percentage widths. Numbers above 1 are treated as pixel widths.
- `breakpoint` (number) - Width in pixels at which elements render side-by-side. Default: `512`

## Configuration

A custom `breakpoint` value can be set with [theming][1].


## Examples

### 3 Columns

```.jsx
<div>
  <Gx w={1/3}>1/3</Gx>
  <Gx w={1/3}>1/3</Gx>
  <Gx w={1/3}>1/3</Gx>
</div>
```

### 7/5 Split

```.jsx
<div>
  <Gx w={7/12}>7/12</Gx>
  <Gx w={5/12}>5/12</Gx>
</div>
```

### Wrapping

Because Gx uses `display: inline-block`, grid cells automatically wrap.

```.jsx
<div>
  <Gx w={1/2}>1/2</Gx>
  <Gx w={1/2}>1/2</Gx>
  <Gx w={1/2}>1/2</Gx>
  <Gx w={1/2}>1/2</Gx>
</div>
```

### Nesting

```.jsx
<div>
  <Gx w={1/2}>
    <Gx w={1/2}>Nested</Gx>
    <Gx w={1/2}>Nested</Gx>
  </Gx>
  <Gx w={1/2}>1/2</Gx>
</div>
```

### Custom Breakpoint

```.jsx
<div>
  <Gx w={1/2} breakpoint={768}>Breakpoint 768</Gx>
  <Gx 2={1/2} breakpoint={768}>Breakpoint 768</Gx>
</div>
```


---

[GitHub](https://github.com/jxnblk/gx)
[Made by Jxnblk](http://jxnblk.com)

[MIT License](.github/LICENSE.md)

[0]: https://medium.freecodecamp.com/the-fab-four-technique-to-create-responsive-emails-without-media-queries-baf11fdfa848#.hnwla2u14
[1]: https://github.com/iamstarkov/theming
