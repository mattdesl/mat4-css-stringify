var scratch = new Array(16)
for (var i=0; i<16; i++)
    scratch[i] = 0

module.exports = function stringify(matrix) {
   for (var i=0; i<16; i++) 
      scratch[i] = Math.round(matrix[i]*1e15) / 1e15
   return 'matrix3d('+scratch.join(', ')+')'
}

// benchmark:
// http://jsperf.com/stringify-mat4