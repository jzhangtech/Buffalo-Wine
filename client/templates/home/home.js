Session.setDefault("region","all")
Session.setDefault("type","all")
Session.setDefault("wineid","default")

Template.home.events({
  'click .imagelink': function() {
    Session.set("wineid",this._id);
  }
});

Template.home.helpers({
  'getimage': function() {
    var wineId = Session.get("wineid");
    if(wineId!='default'){
      var image = Items.findOne({_id:wineId}).img;
      return image;
    }else{
      console.log('id has not been set for modal image');
    }
  }
});

Template.home.helpers({
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
Template.home.events({
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

Template.home.events({
  'click #China': function() {
  	Session.set("region","China")	
  },
  'click #HardLiquor': function() {
    Session.set("type","Hard Liquor") 
   }
});
Template.home.events({
  'click #Japan': function() {
  	Session.set("region","Japan")	
  },
  'click #Sake': function() {
    Session.set("type","Sake") 
   }
});
Template.home.events({
  'click #Korea': function() {
  	Session.set("region","Korea")	
  },
  'click #Soju': function() {
    Session.set("type","Soju") 
   }
});
Template.home.events({
  'click #America': function() {
  	Session.set("region","America")	
  },
  'click #Wine': function() {
    Session.set("type","Wine") 
   }
});



