<script>
  import { Route } from "svelte-routing"
  import About from "../routes/About.svelte"
  import Home from "../routes/Home.svelte"
  import Perfil from "../routes/Perfil.svelte"
  import Login from "../routes/Login.svelte"
</script>

<Route path='/*'><Home /></Route>
<Route path='/about'><About /></Route>
<Route path='/perfil'><Perfil /></Route>
<Route path='/login'><Login /></Route>
