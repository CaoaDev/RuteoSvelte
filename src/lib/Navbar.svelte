<script>
  import { Link, navigate } from "svelte-routing"
  import { user } from '../stores/Users'

  const exit = () => {
    user.setUser(null)
    navigate('/login')
  }
</script>

<nav>
  {#if $user}
    <span>Usiario: {$user.name}</span>
  {/if}
  <Link to='/'>HOME</Link>
  <Link to='/about'>ABOUT</Link>
  <Link to='/perfil'>PERFIL</Link>
  <button on:click={exit}>Salir</button>
</nav>
