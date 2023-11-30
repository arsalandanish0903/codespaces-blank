// immediatly invoked funtion exopression (IIFE)

(function chai() {
    console.log("hello world");
})();

((name) => {
    console.log(`hello ${name} welcome`);
})("Arsalan")