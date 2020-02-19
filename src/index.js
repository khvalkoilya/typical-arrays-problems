
exports.min = function min (array) {
  return arguments.length==0 || array.length==0 ?0:array.sort((a,b)=>(a-b))[0] ;
}

exports.max = function max (array) {
    return arguments.length==0 || array.length==0 ?0:array.sort((a,b)=>(a-b))[array.length-1];
}

exports.avg = function avg (array) {
    return arguments.length==0 || array.length==0 ?0:array.reduce(function(sum,item){ return sum+=item;},0)/array.length;
}


