import DS from 'ember-data';

let Item = DS.Model.extend({
  name: DS.attr('string'),
  manufacturer: DS.attr('string'),

  prescription: DS.belongsTo('prescription')
});

export default Item;

let FIXTURES = [];
let id = 1;
let idStep = 0;
for (let prescription = 1; prescription <= 9; prescription++) {
  for (let idLoop = 0; idLoop < 3; idLoop++) {
    FIXTURES.push({ id, name: 'Item ' + id, manufacturer: "Test Hersteller", prescription });
    id++;
  }
  if (idStep++ == 2) {
    idStep = 0;
    id++;
  }
}

FIXTURES.forEach(item => {
  console.log(item.prescription, item.id);
});

Item.reopenClass({ FIXTURES });
