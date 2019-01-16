import * as types from './mutationTypes';
import axios from 'axios';

export const addItemToCart = ({commit}, payload) =>{
    commit(types.ADD_ITEM_TO_CART, payload);
};
export const checkout = async ({commit}, payload) =>{
    try{
        const response  = await axios.post("https://coursework-project-alexstefan.c9users.io:8081/addFactura",payload);
        commit(types.CHECKOUT);
    }
    catch(e) {
        console.log(e.message);
    }
};
export const deleteItemFromCart = ({commit}, payload) =>{
    commit(types.DELETE_ITEM_FROM_CART, payload);
};
export const addBook = async({commit}, payload) => {
  try{
      const response = await axios.post("https://coursework-project-alexstefan.c9users.io:8081/add",payload);
      commit(types.ADD_BOOK);
  }
  catch(e){
      console.log(e.message);
  }
};
export const addMonitor = async({commit}, payload) => {
  try{
      const response = await axios.post("https://coursework-project-alexstefan.c9users.io:8081/addMonitor",payload);
      commit(types.ADD_MONITOR);
  }
  catch(e){
      console.log(e.message);
  }
};
export const addMouse = async({commit}, payload) => {
  try{
      const response = await axios.post("https://coursework-project-alexstefan.c9users.io:8081/addMouse",payload);
      commit(types.ADD_MOUSE);
  }
  catch(e){
      console.log(e.message);
  }
};
export const addVideo = async({commit}, payload) => {
  try{
      const response = await axios.post("https://coursework-project-alexstefan.c9users.io:8081/addPlacaVideo",payload);
      commit(types.ADD_VIDEO);
  }
  catch(e){
      console.log(e.message);
  }
};
export const addChair = async({commit}, payload) => {
  try{
      const response = await axios.post("https://coursework-project-alexstefan.c9users.io:8081/addScaun",payload);
      commit(types.ADD_CHAIR);
  }
  catch(e){
      console.log(e.message);
  }
};
export const showDetails = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findBook?id="+payload.id);
        commit(types.SHOW_DETAILS, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const favorite = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findBookIncreaseRating?id="+payload.id);
        commit(types.FAVORITE, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const showDetailsMonitor = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findMonitor?id="+payload.id);
        commit(types.SHOW_DETAILS, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const favoriteMonitor = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findMonitorIncreaseRating?id="+payload.id);
        commit(types.FAVORITE, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const showDetailsVideo = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findPlacaVideo?id="+payload.id);
        commit(types.SHOW_DETAILS, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const favoriteVideo = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findPlacaVideoIncreaseRating?id="+payload.id);
        commit(types.FAVORITE, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const showDetailsMouse = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findMouse?id="+payload.id);
        commit(types.SHOW_DETAILS, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const favoriteMouse = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findMouseIncreaseRating?id="+payload.id);
        commit(types.FAVORITE, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const showDetailsScaun = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findScaun?id="+payload.id);
        commit(types.SHOW_DETAILS, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const favoriteScaun = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findScaunIncreaseRating?id="+payload.id);
        commit(types.FAVORITE, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const modCarte = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findUpdateBook?id="+payload.id+"&nume="+payload.nume+"&autor="+payload.autor+"&numarPagini="+payload.numarPagini+"&pret="+payload.pret+"&link="+payload.link);
        commit(types.MOD_CARTE, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const modMonitor = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findUpdateMonitor?id="+payload.id+"&nume="+payload.nume+"&producator="+payload.producator+"&serie="+payload.serie+"&rezolutie="+payload.rezolutie+"&diagonala="+payload.diagonala+"&numarFPS="+payload.numarFPS+"&pret="+payload.pret+"&link="+payload.link);
        commit(types.MOD_MONITOR, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const modMouse = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findUpdateMouse?id="+payload.id+"&nume="+payload.nume+"&producator="+payload.producator+"&serie="+payload.serie+"&dpi="+payload.dpi+"&numarButoane="+payload.numarButoane+"&ambidextru="+payload.ambidextru+"&pret="+payload.pret+"&link="+payload.link);
        commit(types.MOD_MOUSE, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const modVideo = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findUpdateVideo?id="+payload.id+"&nume="+payload.nume+"&producator="+payload.producator+"&serie="+payload.serie+"&memorie="+payload.memorie+"&frecventa="+payload.frecventa+"&slot="+payload.slot+"&pret="+payload.pret+"&link="+payload.link);
        commit(types.MOD_VIDEO, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const modScaun = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findUpdateScaun?id="+payload.id+"&nume="+payload.nume+"&producator="+payload.producator+"&serie="+payload.serie+"&greutateMaxima="+payload.greutateMaxima+"&niveleInaltime="+payload.niveleInaltime+"&pret="+payload.pret+"&link="+payload.link);
        commit(types.MOD_SCAUN, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const addUser = async({commit}, payload) => {
  try{
      const response = await axios.post("https://coursework-project-alexstefan.c9users.io:8081/addUser",payload);
      if(response.data === 0) commit(types.ADD_USER);
      else commit(types.ADD_USER_FAILED);
  }
  catch(e){
      console.log(e.message);
  }
};
export const findUser = async({commit}, payload) => {
    try{
        const response = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/findUser?email="+payload.email+"&parola="+payload.parola);
        if(response.data === null) commit(types.FIND_USER_LOGIN_FAILED,response.data);
        else commit(types.FIND_USER_LOGIN, response.data);
    }
    catch(e){
        console.log(e.message);
    }
};
export const logOut = async ({commit}, payload) =>{
    try{
        commit(types.LOG_OUT);
    }
    catch(e) {
        console.log(e.message);
    }
};




