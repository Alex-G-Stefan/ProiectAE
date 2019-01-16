<template>
  <div>
     <div class="container">
    <br/>
	<div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                           
                                <div class="card-body row no-gutters align-items-center">
                                    
                                    <!--end of col-->
                                    <div class="col">
                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" v-model="searchResult">
                                    </div>
                                    <!--end of col-->
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success btnSearch" type="submit" @click="search(searchResult)">Search</button>
                                    </div>
                                    <!--end of col-->
                                </div>
                            
                        </div>
                        <!--end of col-->
                    </div>
</div>
    <div class="container .cont">
        <div id="main">
               <div class="row">
                 <div class="row .segment">
                   <Produs v-for="(item, index) in produse" :key="item.id" :id="item.id" :numeAutor="item.autor" :nume="item.nume" :numarPagini="item.numarPagini" :pret="item.pret" :link="item.link"></Produs>
                 </div>
                 <br/>
                   <div class="row .segment">
                     <PlacaVideo v-for="(item, index) in placivideo" :key="item.id" :id="item.id" :nume="item.nume" :producator="item.producator" :serie="item.serie" :memorie="item.memorie" :frecventa="item.frecventa" :con="item.slot" :pret="item.pret" :link="item.link"></PlacaVideo>
                   </div>
                    <br/>
                   <div class="row .segment">
                     <Scaun v-for="(item, index) in scaune" :key="item.id" :id="item.id" :nume="item.nume" :producator="item.producator" :serie="item.serie" :greutateMaxima="item.greutateMaxima" :niveleInaltime="item.niveleInaltime" :pret="item.pret" :link="item.link"></Scaun>
                   </div>
                    <br/>
                   <div class="row .segment">
                     <Mouse v-for="(item,index) in mice" :key="item.id" :id="item.id" :nume="item.nume" :producator="item.producator" :serie="item.serie" :dpi="item.dpi" :numarButoane="item.numarButoane" :ambidextru="item.ambidextru" :pret="item.pret" :link="item.link"></Mouse>
                   </div>
                    <br/>
                   <div class="row .segment">
                     <Monitor v-for="(item,index) in monitoare" :key="item.id" :id="item.id" :nume="item.nume" :producator="item.producator" :serie="item.serie" :rezolutie="item.rezolutie" :diagonala="item.diagonala" :numarFPS="item.numarFPS" :pret="item.pret" :link="item.link"></Monitor>
                   </div>
                    <br/>
               </div>
        </div>
        </div>
  </div>
       
</template>

<script>
import axios from 'axios'
import Produs from '../components/BookComponent.vue'
import PlacaVideo from '../components/PlaciVideoComponent.vue'
import Scaun from '../components/ScauneComponent.vue'
import Mouse from '../components/MouseComponent.vue'
import Monitor from '../components/MonitorComponent.vue'

export default {
  name: "home",
  data: () => ({ searchResult:'', produse: [], placivideo: [], scaune: [], mice: [], monitoare:[] }),
  async mounted() {
  const request = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/all");
  const requestPlaciVideo = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/allPlaciVideo");
  const requestScaune = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/allScaune");
  const requestMouse = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/allMouse");
  const requestMonitor = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/allMonitors");
  this.produse = request.data;
  this.placivideo = requestPlaciVideo.data;
  this.scaune = requestScaune.data;
  this.mice = requestMouse.data;
  this.monitoare = requestMonitor.data;
  },
  components: {
    Produs,
    PlacaVideo,
    Scaun,
    Mouse,
    Monitor
  },
  methods:{
    async search(searchResult){
     const request = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/searchCarte?nume="+this.searchResult);
     this.produse=request.data;
     
     const requestPlacaVideo = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/searchPlacaVideo?nume="+this.searchResult);
     this.placivideo=requestPlacaVideo.data;
     
     const requestScaun = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/searchScaun?nume="+this.searchResult);
     this.scaune=requestScaun.data;
     
     const requestMouse = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/searchMouse?nume="+this.searchResult);
     this.mice=requestMouse.data;
     
     const requestMonitor = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/searchMonitor?nume="+this.searchResult);
     this.monitoare=requestMonitor.data;
    }
  }
};
</script>

<style scoped>

.btnSearch{
  margin-left:5px;
}

.segment{
  display:block;
}

.cont{
  margin: 0 auto;
  width:70%;
}
  
</style>