import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | fractional input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{fractional-input}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#fractional-input}}
        template block text
      {{/fractional-input}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
