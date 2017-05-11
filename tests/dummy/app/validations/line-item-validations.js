import { validateNumber } from 'ember-changeset-validations/validators';

export default {
  width: validateNumber({ gt: 0.5})
}
