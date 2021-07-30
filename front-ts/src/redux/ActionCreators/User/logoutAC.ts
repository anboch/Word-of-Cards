import { logoutAction, logoutSagaAction } from './indexAC';

export const logoutAC = (): logoutAction => ({
  type: 'LOGOUT',
});

export const logoutSagaAC = (): logoutSagaAction => ({
  type: 'LOGOUT_SAGA',
});
