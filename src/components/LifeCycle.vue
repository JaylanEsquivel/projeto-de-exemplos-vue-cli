<template>
    <h2>Salmos 23: {{ nome }}</h2>
</template>

<script>
export default {
    name: 'LifeCycle',
    data() { 
        return {
            nome: 'Jaylan'
        }
    },
    created() { 
        setTimeout(() => { 
            this.nome = 'Josemir'
        }, 1000)
        this.lifeCycle();
    },
    mounted() {
        setTimeout(() => { 
            this.nome = 'ana'
        }, 2000)
    },
    methods: {
        lifeCycle() { 
            console.log("executado");
        }
    }

}
</script>