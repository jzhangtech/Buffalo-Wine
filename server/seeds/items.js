Meteor.startup(function() {

  Factory.define('item', Items, {
    name: function() { return Fake.sentence(); },
    description: function() { return Fake.sentence(); },
    category: function() { return Fake.sentence(); },
    region: function() { return Fake.sentence(); },
    level: function() { return Fake.sentence(); },
    size: function() { return Fake.sentence(); },
    type: function() { return Fake.sentence(); },
    pair: function() { return Fake.sentence(); },
    img: function() { return Fake.sentence(); }

  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

});
