import DS from 'ember-data';

let Mail = DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('date'),

  prescriptions: DS.hasMany('prescription', { async: true })
});

export default Mail;

Mail.reopenClass({
  FIXTURES : [
    { id: 1, title: "Mail A", date: new Date(), prescriptions: [1, 2, 3] },
    { id: 2, title: "Mail B", date: new Date(), prescriptions: [4, 5, 6] },
    { id: 3, title: "Mail C", date: new Date(), prescriptions: [7, 8, 9] },
  ]
});
