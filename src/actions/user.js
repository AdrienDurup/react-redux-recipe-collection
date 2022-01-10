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
  // payload: { [field]: value }, /* dynamic key name */
});

export const actionConnectWithToken = () => ({
  type: userT.AUTHENT_WITH_TOKEN,
});

export const actionAuthentFail = () => ({/* payload is field name */
  type: userT.AUTHENT_FAILURE,
});

export const actionSetListWithFavs = (payload) => ({
  type: userT.SET_RECIPES, /*  type:userT.SET_RECIPES, */
  payload,
});
