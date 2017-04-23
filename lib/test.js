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
            data = showdata(data, window.camera.position.x)
            data = showdata(data, window.camera.position.y)
            data = showdata(data, window.camera.position.z)
            if(frame.hands[0] != undefined) {
              data = showdata(data, frame.hands[0].toString());
//              data = showdata(data, JSON.stringify(frame.hands[0]));
            }

            el.innerHTML = data;
        }
    };
});
