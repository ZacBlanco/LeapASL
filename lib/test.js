Leap.plugin('test1', function(scope) {
    showdata = function(prev, newtext) {
        prev += newtext + "</br></br>";
        return prev;
    }
    var el = document.getElementById("TestOutput");
    return {
        frame: function(frame) {
            data = ""
            // console.log(el)
            // console.log(data)
            data = showdata(data, frame.toString());
            el.innerHTML = data;
        }
    };
});