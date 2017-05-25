import Ember from 'ember';
import layout from '../templates/components/fractional-input';

export default Ember.Component.extend({
  layout,
  classNames:["ember-fractional-input"],
  "wrapper-class": "form-group",
  "input-class": "form-control",
  placeholder: 'Enter your value',
  actions:{
    blurred(){
     if(this.attrs["on-blur"]){
       this.attrs["on-blur"]();
     }
    }
  },
  denominator: 16,
  fractions: Ember.computed(function(){
    let denominator = this.get("denominator");
    let result = Ember.A();
    for(let i = 1; i < denominator; i++){
      result.pushObject({value: parseFloat(i/denominator), display: `${i}/${denominator}`});
    }
    return result;
  }),

  valueWhole: Ember.computed({
    get(key){
      return this.getWhole("value");
    },
    set(key,value){
      return this.setWhole("value",value);
    }
  }),
  valueFraction: Ember.computed({
    get(key){
      return this.getFraction("value");
    },
    set(key,value){
      return this.setFraction("value",value);
    }
  }),
  getWhole(key){
    let fullNumber = this.get(key);
    if(fullNumber===undefined)
      return "";

    return parseInt(fullNumber);
  },
  setWhole(key,value){
    let calcValue = this.calcValue(value);
    let unit = this.get(key);
    let fraction = this.calcValue(this.get(`${key}Fraction`));
    this.set(key, parseFloat(calcValue) + parseFloat(fraction));
    return value;
  },
  getFraction(key){
    let fraction = this.get(key);
    return  fraction - parseInt(fraction);
  },
  setFraction(key,value){
    let calcValue = this.calcValue(value);
    let unit = this.get(key);
    let whole = this.calcValue(this.get(`${key}Whole`));

    this.set(key, parseFloat(whole) + parseFloat(calcValue));
    return value;
  },
  calcValue(value){
    return Ember.isEmpty(value) || isNaN(value) ? 0 : value;
  }
});
