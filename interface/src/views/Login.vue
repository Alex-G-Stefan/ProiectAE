<template>
    <body>
    <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="email" class="text-info">Email:</label><br>
                                <input type="text" name="email" id="email" class="form-control" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password" name="password" id="password" class="form-control" v-model="parola">
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class ="col-sm-6">
                                        <input class="btn btn-info btn-md" value="Login" @click="findUsers(email, parola)">
                                    </div>
                                    <div class ="col-sm-6">
                                        <input class="btn btn-info btn-md" value="Register" @click="changePage()">
                                    </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    export default{
        data: () => ({ id:0, email:'', parola:'' }),
         computed: { 
    	...mapState(['user']),
        },
        methods: {
    	...mapActions(['findUser']),
    	async findUsers(email,parola)
    	{
    		await this.findUser({email, parola});
		},
		 changePage()
    	{
		this.$router.push("/Register");
		}
    }
    }
</script>

<style scoped>
   body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
.btn {
    width:100%;
}
</style>