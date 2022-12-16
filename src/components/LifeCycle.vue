<template>
    <h2>LifeCycle: {{ nome }}</h2>
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
            this.nome = 'Ana'
        }, 2000)
    },
    methods: {
        lifeCycle() { 
            console.log("executado");
        }
    }

}
</script>