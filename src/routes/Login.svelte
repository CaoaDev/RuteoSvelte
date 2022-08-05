<script>
import { navigate } from 'svelte-routing';

  import { user } from '../stores/Users'

  let name = ''
  let email = ''
  let password = ''

  const processForm = () => {
    if(name.length < 4 || email.length < 4 || password.length < 4) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Porfavor llene los campos!',
      })
      return
    }
    user.setUser({
      name, email, password
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tus datos fueron guardados!!!',
      showConfirmButton: false,
      timer: 700
    })
    navigate('/perfil')
  }
</script>

<div>
  <h1>Registro</h1>
  <form on:submit|preventDefault={processForm}>
    <input
      type='text'
      placeholder='Ingrese su nombre o usuario'
      bind:value={name}
    />
    <input
      type='text'
      placeholder='Ingrese su Email'
      bind:value={email}
    />
    <input
      type='password'
      placeholder='Ingrese su Contraseña'
      bind:value={password}
    />
    <button type='submit'>Acces</button>
  </form>

</div>
