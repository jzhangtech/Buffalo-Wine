Meteor.methods({
  'Items.insert': function (params) {
    Items.insert(params);
  },
  'Items.updatename': function (id,value) {
  	var id=id;
  	var value=value;
  	Items.update(id,{$set:{ name : value }});
  },
  'Items.updatedescription': function (id,value) {
  	var id=id;
  	var value=value;
  	Items.update(id,{$set:{ description : value }});
  },
  'Items.updatetype': function (id,value) {
  	var id=id;
  	var value=value;
  	Items.update(id,{$set:{ type : value }});
  },
  'Items.updatelevel': function (id,value) {
  	var id=id;
  	var value=value;
  	Items.update(id,{$set:{ level : value }});
  },
  'Items.updatesize': function (id,value) {
  	var id=id;
  	var value=value;
  	Items.update(id,{$set:{ size : value }});
  },
  'Items.updatepair': function (id,value) {
  	var id=id;
  	var value=value;
  	Items.update(id,{$set:{ pair : value }});
  },
  'Items.updateregion': function (id,value) {
    var id=id;
    var value=value;
    Items.update(id,{$set:{ region : value }});
  },
   'remove-wine': function (id) {
    var id=id;
    Items.remove({_id:id});
  }
});
