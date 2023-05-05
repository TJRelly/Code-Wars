function areYouPlayingBanjo(name) {
    first = name.toLowerCase()[0]
    return first === 'r' ? name + " plays banjo" : name + " does not play banjo"
}

const areYouPlayingBanjo = (name) => {
    first = name.toLowerCase()[0]
    return first === 'r'
        ? name + " plays banjo"
        : name + " does not play banjo"
}