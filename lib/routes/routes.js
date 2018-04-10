Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    //Home Route
    this.route('dashboard', {path: '/'});

    //Login Route
    this.route('login');

    //My Questions Route
    this.route('myquestions');

    //Consult a Doctor Route
    this.route('consult');

    //Health Condition Route
    this.route('condition');

    //User Uploaded Condition Route
    this.route('myimages');

    //Register and account registration
    this.route('register');

    //Questions Route
    this.route('questions');

    //Comments Route
    this.route('comments');

    //Doctors List Route
    this.route('doctors');
});

Router.onBeforeAction(function () {
    if  (!Meteor.userId() && !Meteor.loggingIn()) {
        this.redirect('login');
        this.stop();
    } else {
        this.next();
    }
},{except: ['login', 'register'] });