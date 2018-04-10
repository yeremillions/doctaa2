import {Meteor} from "meteor/meteor";

 Meteor.publish("doctors", function(){
    var result = [];
    if (Roles.userIsInRole(this.userId, ['admin', 'patient', 'staff', 'doctor'])) {
        Meteor.users.find({ roles: { $in: ['doctor'] } });
    } else {
        this.stop();
        // YOUUU SHALL NOT.... PASS!!!
    }
    return result;
});

Meteor.publish('doctorList', function (){
    return Meteor.users.find({});
});

Meteor.publish('doctorUsers', function(){
  return Meteor.users.find({ roles: { $in: ['doctor'] } });
});