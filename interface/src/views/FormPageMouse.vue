<template>
<div class="container">
	<div class="row d-flex justify-content-center">
    <div class="col-md-4">
		<div class="form_main">
                <h4 class="heading"><strong>Quick </strong> Add Mouse<span></span></h4>
                <div class="form">
                <input type="text" required="" placeholder="Nume" value="" name="name" class="txt" v-model="nume">
                    <input type="text" required="" placeholder="Producator" value="" name="mob" class="txt" v-model="producator">
                    <input type="text" required="" placeholder="Serie" value="" name="email" class="txt" v-model="serie">
                    <input type="text" required="" placeholder="Numar DPI" value="" name="email" class="txt" v-model="dpi">
                    <input type="text" required="" placeholder="Numar Butoane" value="" name="email" class="txt" v-model="numarButoane">
                    <input type="text" required="" placeholder="Ambidextru" value="" name="email" class="txt" v-model="ambidextru">
                    <input type="text" required="" placeholder="Pret" value="" name="email" class="txt" v-model="pret">
                    <input type="text" required="" placeholder="Link" value="" name="email" class="txt" v-model="link">
                    
                     <input type="submit" value="Inserare produs" name="submit" class="txt2" @click="addMouse({nume, producator, serie, dpi, numarButoane, ambidextru, pret, link})">
            </div>
            </div>
            </div>
	</div>
</div>
</template>

<script>
    import { mapActions } from "vuex";
    export default{
        data: () => ({ nume:'', producator:'', serie:'', dpi:0, numarButoane:0, ambidextru:'', pret:0, link:'' }),
        methods: {
    	...mapActions(['addMouse']),
    }
    }
</script>

<style scoped>
   form_main {
    width: 100%;
}
.form_main h4 {
    font-family: roboto;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 15px;
    margin-top: 20px;
    text-transform: uppercase;
}
.heading {
    border-bottom: 1px solid #fcab0e;
    padding-bottom: 9px;
    position: relative;
}
.heading span {
    background: #9e6600 none repeat scroll 0 0;
    bottom: -2px;
    height: 3px;
    left: 0;
    position: absolute;
    width: 75px;
}   
.form {
    border-radius: 7px;
    padding: 6px;
}
.txt[type="text"] {
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px 0 10px 5px;
    width: 100%;
}
.txt_3[type="text"] {
    margin: 10px 0 0;
    padding: 10px 0 10px 5px;
    width: 100%;
}
.txt2[type="submit"] {
    background: #242424 none repeat scroll 0 0;
    border: 1px solid #4f5c04;
    border-radius: 25px;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    line-height: 35px;
    margin: 10px 0;
    padding: 0;
    text-transform: uppercase;
    width: 100%;
}
.txt2:hover {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    color: #5793ef;
    transition: all 0.5s ease 0s;
}
</style>