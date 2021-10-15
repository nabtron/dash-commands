# dash-commands-package

![version 0.0.5](https://img.shields.io/badge/version-0.0.5-red)

Converts any string into an object with key value based pairs

Flags used are "-" single dashes. 

**npm**: https://www.npmjs.com/package/dash-commands

**github**: https://github.com/nabtron/dash-commands

**developer**: [nabtron](https://nabtron.com)

## Installation

```
npm i dash-commands
```

## Usage 

```javascript
const dashCommands = require("dash-commands")

const speak = '-title sometitle -date 229939 -self "visibly interest is going on" -teri "chicken" -last \'one two \''
console.log(dashCommands(speak))
```
## Example:

### For string: 

```
'-title sometitle -date 229939 -self "visibly interest is going on" -teri "chicken" -last \'one two \''
```

### The output will be a Javascript object:

```js
{
  title: 'sometitle',
  date: '229939',
  self: 'visibly interest is going on',
  teri: 'chicken',
  last: 'one two'
}
```

