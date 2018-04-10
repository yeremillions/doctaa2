Template.navbar.events({
    "click .logout-link": function (event) {
        Meteor.logout(function(err) {
            if (err) {
                Bert.alert(err.reason, "danger", "growl-top-right");
            } else {
                Router.go('/');
                Bert.alert("You are now logged out", "success", "growl-top-right");
            }
        });
        },
});

Template.navbar.helpers({
    questions: function () {
        var username =  Meteor.user().username;
        return username;
    }
});