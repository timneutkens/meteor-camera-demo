Template.app.onCreated(function () {
    MeteorCamera.getPicture({quality: 100}, function(error, response) {
        console.log(response);
    });
});
