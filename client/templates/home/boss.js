Session.setDefault("region","all")
Session.setDefault("type","all")

Template.bossPage.helpers({
  'boss':function(){
    var boss=true;
  
    return boss;
  }
})
Template.bossPage.helpers({
  'wine':function(){
      var category=Session.get("region");
      var type=Session.get("type");
      
      if(category=="all"&&type=="all"){
          return Items.find({});
          }
      else if(category=="China"||category=="Japan"||category=="Korea"||category=="America"){
           if(type=="Hard Liquor"||type=="Sake"||type=="Soju"||type=="Wine"){
            return Items.find({region:category,type:type});
          }else{
            return Items.find({region:category});
          }
        }
      else if(type=="Hard Liquor"||type=="Sake"||type=="Soju"||type=="Wine"){
           if(category=="China"||category=="Japan"||category=="Korea"||category=="America"){
            return Items.find({region:category,type:type});
          }else{
            return Items.find({type:type});
          }
        }
      } 
    });

Template.bossPage.events({
  'click #remove-wine': function(e){
      e.preventDefault();
      var r = confirm("are your sure you want to delete?");
      if (r == true) {
        var id=this._id;
        Meteor.call("remove-wine", id);
      }
    }
  });

Template.bossPage.events({
  'click .typeall': function() {
  Session.set("type","all")
  document.getElementById("Sake").checked=false;
  document.getElementById("Soju").checked=false;
  document.getElementById("HardLiquor").checked=false;
  document.getElementById("Wine").checked=false;
  
  },
  'click .regionall': function() {
   Session.set("region","all")
   document.getElementById("China").checked=false;
   document.getElementById("Japan").checked=false;
   document.getElementById("Korea").checked=false;
   document.getElementById("America").checked=false;
  },
  'click #filterall':function(){
    Session.set("region","all")
    Session.set("type","all")
    document.getElementById("China").checked=false;
    document.getElementById("Japan").checked=false;
    document.getElementById("Korea").checked=false;
    document.getElementById("America").checked=false;
    document.getElementById("Sake").checked=false;
    document.getElementById("Soju").checked=false;
    document.getElementById("HardLiquor").checked=false;
    document.getElementById("Wine").checked=false;
  }
});

Template.bossPage.events({
  'click #China': function() {
    Session.set("region","China") 
  },
  'click #HardLiquor': function() {
    Session.set("type","Hard Liquor") 
   }
});
Template.bossPage.events({
  'click #Japan': function() {
    Session.set("region","Japan") 
  },
  'click #Sake': function() {
    Session.set("type","Sake") 
   }
});
Template.bossPage.events({
  'click #Korea': function() {
    Session.set("region","Korea") 
  },
  'click #Soju': function() {
    Session.set("type","Soju") 
   }
});
Template.bossPage.events({
  'click #America': function() {
    Session.set("region","America") 
  },
  'click #Wine': function() {
    Session.set("type","Wine") 
   }
});



Template.bossPage.events({
  'change .name': function(e){
     
      e.preventDefault();
      var id=this._id;
      var wineid=id+"name";
      var value = document.getElementById(wineid).value;
      Meteor.call("Items.updatename", id, value);
     
  },
    'change .description': function(e){
     
      e.preventDefault();
      var id=this._id;
      var wineid=id+"description";
      var value = document.getElementById(wineid).value;
      Meteor.call("Items.updatedescription", id, value);
     
  },
    'change .type': function(e){
     
      e.preventDefault();
      var id=this._id;
      var wineid=id+"type";
      var value = document.getElementById(wineid).value;
      Meteor.call("Items.updatetype", id, value);
     
  },
    'change .level': function(e){
     
      e.preventDefault();
      var id=this._id;
      var wineid=id+"level";
      var value = document.getElementById(wineid).value;
      Meteor.call("Items.updatelevel", id, value);
     
  },
    'change .size': function(e){
     
      e.preventDefault();
      var id=this._id;
      var wineid=id+"size";
      var value = document.getElementById(wineid).value;
      Meteor.call("Items.updatesize", id, value);
     
  },
   'change .pair': function(e){
     
      e.preventDefault();
      var id=this._id;
      var wineid=id+"pair";
      var value = document.getElementById(wineid).value;
      Meteor.call("Items.updatepair", id, value);
     
  },
   'change .region': function(e){
     
      e.preventDefault();
      var id=this._id;
      var wineid=id+"region";
      var value = document.getElementById(wineid).value;
      Meteor.call("Items.updateregion", id, value);
     
  }
});

  