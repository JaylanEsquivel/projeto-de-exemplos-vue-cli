<template>
    <div>
        <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Loja</li>
            <li v-if="logado" title="Eu estou logado">Meu Perfil</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        logado: Boolean
    },
    data() { 
        return {

        }
    }
}
</script>
<style scoped>
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
    }
    ul{
        list-style: none;
        display: inline-flex;
        background-color: #000;
        padding: 10px;
        width: 100%;
        margin: 0;
    }

    li{
        padding-left: 20px;
    }

</style>