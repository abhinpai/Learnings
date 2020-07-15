
# redux-log

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Simple log of redux actions, good for testing.

## Installation

    $ npm install redux-log

## Usage

```js
import reduxLog from 'redux-log'
import flow, {flo} from 'redux-flo'
import bind from '@f/bind-middleware'

var log = []
var io = bind([reduxLog(log)])

io({type: 'FETCH'})
log // => [{type: 'FETCH'}]
```

## API

### reduxLog(log)

- `log` - an array to store the actions in

**Returns:** redux style middleware

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/redux-log.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/redux-log
[git-image]: https://img.shields.io/github/tag/joshrtay/redux-log.svg
[git-url]: https://github.com/joshrtay/redux-log
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/redux-log.svg?style=flat-square
[npm-url]: https://npmjs.org/package/redux-log
