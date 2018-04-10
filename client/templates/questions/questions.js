// Find all questions in the collection and make them available to the template in questions page
Template.questions.helpers({
    questions: function () {
        var questions = Questions.find({}, {sort: {createdAt: -1}});
        return questions;
    }
});