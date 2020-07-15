/**
 * Imports
 */

import test from 'tape'
import reduxLog from '../src'
import bind from '@f/bind-middleware'

/**
 * Tests
 */

test('should log', (t) => {
  let log = []
  let io = bind([reduxLog(log)])
  io({type: 'Foo'})
  io({type: 'Bar'})
  t.equal(log[0].type, 'Foo')
  t.equal(log[1].type, 'Bar')
  t.end()
})

test('should pass actions to next', (t) => {
  let log1 = []
  let log2 = []
  let io = bind([reduxLog(log1), reduxLog(log2)])
  io({type: 'Foo'})
  t.deepEqual(log1, log2)
  t.end()
})

test('should not effect return', (t) => {
  let log = []
  let io = bind([reduxLog(log), ctx => next => action => action])
  t.deepEqual(io({type: 'Foo'}), {type: 'Foo'})
  t.deepEqual(log[0], {type: 'Foo'})
  t.end()
})
