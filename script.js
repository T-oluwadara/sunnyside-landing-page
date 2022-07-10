
var app = document.getElementById('writer');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('WE ARE CREATIVES!!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('TRANSFORM YOUR BRANDS,')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>REACH THE RIGHT AUDIENCE.</strong>')
    .pauseFor(2500)
    .start();