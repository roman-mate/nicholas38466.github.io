var colors = {
    "test3": {
        "1": "#9a4343 ",
        "3": "#a98181 ",
        "5": "#b52b2b ",
        "7": "#907c7c "
    },
    "test1": {
        "test2": {
            "test5": {
                "2": "#774c4c ",
                "4": "#cc9999 "
            }
        },
        "test4": {
            "6": "#385f82 ",
            "8": "#9a5a5a "
        }
    }
};

function paintElaments(colors) {
    if(!Array.isArray(colors)) throw new Error(colors + ' is not an Array');
}

console.log(typeof colors);