<template>
  <v-toolbar dak fixed class="primary">
    <router-link to="root">
      <v-toolbar-title class="mr-4 white--text">
        Tecnonia
      </v-toolbar-title>
    </router-link>  
    <!-- TODO implement -->
    <!-- <v-toolbar-items>
        <v-btn flat dark class="white--text">
          Browse
        </v-btn>
      </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>

      <router-link to="login">
        <v-btn flat dark class="white--text">
          Login
        </v-btn>
      </router-link>
      
      <router-link to="register">
        <v-btn flat dark class="white--text">
          Sign Up
        </v-btn>
      </router-link>

    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style <style scoped>

</style>
