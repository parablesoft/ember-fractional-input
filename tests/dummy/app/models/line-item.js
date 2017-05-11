import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  details: attr("raw", {defaultValue: {width: 0,left_height: 0, right_height: 0 }}),
  width: Ember.computed.alias("details.width"),
});
