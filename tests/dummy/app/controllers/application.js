import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import LineItemValidations from "../validations/line-item-validations";
export default Controller.extend({
  LineItemValidations,
  lineItem: alias("model"),
  actions:{
    something(){
    }
  }
});
