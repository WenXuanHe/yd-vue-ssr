var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();
var arr = [0, 1, 3, 45, 67, 34];
var callback = function(item) {
    return item;
}
suite.add('nativeMap', function(argument) {
    return arr.map(callback);
}).add('cusTomMap', function() {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        ret.push(callback[arr[i]]);
    }
}).on('cycle', function(event) {
    console.log(String(event.target));
}).on('complete', function() {
    console.log('更快的方法是' + this.filter('fastest').pluck('name'));
}).run();