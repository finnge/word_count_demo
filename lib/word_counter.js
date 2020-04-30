exports.word_counter = (input) => {
    let split = input.toLowerCase().split(/\W/).filter(Boolean)

    let output = []

    split.forEach(word => {
        let index = output.findIndex(e => {
            return e[0] == word
        })

        // word existiert noch nicht
        if(index < 0){
            output.push([word, 1])
        }
        // word existiert bereits
        else{
            output[index][1]++
        }
    })

    return output.sort((first, second) => {
        return second[1] - first[1]
    })
}