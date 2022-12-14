<template>
    <h1>Header</h1>
    <PrimeiroComponente />
    <hr/>
    <p>Footer</p>
    <LifeCycle/>
    <PessoaVue/>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue';
  import LifeCycle from './components/LifeCycle.vue';
  import PessoaVue from './components/Pessoa.vue'; // se colocar vue tmb funciona

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle,
      PessoaVue
    }
  } 
</script>