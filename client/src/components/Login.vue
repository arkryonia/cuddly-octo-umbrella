<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>     
      <div class="white elevation-2">
        <v-toolbar class="red" flat dense dark>         
         <v-toolbar-title class="white--text">Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
              name="email"
              label="Email"
              v-model="email"
              id="email"
              required
          ></v-text-field>
          <v-text-field
              name="password"
              label="Password"
              type="password"
              id="password"
              v-model="password"
              required
            ></v-text-field>         
          
          <div v-html="error" class="error" />

          <v-btn block primary dark @click="login">Login</v-btn>          
        </div>        
      </div>
    </v-flex>
  </v-layout>  
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
