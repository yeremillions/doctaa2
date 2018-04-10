//Template.doctors.onCreated(function () {
//    this.subscribe('doctorUsers');
//});

//Template.doctors.onCreated(function () {
//    this.subscribe('doctors');
//});

Template.doctors.helpers({
    users: function(){
        return Meteor.users.find({ username: {$not: (Meteor.user() || {}).username }}); //Search through the returned list of doctors and ensure current user is not listed.
    }
});

Template.doctors.events({
    'click #chat-button': function(event, template) {
        event.preventDefault();
        Router.go('consult');
    }
});

//Access the alreadyFavourited global function to check if doctor is alreadyfavourited function
Template.doctor.helpers({
    alreadyFavourited: alreadyFavourited
});

//Wire up the add event handler call the set setFavourite method in ../server/methods.js
Template.doctor.events({
    'click .add': function (event) {
        Meteor.call('setFavourite', this._id);
    }
});