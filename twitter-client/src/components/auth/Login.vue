<template>
  <div>
    <h3 class="text-center">Login</h3>

    <input type="text" class="form-control" placeholer="Username">
    <input type="password" class="form-control" placeholer="Password">

    <hr>

    <button class="btn btn-lg btn-primary btn-block">Sign In</button>

    <p class="text-center">
      Don't have an account? <router-link to="/auth/register">Sign Up</router-link>

    </p>
  </div>
</template>

<script>
  export default {
    name : "login"
  }
</script>

<style>
</style>