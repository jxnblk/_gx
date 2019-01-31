import test from 'ava'
import React from 'react'
import { create } from 'react-test-renderer'
import Gx from './src/Gx'

test('renders', t => {
  const a = create(<Gx />).toJSON()
  t.snapshot(a)
})
