<script>
  import { Router, Link, Route } from "svelte-routing"
  import { user } from './stores/Users'
  import Navbar from "./lib/Navbar.svelte";
  import Paths from "./lib/Paths.svelte";
</script>

<Router>
  <div>
    {#if !$user}
      <h1>Registrate para acceder...</h1>
    {/if}
      {#if $user}
        <Navbar />
        <h1>Hola es una prueba de Ruteo estas en:</h1>
      {/if}
  </div>
  <Paths />
</Router>

<style>
</style>
