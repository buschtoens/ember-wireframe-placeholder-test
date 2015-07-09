import DS from 'ember-data';

let Prescription = DS.Model.extend({
  title: DS.attr('title'),
  cost: DS.attr('number'),

  mail: DS.belongsTo('mail', { async: true }),
  items: DS.hasMany('prescription-item', { async: true })
});

export default Prescription;

Prescription.reopenClass({
  FIXTURES: [
    { id: 1, title: "Rezept A", date: new Date(), items: [1, 2, 3], mail: 1 },
    { id: 2, title: "Rezept B", date: new Date(), items: [4, 5, 6], mail: 1 },
    { id: 3, title: "Rezept C", date: new Date(), items: [7, 8, 9], mail: 1 },

    { id: 4, title: "Rezept D", date: new Date(), items: [11, 12, 13], mail: 2 },
    { id: 5, title: "Rezept E", date: new Date(), items: [14, 15, 16], mail: 2 },
    { id: 6, title: "Rezept F", date: new Date(), items: [17, 18, 19], mail: 2 },

    { id: 7, title: "Rezept G", date: new Date(), items: [21, 22, 23], mail: 3 },
    { id: 8, title: "Rezept H", date: new Date(), items: [24, 25, 26], mail: 3 },
    { id: 9, title: "Rezept I", date: new Date(), items: [27, 28, 29], mail: 3 }
  ]
});
