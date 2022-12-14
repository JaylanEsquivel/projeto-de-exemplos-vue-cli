<template>
    <h1>Header</h1>
    <PrimeiroComponente />
    <hr/>
    <p>Footer</p>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue';


  export default {
    name: 'App',
    components: {
      PrimeiroComponente
    }
  } 
</script>