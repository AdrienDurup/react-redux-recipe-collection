import { userT } from './types';

export const actionAuthentSubmit = () => ({
  type: userT.AUTHENT,
});

/* copy user info in state, then fetch favs */
export const actionConnect = (payload) => ({
  type: userT.CONNECT,
  payload,
});

export const actionDisconnect = () => ({
  type: userT.DISCONNECT,
});

export const actionSetAuthentField = (field, value) => ({ /* payload is field name */
  type: userT.UPDATE_AUTHENT_FIELD,
  payload: { field, value },
  // payload: { [field]: value }, /* dynamic key name */
});

export const actionAuthentFail = () => ({
  type: userT.AUTHENT_FAILURE,
});

export const actionCheckUserInStorage = () => ({
  type: userT.CHECK_STORAGE,
});
