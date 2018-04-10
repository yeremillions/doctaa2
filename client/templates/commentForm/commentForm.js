Template.commentForm.events({
    'submit .comment-post': function (event) {
        var reply = event.target.postReply.value;
        var replier = Meteor.user().username;

        if (Roles.userIsInRole(this.userId, ['doctor'])) {
            userType = 'doctor';
        }
        else {
            userType = 'patient'
        }

        Questions.update({
            _id: this._id
        }, {
            $push: {
                replies: {
                    reply: reply,
                    userType: userType,
                    replier: replier,
                    user: Meteor.userId(),
                    replyDate: new Date()
                }
            }
        });

        //Clear the form to keep things clean
        event.target.postReply.value = '';

        //Let the user know that his reply was added
        FlashMessages.sendSuccess('Reply Added');

        return false;

    }
});