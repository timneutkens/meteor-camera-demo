Template.cameraTool.events({
    "click .camera-tool-button": function(event) {
        //MeteorCamera.getPicture(function() {
        //    Meteor.call('addImage', image);
        //});
        MeteorCamera.getPicture({quality: 100, width: 300, height: 300}, function(error, response) {
            if(response !== null) {
                Meteor.call('addImage', response);
            }
        });
    }
});