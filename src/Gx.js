
import React from 'react'

class Config {
  constructor (obj) {
    Object.assign(this, obj)
  }
  set (obj) {
    Object.assign(this, obj)
  }
}

export const config = new Config({ breakpoint: 512 })

/** Grid column component */

const Gx = ({ col, breakpoint, ...props }) => {
  const bp = breakpoint || config.breakpoint
  const style = {
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'top',
    minWidth: `${(col / 12) * 100}%`,
    maxWidth: '100%',
    width: `calc(${bp * bp}px - ${100 * bp}%)`
  }

  return <div {...props} className='Gx' style={style} />
}

Gx.propTypes = {
  /** Width of column above the breakpoint. Based on a 12 column grid. All numbers in a row should add up to 12 or less. */
  col: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /** Width in pixels at which columns render side-by-side */
  breakpoint: React.PropTypes.number
}

Gx.defaultProps = {
  col: 6
}

export default Gx

