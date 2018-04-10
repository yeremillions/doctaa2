Template.questionForm.events({
    'submit .questionPost': function(event){
        event.preventDefault();
        // Get Variable Data from Question Form
       var questionTitle = event.target.questionTitle.value;
        var questionDetail = event.target.questionDetail.value;

        //Check that form fields are not empty
        if (isNotEmpty(questionTitle) &&
            isNotEmpty(questionDetail)) {

            Meteor.call('addQuestion', questionTitle, questionDetail);

            event.target.questionTitle.value = "";
            event.target.questionDetail.value = "";

            Bert.alert("Your question Was Posted!", "success", "growl-top-right");

        } else {

            Bert.alert("something went wrong", "danger", "growl-top-right");
        }

        return false; // prevent submit
    }
});

// Validation Rules

var isNotEmpty = function(value){
    if (value && value !== ''){
        return true;
    }
    Bert.alert("Please fill in all fields", "danger", "growl-top-right");
    return false;
};