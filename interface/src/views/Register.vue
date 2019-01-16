<template>
    <div class="container">
        <div class="row main">
            <div class="col-sm-12">
                <div>
                <div class="card-title text-center">
                    	<h1 class="title">Inregistrare</h1>
                    <hr>
                </div>
                <div class="main-login main-center">
                <form class="" method="post" action="#">
                    <div class="form-group">
                        <label for="name" class="cols-sm-2 col-form-label">Your Name</label>
                        <div class="cols-sm-10">
                            <div class="input-group">	<span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                <input
                                type="text" class="form-control" name="name" id="name" placeholder="Enter your Name" v-model="nume">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="cols-sm-2 col-form-label">Your Email</label>
                        <div class="cols-sm-10">
                            <div class="input-group">	<span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                <input
                                type="text" class="form-control" name="email" id="email" placeholder="Enter your Email" v-model="email">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="username" class="cols-sm-2 col-form-label">Adresa</label>
                        <div class="cols-sm-10">
                            <div class="input-group">	<span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                <input
                                type="text" class="form-control" name="username" id="username" placeholder="Enter your adress" v-model="adresa">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password" class="cols-sm-2 col-form-label">Password</label>
                        <div class="cols-sm-10">
                            <div class="input-group">	<span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                <input
                                type="password" class="form-control" name="password" id="password" placeholder="Enter your Password" v-model="parola">
                            </div>
                        </div>
                    </div>
                    <div class="form-group ">
                        <button type="button" class="btn btn-primary btn-lg btn-block login-button" @click="addUser({nume, adresa, email, parola})">Register</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
    import { mapActions } from "vuex";
    export default{
        data: () => ({ nume:'', adresa:'', email:'', parola:''}),
        methods: {
    	...mapActions(['addUser']),
    }
    }
</script>

<style scoped >
    body, html{
     height: 100%;
 	font-family: 'Oxygen', sans-serif;
}

.main{
 	margin-top: 70px;
}

h1.title { 
	font-size: 50px;
	font-family: 'Passion One', cursive; 
	font-weight: 400; 
}

hr{
	width: 10%;
	color: #fff;
}

.form-group{
	margin-bottom: 15px;
}

label{
	margin-bottom: 15px;
}

input,
input::-webkit-input-placeholder {
    font-size: 11px;
    padding-top: 3px;
}

.main-login{
 	background-color: #fff;
    /* shadows and rounded borders */
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);

}

.main-center{
 	margin-top: 30px;
 	margin: 0 auto;
 	max-width: 330px;
    padding: 40px 40px;

}

.login-button{
	margin-top: 5px;
}

.login-register{
	font-size: 11px;
	text-align: center;
}
</style>