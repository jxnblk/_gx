
import React from 'react'
import ReactDOM from 'react-dom'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import expect from 'expect'
import Gx from '../src/Gx'

const renderer = new ReactShallowRenderer();

describe('Gx', () => {

  it('should render a div', () => {
    renderer.render(<Gx children='Gx' />)
    const tree = renderer.getRenderOutput()
    expect(tree.type).toEqual('div')
  })

  it('should render with default styles', () => {
    renderer.render(<Gx children='Gx' />)
    const tree = renderer.getRenderOutput()
    expect(tree.props.style.minWidth).toEqual('50%')
    expect(tree.props.style.width).toEqual(`calc(${512 * 512}px - 51200%)`)
  })

  context('when `col` prop is set', () => {
    it('should change minWidth', () => {
      renderer.render(<Gx col={3} children='Gx' />)
      const tree = renderer.getRenderOutput()
      expect(tree.props.style.minWidth).toEqual('25%')
    })
  })

  context('when `breakpoint` prop is set', () => {
    it('should change width', () => {
      renderer.render(<Gx breakpoint={420} children='Gx' />)
      const tree = renderer.getRenderOutput()
      expect(tree.props.style.width).toEqual(`calc(${420 * 420}px - 42000%)`)
    })
  })

  context('when breakpoint is set with context', () => {
    it('should set a different breakpoint', () => {
      renderer.render(<Gx children='Gx' />, { gx: { breakpoint: 320 }})
      const tree = renderer.getRenderOutput()
      expect(tree.props.style.width).toEqual(`calc(${320 * 320}px - 32000%)`)
    })
  })

  context('at small widths', () => {
    if (typeof window === 'undefined') {
      return false
    }

    it('should render at full-width', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const root = ReactDOM.render(
        <div style={{ width: 256 }}><Gx /></div>,
        div
      )
      const gx = document.querySelector('.Gx')
      const width = gx.getBoundingClientRect().width
      expect(width).toEqual(256)
      ReactDOM.unmountComponentAtNode(div)
    })
  })

  context('at large widths', () => {
    if (typeof window === 'undefined') {
      return false
    }

    it('should render at half-width', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const root = ReactDOM.render(
        <div style={{ width: 1024 }}><Gx /></div>,
        div
      )
      const gx = document.querySelector('.Gx')
      const width = gx.getBoundingClientRect().width
      expect(width).toEqual(512)
      ReactDOM.unmountComponentAtNode(div)
    })
  })
})

