var stringify = require('./')
var test = require('tape').test

test("stringifies a mat4 into a css matrix3d()", function(t) {
    var input = []
    for (var i=0; i<20; i++)
        input.push(i)

    t.equal(stringify(input), 'matrix3d(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)', 'handles larger arrays')
    t.equal(stringify(new Float32Array(input)), 'matrix3d(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)', 'handles typed arrays')
    t.end()
})