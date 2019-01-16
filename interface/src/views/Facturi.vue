<template>
        <div class="display:block justify-content-center" id="main">
               <div class="display:block justify-content-center">
                  <Factura v-for="item in facturi" :key="item.id" :id="item.id" :dataFactura="item.dataFactura" :totalFactura="item.totalFactura" :userRef="item.userRef" :detaliiFactura="item.detaliiFactura"></Factura>
               </div>
        </div>
</template>

<script>
import axios from 'axios'
import Factura from '../components/FacturiComponent.vue'
import { mapState } from "vuex";

export default {
  computed: { 
    	  ...mapState(['user']),
        },    
  name: "facturi",
  data: () => ({ facturi: [] }),
  async mounted() {
  const request = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/allDataFacturi?idUserCurent="+this.user.id);
  this.facturi = request.data;
  },
  components: {
    Factura
  }
};
</script>