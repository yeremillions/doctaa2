if (Meteor.isServer) {
    Meteor.methods({
        // Method for adding questions
        addQuestion: function (questionTitle, questionDetail) {
            if (!Meteor.userId()) {
                throw new Meteor.Error('not authorized');
                return false;
            } else {
                var username = Meteor.user().username;
                var year = new Date().getFullYear();
                var month = new Date().getMonth() + 1;
                var day = new Date().getDate();
                var date = (month + "/" + day + "/" + year).toString();

                Questions.insert({
                    questionTitle: questionTitle,
                    questionDetail: questionDetail,
                    author: username,
                    date: date,
                    createdAt: new Date(),
                    userId: Meteor.userId(),
                });

            }
        },
          });

}