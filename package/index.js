function dashCommands(input){

    if(input == null || input.length === 0) {
        return {}
    }

    // enhance: check if the quote is preceded by a backslash
    args = input.match( /[^\s"']+|"([^"]*)"|'([^']*)'/gi )
    // console.log(args)

    if(args == null || args.length === 0){
        return {}
    }

    /**
     * removes the single & double quotes & space around the arg values
     */
    args = args.map((str) => {
        if (str.charAt(0) === '"' && str.charAt(str.length -1) === '"') {
            str = str.substr(1,str.length -2)
        }
        if (str.charAt(0) === "'" && str.charAt(str.length -1) === "'") {
            str = str.substr(1,str.length -2)
        }
        return str.trim()
    })

    // arg_clean = []
    arg_clean = {}

    for(i = 0; i < args.length; i++){
        if (args[i].charAt(0) === '-') {
            if(args[i + 1].charAt(0) != '-'){
                // arg_clean.push({[args[i].substr(1,args[i].length -1)]: args[i + 1]})
                arg_clean[args[i].substr(1,args[i].length -1)] = args[i + 1]
            }
        }
    }

    // console.log(arg_clean.title)

    return arg_clean
}

module.exports = dashCommands


// -title sometitle -date 229939 -self "visibly interest is going on" -teri "chicken" -last 'one three'
// [^\s"']+|"([^"]*)"|'([^']*)'

// https://www.py4u.net/discuss/279653