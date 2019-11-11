export default class Errors{
  constructor(){
    this.errors = {}
  }
  
  get(filed){
    if(this.errors[filed]){
      return this.errors[filed][0];
    }
  }

  has(field){
    return this.errors.hasOwnProperty(field);
  } 

  any(){
    return Object.keys(this.errors).length > 0;
  }

  clear(field){
    (field)?(delete this.errors[field]):(this.errors = {});
  }

  record(errors){
    this.errors = errors;
  }
}