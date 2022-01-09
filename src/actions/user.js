import { userT } from './types';

export const actionAuthentSubmit = () => ({
  type: userT.AUTHENT,
});

export const actionConnect = (payload) => ({
  type: userT.CONNECT,
  payload,
});

export const actionDisconnect = () => ({
  type: userT.DISCONNECT,
});

export const actionSetAuthentField = (field, value) => ({/* payload is field name */
  type: userT.UPDATE_AUTHENT_FIELD,
  payload: { field, value },
});

export const actionAuthentFail = () => ({/* payload is field name */
  type: userT.AUTHENT_FAILURE,
});
