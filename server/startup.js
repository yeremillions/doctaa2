Meteor.startup(function() {

    // user roles
    var roles = ['doctor', 'patient', 'staff', 'admin']

    // this will fail if the roles package isn't installed
    if(Meteor.roles.find().count() < 2) {
        roles.map(function(role) {
            Roles.createRole(role)
        });
    }
})


