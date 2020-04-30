const { word_counter } = require('../lib/word_counter')

test('count words in text', () => {
    let input = "No, no, no, I kill the bus driver."

    expect(word_counter(input)).toEqual([
        ['no', 3],
        ['i', 1],
        ['kill', 1],
        ['the', 1],
        ['bus', 1],
        ['driver', 1]
    ])
})

test('count words in empty text', () => {
    let input = ""

    expect(word_counter(input)).toEqual([])
})