Template.register.rendered = function() {

}

Template.register.events({
    "submit .form-register": function(event){
        var username = trimInput(event.target.username.value);
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        var confirm = trimInput(event.target.password2.value);

        if(isNotEmpty(email) &&
            isNotEmpty(username) &&
            isNotEmpty(password) &&
            isEmail(email) &&
            areValidPasswords(password, confirm)) {

            Accounts.createUser({
                username: username,
                email: email,
                password: password,
                profile: {
                    upvotes: 0,
                    downvotes: 0,
                }
            }, function(err){
                if(err){
                    Bert.alert(err.reason, "danger", "growl-top-right");
                } else {
                    Bert.alert("Account Created! You Are Now Logged In", "success", "growl-top-right");
                    Router.go("/");

                }
            });

        }

        return false; // prevent submit

    }
});

// Validation Rules

//01.  Trim Helper
var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g, "");
};

//02.  Ensure all required fields are filled
var isNotEmpty = function(value){
    if (value && value !== ''){
        return true;
    }
    Bert.alert("Please fill in all fields", "danger", "growl-top-right");
    return false;
};

//03. Regex function to Validate Email
isEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(filter.test(value)) {
        return true;
    }
    Bert.alert("Please use a valid email address", "danger", "growl-top-right");
    return false;
};

// 04. Ensure Password is up to minimum length of 6 characters
isValidPassword = function(password){
    if(password.length <6) {
        Bert.alert("Password must be at least 6 characters", "danger", "growl-top-right");
        return false;
    }
    return true;
};

// 05. Match Password and confirm password fields
areValidPasswords = function(password, confirm) {
    if(!isValidPassword(password)) {
        return false;
    }
    if(password !== confirm) {
        Bert.alert("Passwords do not match", "danger", "growl-top-right");
        return false;
    }
    return true;
};











