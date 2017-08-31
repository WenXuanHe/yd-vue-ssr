const Ydlibs = (function () {
  function increment (count) {
    if (!isNaN(count)) {
      return ++count
    } else {
      return 0
    }
  }

  function decrement (count) {
    return --count
  }
  return {
    increment,
    decrement
  }
})();
// console.log('客户端系统环境',process.env.NODE_ENV);
//  if (process.env.NODE_ENV == "development") {
// //   //专为测试而生
//   if (typeof(window)) {
//     window.ydlibs = Ydlibs
//   }
// }
export default Ydlibs
