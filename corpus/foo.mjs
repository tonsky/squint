const log = console.log;
log("hello");
log((1 + 2 + 3));
(function () {
 const y = (function () {
 const x = (function () {
 log("in do");
return 12;
})();
return (function () {
 log("x + 1 =", (x + 1));
return (x + 13);
})();
})();
return (function () {
 return log("y =", y);
})();
})();