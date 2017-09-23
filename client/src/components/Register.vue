<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
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
