import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from "ember";


export default Model.extend({
  details: attr("raw", {defaultValue: {left_height: 0, right_height: 0 }}),
  width: Ember.computed.alias("details.width"),
});
