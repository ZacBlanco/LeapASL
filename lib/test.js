window.count = 0;

Leap.plugin('test1', function(scope) {
    showdata = function(prev, newtext) {
        prev += newtext + "</br></br>";
        return prev;
    }
    var el = document.getElementById("TestOutput");
    var imgs = ["alphabet/a.jpg", "alphabet/b.jpg", "alphabet/c.jpg", "alphabet/d.jpg", "alphabet/e.jpg", "alphabet/f.jpg","alphabet/g.jpg"
    , "alphabet/h.jpg", "alphabet/i.jpg", "alphabet/j.jpg", "alphabet/k.jpg", "alphabet/l.jpg", "alphabet/m.jpg",
    "alphabet/n.jpg", "alphabet/o.jpg", "alphabet/p.jpg", "alphabet/q.jpg", "alphabet/r.jpg", "alphabet/s.png",
    "alphabet/t.jpg", "alphabet/u.jpg", "alphabet/v.jpg", "alphabet/w.jpg", "alphabet/x.jpg", "alphabet/y.jpg", "alphabet/z.jpg"]

    getnormalized = function(d) {
      return Math.sqrt(d[0]*d[0] + d[1]*d[1] + d[2]*d[2])
    }

    slideShow = function(count) {
      pic.src = imgs[Math.floor(count)];
    }

    var pic = document.getElementById("handPics")
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
              if(getnormalized(frame.hands[0].palmVelocity) <= 100) {
                window.count += 0.1;
                if(window.count > 25) {
                  window.count = 0;
                }
                slideShow(window.count)
              }
//              data = showdata(data, JSON.stringify(frame.hands[0]));
            }

            el.innerHTML = data;
        }
    };
});
