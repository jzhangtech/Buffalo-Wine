Session.setDefault("region","all")
Session.setDefault("type","all")
Session.setDefault("wineid","default")
Session.setDefault("page", 0)

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
Template.home.events({
  'click .page-number': function() {
    Session.set("page",this.num-1);
    
  }
});

Template.home.helpers({
  'page':function(){
    var category=Session.get("region");
    var type=Session.get("type");
    var count;
    if(category=="all"&&type=="all"){
      count = Items.find({}).count();
    }
    else if(category=="China"||category=="Japan"||category=="Korea"||category=="America"){
      if(type=="Hard Liquor"||type=="Sake"||type=="Soju"||type=="Wine"){
        count = Items.find({region:category,type:type}).count();
      }else{
        count = Items.find({region:category}).count();
      }
    }
    else if(type=="Hard Liquor"||type=="Sake"||type=="Soju"||type=="Wine"){
      if(category=="China"||category=="Japan"||category=="Korea"||category=="America"){
        count = Items.find({region:category,type:type}).count() ;
      }else{
        count = Items.find({type:type}).count();
      }
    }
    var counter=count/9;
    var pageArray=[];
    for (var i = 0; i<counter; i++) {
      pageNum=i+1;
      pageArray.push({num:pageNum});
    };
    return pageArray;
  }
})

Template.home.helpers({
	'wine':function(){
      var category=Session.get("region");
      var type=Session.get("type");
      var page=Session.get("page")*9;

		  
      if(category=="all"&&type=="all"){
          return Items.find({},{limit:9,skip:page});
          }
      else if(category=="China"||category=="Japan"||category=="Korea"||category=="America"){
           if(type=="Hard Liquor"||type=="Sake"||type=="Soju"||type=="Wine"){
            return Items.find({region:category,type:type},{limit:9,skip:page});
          }else{
            return Items.find({region:category},{limit:9,skip:page});
          }
        }
      else if(type=="Hard Liquor"||type=="Sake"||type=="Soju"||type=="Wine"){
           if(category=="China"||category=="Japan"||category=="Korea"||category=="America"){
            return Items.find({region:category,type:type},{limit:9,skip:page});
          }else{
            return Items.find({type:type},{limit:9,skip:page});
          }
        }
      } 
    });
Template.home.events({
  'click .typeall': function() {
  Session.set("type","all")
   Session.set("page", 0);
  document.getElementById("Sake").checked=false;
  document.getElementById("Soju").checked=false;
  document.getElementById("HardLiquor").checked=false;
  document.getElementById("Wine").checked=false;

  
  },
  'click .regionall': function() {
   Session.set("region","all")
  Session.set("page", 0);
   document.getElementById("China").checked=false;
   document.getElementById("Japan").checked=false;
   document.getElementById("Korea").checked=false;
   document.getElementById("America").checked=false;
  },
  'click #filterall':function(){
    Session.set("region","all")
    Session.set("type","all")
    Session.set("page", 0);
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
    Session.set("page", 0);	
  },
  'click #HardLiquor': function() {
    Session.set("type","Hard Liquor") 
    Session.set("page", 0);  
   }
});
Template.home.events({
  'click #Japan': function() {
  	Session.set("region","Japan")	
    Session.set("page", 0); 
  },
  'click #Sake': function() {
    Session.set("type","Sake")
    Session.set("page", 0);  
   }
});
Template.home.events({
  'click #Korea': function() {
  	Session.set("region","Korea")	
    Session.set("page", 0); 
  },
  'click #Soju': function() {
    Session.set("type","Soju") 
    Session.set("page", 0); 
   }
});
Template.home.events({
  'click #America': function() {
  	Session.set("region","America")	
    Session.set("page", 0); 
  },
  'click #Wine': function() {
    Session.set("type","Wine")
    Session.set("page", 0);  
   }
});



