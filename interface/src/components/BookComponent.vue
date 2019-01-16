<template>
    <div>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="link" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Nume carte: {{nume}}</h5>
            <p class="card-text">Nume autor: {{numeAutor}}
                <ul>
                <li>
                  <h5>ID intern: {{id}}</h5>
                  <h5>Numar pagini: {{numarPagini}}</h5>
                  <h5>Pret: {{pret}}</h5>
                  <h5>Moneda: RON</h5>
                </li>
            </ul></p>
            <div>
                 <a href="#" class="btn btn-primary" @click="addItemToCart({ id, nume, pret, link })">Adauga in cos</a>
                 <a href="#" class="btn btn-secondary" @click="changePage(id)">Detalii</a>
            </div>
          </div>
        </div>
          
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "Produs",
  props: {
    id: Number,
    numeAutor: String,
    nume: String,
    numarPagini: Number,
    pret: Number,
    link: String
  },
  methods: {
    ...mapActions(['addItemToCart','showDetails']),
    changePage(id)
    	{
    		this.showDetails({id});
			  this.$router.push("/DetaliiProdus");
		}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
    display:inline-block;
    margin-left:15px;
    margin-top:5px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn{
    border-radius: 50px;
    display:block;
    margin-top:5px;
}
.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.42;
  border-radius: 15px;
}

</style>