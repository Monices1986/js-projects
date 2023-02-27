let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

let removedItem = secretMessage.pop()

let newItems = secretMessage.push('to', 'Program')

let changedItem = secretMessage.splice(7, 1, 'right')

let firstItem = secretMessage.shift()

let newString = secretMessage.unshift('Programming')

let removedItems = secretMessage.splice(6, 5, 'know')


console.log(secretMessage.join(' '))
