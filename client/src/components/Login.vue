<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
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
      </panel>      
    </v-flex>
  </v-layout>  
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
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
        this.email = ''
        this.password = ''
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
