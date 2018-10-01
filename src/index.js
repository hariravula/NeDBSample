var Datastore = require('nedb');

var db = new Datastore({ filename: 'fruit.json' });
db.loadDatabase();

db.insert({ name: 'mango', color: 'yellow' });
db.insert({ name: 'pear', color: 'green' });

db.find({ color: 'yellow' }, function(err, docs) {
    console.log('\nYellow fruit: ' + JSON.stringify(docs));
});

db.find({}, function(err, docs) {
    console.log('\nAll fruit: ' + JSON.stringify(docs));
});

console.log('\nUpdating yellow fruit to strawberry...');
db.update({ name: 'mango' }, { name: 'strawberry', color: 'red' }, {});

db.remove({ color: 'green' }, {});

db.find({}, function(err, docs) {
    console.log('\nAfter removing green fruit: ' + JSON.stringify(docs));
});

// setting index 
db.ensureIndex({ fieldName: 'color'});