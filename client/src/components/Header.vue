<template>
  <v-toolbar dak fixed class="primary">    
    <v-toolbar-title class="mr-4 white--text">
      <span @click="navigateTo({ name: 'root'})">
        Tecnonia
      </span>
    </v-toolbar-title>
      
    <!-- TODO implement -->
    <!-- <v-toolbar-items>
        <v-btn flat dark class="white--text">
          Browse
        </v-btn>
      </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>

      
        <v-btn
          @click="navigateTo({ name: 'login'})"
          v-if="!$store.state.isUserLoggedIn"
          flat 
          dark 
          class="white--text">
          Login
        </v-btn>
      
        <v-btn
          @click="navigateTo({ name: 'register' })"
          v-if="!$store.state.isUserLoggedIn"
          flat dark class="white--text">
          Sign Up
        </v-btn>     

      
        <v-btn
          @click="logout"
          v-if="$store.state.isUserLoggedIn"
          flat dark class="white--text">
          Log Out
        </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'root'})
    }
  }
}
</script>

<style <style scoped>

</style>
