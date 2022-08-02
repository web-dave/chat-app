import { MsgComponent } from './msg.component';
import { initEnv, mount } from 'cypress-angular-unit-test';

describe('Message Component', () => {
  it('should shpw message and author', () => {
    initEnv(MsgComponent);
    mount(MsgComponent);
  });
});
