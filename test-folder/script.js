const dashCommands = require("dash-commands")

const speak = '-title sometitle -date 229939 -self "visibly interest is going on" -teri "chicken" -last \'one two \''
console.log(dashCommands(speak))

// -title sometitle -date 229939 -self "visibly interest is going on" -teri "chicken" -last 'one three'
// [^\s"']+|"([^"]*)"|'([^']*)'