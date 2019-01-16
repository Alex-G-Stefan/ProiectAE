import * as types from './mutationTypes';

export default {
    [types.ADD_ITEM_TO_CART]: (state, payload) => {
      const index = state.order.findIndex(item => item.id === payload.id)
      if (index === -1) state.order.push(payload);
    },
    [types.CHECKOUT]: (state) =>{
      state.order=[];
    },
    [types.DELETE_ITEM_FROM_CART]: (state,payload)=>{
      const index = state.order.findIndex(item => item.id === payload.id)
      state.order.splice(index,1);
    },
    [types.ADD_BOOK]: (state) =>{
      alert("Produs inregistrat cu succes");
    },
    [types.ADD_MONITOR]: (state) =>{
      alert("Produs inregistrat cu succes");
    },
    [types.ADD_MOUSE]: (state) =>{
      alert("Produs inregistrat cu succes");
    },
    [types.ADD_VIDEO]: (state) =>{
      alert("Produs inregistrat cu succes");
    },
    [types.ADD_CHAIR]: (state) =>{
      alert("Produs inregistrat cu succes");
    },
    [types.SHOW_DETAILS]: (state, payload) =>{
      state.details = payload;
    },
    [types.FAVORITE]: (state, payload) =>{
      state.details = payload;
    },
    [types.MOD_CARTE]: (state, payload) =>{
      state.details = payload;
    },
    [types.MOD_MONITOR]: (state, payload) =>{
      state.details = payload;
    },
    [types.MOD_MOUSE]: (state, payload) =>{
      state.details = payload;
    },
    [types.MOD_VIDEO]: (state, payload) =>{
      state.details = payload;
    },
    [types.MOD_SCAUN]: (state, payload) =>{
      state.details = payload;
    },
    [types.ADD_USER]: (state) =>{
      alert("User Inregistrat cu succes!");
    },
    [types.ADD_USER_FAILED]: (state) =>{
      alert("Email-ul exista deja!");
    },
    [types.FIND_USER_LOGIN]: (state, payload) =>{
      state.user = payload;
      alert("User a fost gasit!");
    },
    [types.FIND_USER_LOGIN_FAILED]: (state, payload) =>{
      alert("User nu a fost gasit!");
    },
    [types.LOG_OUT]: (state) =>{
      state.user=null;
    }
};