import { module, test } from 'qunit';
import { setupTest } from 'learning-ember/tests/helpers';

module('Unit | Controller | chat-room', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:chat-room');
    assert.ok(controller);
  });
});
