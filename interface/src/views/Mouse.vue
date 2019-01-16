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
        <div class="col" id="main">
               <div class="row .segment">
                  <Produs v-for="item in produse" :key="item.id" :id="item.id" :nume="item.nume" :producator="item.producator" :serie="item.serie" :dpi="item.dpi" :numarButoane="item.numarButoane" :ambidextru="item.ambidextru" :pret="item.pret" :link="item.link"></Produs>
               </div>
        </div>
        </div>
</div>
</template>


<script>
import axios from 'axios'
import Produs from '../components/MouseComponent.vue'

export default {
  name: "home",
  data: () => ({ searchResult:'', produse: [] }),
  async mounted() {
  const request = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/allMouse");
  this.produse = request.data;
  },
  components: {
    Produs
  },
  methods:{
    async search(searchResult){
     const request = await axios.get("https://coursework-project-alexstefan.c9users.io:8081/searchMouse?nume="+this.searchResult);
     this.produse=request.data
    }
  }
};
</script>

<style scoped type="text/css">
  body,html{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: white !important;
    }

    .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    }
    
    .segment{
  display:block;
}

.cont{
  margin: 0 auto;
  width:70%;
}
  
</style>