<script>
  import { Link, navigate } from "svelte-routing"
  import { user } from '../stores/Users'

  const exit = () => {
    user.setUser(null)
    navigate('/login')
  }
</script>

<nav>
  <Link to='/'>HOME</Link>
  <Link to='/about'>ABOUT</Link>
  <Link to='/perfil'>PERFIL</Link>
  <button on:click={exit}>Salir</button>
</nav>
