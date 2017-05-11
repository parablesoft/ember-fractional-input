import Ember from "ember";
const {Controller} = Ember;
import LineItemValidations from "../validations/line-item-validations";
export default Controller.extend({
  LineItemValidations,
  lineItem: Ember.computed.alias("model"),
  actions:{
    something(){
    }
  }
});
