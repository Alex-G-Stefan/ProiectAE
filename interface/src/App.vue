<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/carti">Carti</router-link> |
      <router-link to="/placivideo">Placi Video</router-link> |
      <router-link to="/Monitoare">Monitoare</router-link> |
      <router-link to="/Mouse">Mouse</router-link> |
      <router-link to="/Scaune">Scaune</router-link> |
      <router-link to="/CosCumparaturi">Cos cumparaturi</router-link> | 
      <select  v-if="user && user.role==='Admin'" v-on:change="changeRoute($event.target.value)">
        <option>Adaugare Produs...</option>
        <option value="/FormPageCarte">Adauga Carte</option>
        <option value="/FormPageMonitor">Adauga Monitor</option>
        <option value="/FormPageMouse">Adauga Mouse</option>
        <option value="/FormPagePlacaVideo">Adauga Placa Video</option>
        <option value="/FormPageScaun">Adauga Scaun</option>
      </select> |
      <router-link to="/Facturi">Facturi</router-link> |
      <select v-if="user && user.role==='Admin'" v-on:change="changeRoute($event.target.value)">
        <option>Modificare Produs...</option>
        <option value="/FormPageCarteMod">Modificare Produs - Carte</option>
        <option value="/FormPageMonitorMod">Modificare Produs - Monitor</option>
        <option value="/FormPageMouseMod">Modificare Produs - Mouse</option>
        <option value="/FormPagePlacaVideoMod">Modificare Produs - Placa Video</option>
        <option value="/FormPageScaunMod">Modificare Produs - Scaun</option>
      </select> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/Register">Inregistrare</router-link> |
      <router-link to="/about">About</router-link>
      <div>
        <div v-if="user"> User curent: {{user.email}}</div>
        <div class="row justify-content-center">
           <div class="col-sm-1"> <input class="btn btn-info btn-md .btnApp" value="Log out" @click="logOut"> </div>
      </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
   import { mapState, mapActions } from "vuex";
  export default {
        computed: { 
    	  ...mapState(['user']),
        },
        methods: {
            changeRoute(root) {
                this.$router.push({path:root})
            },
            ...mapActions(['logOut']),
        }
    } 
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.btnApp{
  width:10%;
}
</style>
