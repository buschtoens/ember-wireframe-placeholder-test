/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: function(i) {
    return 'Posteingang Nr. ' + i;
  },
  date: new Date()
});
