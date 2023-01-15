import { module, test } from 'qunit';
import { setupTest } from 'learning-ember/tests/helpers';

module('Unit | Route | chat-room', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:chat-room');
    assert.ok(route);
  });
});
