# notify-error

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Shows a desktop notification for an error message. 

Example with [standard](https://github.com/feross/standard):

```sh
standard | notify-error
```

Result on lint error:

<img src="http://i.imgur.com/NWnDp4v.png" width="40%" />

## Install

```sh
npm install notify-error -g
```

## Examples

```sh
# with args
notify-error 'Syntax Error!'

# with stdin
notify-error < README.md
```

## Usage

[![NPM](https://nodei.co/npm/notify-error.png)](https://www.npmjs.com/package/notify-error)

### CLI

```sh
Usage:
  notify-error [message]
  cat ./message.txt | notify-error
```

If no message is specified, no alert will be shown.

The CLI will also print the error message to `stdout`.

#### config

You can add a `.notify-errorrc` file in your application or user path if you feel like configuring the defaults. Example for OSX users:

`~/.notify-errorrc`

```json
{
  "sound": "Funk"
}
```

### API

#### `notify(msg, [opt])`

Alerts with the specified `msg` string and `opt` which get passed to [node-notifier](https://www.npmjs.com/package/node-notifier).

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/notify-error/blob/master/LICENSE.md) for details.
