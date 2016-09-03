
import React from 'react'
import Gx from '../src/Gx'

const css = `
code, pre, samp, .mono { font-family: 'Roboto Mono', monospace }
/*
.Example .Gx {
  outline: 1px solid #07c;
}
*/
@media screen and (min-width:512px) {
  .sm-right-align { text-align: right }
}
.b2 { border: 2px solid }
.b3 { border: 3px solid }
.black { color: #111 }
.white { color: #fff }
.bg-black { background-color: #111 }
.bg-white { background-color: #fff }
#carbonads {
  display: inline-block;
  font-size: 14px;
  line-height: 1.25;
  text-align: left;
  max-width: 320px;
}
#carbonads a,
#carbonads a:hover {
  text-decoration: none;
  color: inherit;
}
#carbonads span { display: block }
#carbonads > span::before,
#carbonads > span::after {
  content: '';
  display: table;
}
#carbonads > span::after {
  clear: both;
}
.carbon-img {
  float: left;
  margin-right: .5em;
}
.carbon-img > img { display: block }
.carbon-text { overflow: hidden }
.carbon-poweredby {
  float: left;
  margin-top: .25em;
  opacity: 0.5;
}
`.replace(/\n/g, '')

const Header = ({ description, ...props }) => (
  <header className='py4'>
    <div className='flex flex-column items-center justify-between p2 mb4 b3'
      style={{ width: 192, height: 256 }}>
      <div className='' />
      <h1 className='m0' style={{ fontSize: 56 }}>Gx</h1>
      <div>Grid System</div>
    </div>
    <div className='flex flex-wrap'>
      <div className='flex-auto'>
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <a href='https://travis-ci.org/jxnblk/gx'
          className='mr2'
          style={{ display: 'inline-block', height: 20 }}>
          <img src='https://travis-ci.org/jxnblk/gx.svg?branch=master'
            style={{ display: 'block' }} />
        </a>
        <a href="https://twitter.com/share"
          className="twitter-share-button"
          data-text='Minimal React grid system'
          data-via='jxnblk'
          children='Tweet' />
        <pre>npm i gx</pre>
      </div>
      <div>
        <script
          async
          type='text/javascript'
          src={`//cdn.carbonads.com/carbon.js?zoneid=1696&serve=CVYD42T&placement=jxnblkcom`}
          id='_carbonads_js' />
      </div>
    </div>
  </header>
)

const Box = ({ outline, ...props }) => (
  <div {...props}
    className='Box'
    style={{
      padding: 24,
      outline: outline ? '1px solid rgba(0, 128, 255, .5)' : null
    }} />
)

Box.defaultProps = {
  outline: true
}

const Container = (props) => (
  <div {...props}
    className='Container'
    style={{
      maxWidth: 1024,
      margin: 'auto'
    }} />
)

const Features = () => (
  <section className='py4'>
    <Gx col={4}>
      <Box>Element-query-like behavior</Box>
    </Gx>
    <Gx col={4}>
      <Box>No CSS dependencies</Box>
    </Gx>
    <Gx col={4}>
      <Box>No client-side JS</Box>
    </Gx>
    <Gx col={4}>
      <Box>Works with server-side rendering</Box>
    </Gx>
    <Gx col={4}>
      <Box>Single React Component</Box>
    </Gx>
    <Gx col={4}>
      <Box>{'<1KB gzipped & minified'}</Box>
    </Gx>
  </section>
)

const Examples = () => (
  <section id='examples' className='Examples'>
    <h2>
      <a href='#examples'>
        Examples
      </a>
    </h2>
    <div className='Example py2'>
      <Gx><Box>Default Gx</Box></Gx>
      <Gx><Box>Default Gx</Box></Gx>
    </div>
    <div className='Example py2'>
      <Gx col={4}><Box>Col 4 Gx</Box></Gx>
      <Gx col={4}><Box>Col 4 Gx</Box></Gx>
      <Gx col={4}><Box>Col 4 Gx</Box></Gx>
    </div>
    <div className='Example py2'>
      <Gx col={3}><Box>Col 3 Gx</Box></Gx>
      <Gx col={3}><Box>Col 3 Gx</Box></Gx>
      <Gx col={3}><Box>Col 3 Gx</Box></Gx>
      <Gx col={3}><Box>Col 3 Gx</Box></Gx>
    </div>
    <div className='Example py2'>
      <Gx col={2}><Box>Col 2 Gx</Box></Gx>
      <Gx col={2}><Box>Col 2 Gx</Box></Gx>
      <Gx col={2}><Box>Col 2 Gx</Box></Gx>
      <Gx col={2}><Box>Col 2 Gx</Box></Gx>
      <Gx col={2}><Box>Col 2 Gx</Box></Gx>
      <Gx col={2}><Box>Col 2 Gx</Box></Gx>
    </div>
    <div className='Example py2'>
      <Gx breakpoint={768}><Box>Breakpoint 768 Gx</Box></Gx>
      <Gx breakpoint={768}><Box>Breakpoint 768 Gx</Box></Gx>
    </div>
    <div className='Example py2'>
      <Gx breakpoint={768}><Box>Breakpoint 768 Gx</Box></Gx>
      <Gx breakpoint={512}><Box>Breakpoint 512 Gx</Box></Gx>
    </div>
    <div className='Example py2'>
      <Gx col={4}>
        <Box>
          <h3>Col 4</h3>
        </Box>
      </Gx>
      <Gx col={8}>
        <Box>
          <h3>Col 8</h3>
          <Gx><Box>Nested Gx</Box></Gx>
          <Gx><Box>Nested Gx</Box></Gx>
        </Box>
      </Gx>
    </div>
    <div className=''>
      <Gx col={5} breakpoint={1120}>
        <div className='Example' style={{ maxWidth: 480 }}>
          <Box>
            <h3>480px Container</h3>
            <Gx col={6}><Box>Col 6</Box></Gx>
            <Gx col={6}><Box>Col 6</Box></Gx>
          </Box>
        </div>
      </Gx>
      <Gx col={7} breakpoint={1120}>
        <div className='Example' style={{ maxWidth: 640 }}>
          <Box>
            <h3>640px Container</h3>
            <Gx col={6}><Box>Col 6</Box></Gx>
            <Gx col={6}><Box>Col 6</Box></Gx>
          </Box>
        </div>
      </Gx>
    </div>
  </section>
)

const CTA = () => (
  <section className='py4'>
    <h2 className='mb0'>Get Started</h2>
    <p className='mt0'>Learn more and read the documentation on GitHub</p>
    <a href='https://github.com/jxnblk/gx' className='h1 bold'>GitHub</a>
  </section>
)

const Footer = () => (
  <footer className='py4'>
    <Gx>
      <a href='//github.com/jxnblk/gx' className='bold black text-decoration-none'>GitHub</a>
    </Gx>
    <Gx>
      <div className='sm-right-align'>
        <a href='//jxnblk.com' className='bold black text-decoration-none'>Made by Jxnblk</a>
      </div>
    </Gx>
  </footer>
)

/*
 *
 *   GitHub link
 *   npm link
 *   examples
 *     nested
 *     element query explaination
 *   config
 *
 */

class Root extends React.Component {
  render () {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Gx</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <link href='https://unpkg.com/basscss-basic/index.css' rel='stylesheet' />
          <link href='https://unpkg.com/basscss@8.0.0/css/basscss.min.css' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Roboto+Mono:400' rel='stylesheet' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
            <Box outline={false}>
              <Header {...this.props} />
              <Features />
              <Examples />
              <CTA />
              <Footer />
            </Box>
          <script dangerouslySetInnerHTML={{ __html: '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");' }} />
        </body>
      </html>
    )
  }
}

export default Root

