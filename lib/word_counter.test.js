const { word_counter } = require('./word_counter')

test('count words in text 1', () => {
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

test('count words in text 2', () => {
    let input = "Wort, test, Wort, hello. Test. Test"

    expect(word_counter(input)).toEqual([
        ['test', 3],
        ['wort', 2],
        ['hello', 1]
    ])
})

test('count words in empty text', () => {
    let input = ""

    expect(word_counter(input)).toEqual([])
})