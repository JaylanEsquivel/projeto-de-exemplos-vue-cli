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
    },
    mounted() {
        setTimeout(() => { 
            this.nome = 'ana'
        }, 2000)
    }
}
</script>