define(function (require) {
    console.log("1")
    if (true){
        require('./b.js');
    }else {
        require('./c.js');
    }
})