<template>
    <Header :logado="logado"></Header>
    <h3>Pj Simples com Vue 3 <button @click="fazerlogin()">{{text_log}}</button></h3>

    <MultiplosEventos></MultiplosEventos>

    
</template>

<script>
    import MultiplosEventos from './MultiplosEventos.vue';
    import Header from './Header.vue';
    
    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos, Header
        },
        data() { 
            return {
                logado: false,
                text_log: 'Logar'
            }
        },
        methods: {
            fazerlogin() { 
                this.logado = !this.logado
                this.logado ? this.text_log = 'Deslogar' : this.text_log = 'Logar'
            }
        }
    }
</script>
