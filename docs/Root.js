
import React from 'react'
import Gx, { config } from '../src/Gx'

const css = `
.Example {
  outline: 1px solid tomato;
}
.Example .Gx {
  outline: 1px solid #08d;
}
`

const Box = (props) => (
  <div {...props}
    className='Box'
    style={{
      padding: 32
    }} />
)

const Container = (props) => (
  <div {...props}
    className='Container'
    style={{
      maxWidth: 1024,
      margin: 'auto'
    }} />
)

class Root extends React.Component {

  render () {
    return (
      <div>
        <link href='https://npmcdn.com/basscss-basic/index.css'
          rel='stylesheet' />
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <Container>
          <Box>
            <h1>Gx</h1>
            <p>
              Minimal responsive React grid system based on the{' '}
              <a href='https://medium.freecodecamp.com/the-fab-four-technique-to-create-responsive-emails-without-media-queries-baf11fdfa848#.hnwla2u14'>Fab Four Technique</a>.
            </p>
          </Box>
          {/*
          */}
          <div className='Example'>
            <Gx>Default Gx</Gx>
            <Gx>Default Gx</Gx>
          </div>
          <div className='Example'>
            <Gx col={4}>Col 4 Gx</Gx>
            <Gx col={4}>Col 4 Gx</Gx>
            <Gx col={4}>Col 4 Gx</Gx>
          </div>
          <div className='Example'>
            <Gx col={3}>Col 3 Gx</Gx>
            <Gx col={3}>Col 3 Gx</Gx>
            <Gx col={3}>Col 3 Gx</Gx>
            <Gx col={3}>Col 3 Gx</Gx>
          </div>
          <div className='Example'>
            <Gx col={2}>Col 2 Gx</Gx>
            <Gx col={2}>Col 2 Gx</Gx>
            <Gx col={2}>Col 2 Gx</Gx>
            <Gx col={2}>Col 2 Gx</Gx>
            <Gx col={2}>Col 2 Gx</Gx>
            <Gx col={2}>Col 2 Gx</Gx>
          </div>
          <div className='Example'>
            <Gx breakpoint={768}>Breakpoint 768 Gx</Gx>
            <Gx breakpoint={768}>Breakpoint 768 Gx</Gx>
          </div>
          <div className='Example'>
            <Gx breakpoint={768}>Breakpoint 768 Gx</Gx>
            <Gx breakpoint={512}>Breakpoint 512 Gx</Gx>
          </div>
          <div className='Example'>
            <Gx col={4}>
              <Box>
                <h2>Nested Box</h2>
                <p>With more content than the box on the right.</p>
              </Box>
            </Gx>
            <Gx col={8}>
              <Box>
                <h2>Nested Box</h2>
              </Box>
            </Gx>
          </div>
          <div className='Example'
            style={{ maxWidth: 510 }}>
            <h3>510px Container</h3>
            <Gx col={6}>Col 6</Gx>
            <Gx col={6}>Col 6</Gx>
          </div>
          <div className='Example'
            style={{ maxWidth: 520 }}>
            <h3>520px Container</h3>
            <Gx col={6}>Col 6</Gx>
            <Gx col={6}>Col 6</Gx>
          </div>
          <hr />
        </Container>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}

export default Root

