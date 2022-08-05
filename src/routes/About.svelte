<script>
  import { user } from '../stores/Users'
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  onMount(() => {
    if(!$user){
      navigate('login')
    }
  })

</script>

<div>
  {#if $user}
    <h1>About</h1>
  {/if}
</div>
