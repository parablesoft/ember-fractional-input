import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fractional-input', 'Integration | Component | fractional input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{fractional-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fractional-input}}
      template block text
    {{/fractional-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
