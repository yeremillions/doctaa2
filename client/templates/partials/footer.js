Template.footer.usercount = function () {
    return Meteor.users.find().count();
};