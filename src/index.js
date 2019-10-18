module.exports = function check(str, bracketsConfig) {
    let result = str.split('');
    let brackets = '';
    let bracketsStack = [];
    //brackets = bracketsConfig.flat().join('');
    for (let j = 0; j < bracketsConfig.length; j++) {
        brackets += `${bracketsConfig[j][0]}${bracketsConfig[j][1]}`;
    };

    for (let i = 0; i < result.length; i++) {

        if (brackets.includes(result[i])) {

            if ((brackets.lastIndexOf(result[i]) % 2 === 1)
                && (brackets.lastIndexOf(result[i]) === brackets.indexOf(result[i]))) {

                if (!bracketsStack.length) {
                    return false;
                }

                (brackets.indexOf(`${bracketsStack[bracketsStack.length - 1]}${result[i]}`) === -1)
                    ? (() => { return false })()
                    : bracketsStack.pop();

            } else if (brackets.lastIndexOf(result[i]) !== brackets.indexOf(result[i])) {

                if (bracketsStack.includes(result[i])) {

                    (brackets.indexOf(`${bracketsStack[bracketsStack.length - 1]}${result[i]}`) === -1)
                        ? (() => { return false })()
                        : bracketsStack.pop();

                } else {
                	bracketsStack.push(result[i]);
                }

            } else {
            	bracketsStack.push(result[i]);
            }
        }
    }
    return !bracketsStack.length ? true : false;
}

