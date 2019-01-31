import React from 'react'
import PropTypes from 'prop-types'

const width = n = n > 1 ? n : (n * 100) + '%'

const Gx = ({
  w,
  breakpoint,
  ...props
}, {
  gx = {}
}) => {
  const bp = breakpoint || gx.breakpoint || 512

  const style = {
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'top',
    maxWidth: '100%',
    minWidth: width(w),
    width: `calc(${bp * bp}px - ${100 * bp}%)`
  }

  return (
    <div
      {...props}
      style={style}
    />
  )
}

Gx.propTypes = {
  w: PropTypes.number,
  breakpoint: PropTypes.number
}

Gx.defaultProps = {
  w: 1/2
}

Gx.contextTypes = {
  gx: PropTypes.object
}

export default Gx
