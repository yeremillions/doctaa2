
Meteor.methods({

    addUserRole(role){
        if(!Meteor.user().roles){
            Roles.addUsersToRoles(Meteor.user()._id, ['patient']);
        }
    },

    setFavourite: function (userId) {
        var query = {};

        query[ alreadyFavourited(userId) ? '$pull' : '$push' ] = {
            'profile.favouriteDoctors': userId
        }; //check to see if doctor is already in favourite list. if doctor is, we remove doctor; if it isn't, add doctor

        Meteor.users.update(this.userId, query); //we save current changes to the collection
    }

});

