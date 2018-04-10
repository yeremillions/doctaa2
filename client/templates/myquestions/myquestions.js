Template.myquestions.helpers({
    userQuestions: function () {
        var userId = Meteor.userId();
        var userQuestions = Questions.find({userId: userId}, {sort: {createdAt: -1}});
        return userQuestions;
    }
});