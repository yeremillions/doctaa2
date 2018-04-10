alreadyFavourited = function (userId){
    var user = Meteor.user(); // check if a user if logged in

    return  user && // Return true if there is a user logged in
            user.profile && //and they have a profile
            user.profile.favouriteDoctors && //and they have some favourited doctors
            user.profile.favouriteDoctors.indexOf(userId) > -1; //and this userID is in their list of favourited doctors
}