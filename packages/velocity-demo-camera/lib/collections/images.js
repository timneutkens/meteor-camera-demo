images = new Mongo.Collection('images');

if(Meteor.isServer) {
    Meteor.publish('images', function() {
        return images.find();
    });
}

Meteor.methods({
    addImage: function(imageData) {
        if(imageData !== null) {
            images.insert({ image: imageData });
        }
    }
});

