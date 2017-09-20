<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>     
      <div class="white elevation-2">
        <v-toolbar class="primary" flat dense dark>         
         <v-toolbar-title class="white--text">Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-traker-form" autocomplete="off">
            <v-text-field
              name="email"
              label="Email"
              v-model="email"
              id="email"
              required
          />
          <v-text-field
              name="password"
              label="Password"
              type="Password"
              id="password"
              autocomplete="new-password"
              v-model="password"
              required
            />  
          </form>         
          
          <div v-html="error" class="error" />

          <v-btn block primary dark @click="register">Register</v-btn>          
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
    async register () {
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
