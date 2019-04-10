import { alias } from '@ember/object/computed';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';


export default Model.extend({
  details: attr("raw", {defaultValue: {left_height: 0, right_height: 0 }}),
  width: alias("details.width"),
});
