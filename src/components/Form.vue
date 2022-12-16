<template>
    <div>
        <h3>Formulário de Contato</h3>
        <form action="" @submit="enviarFormulario($event)">
            <div class="form-group">
                <label>Seu Nome</label>
                <input type="text" v-model="nome" name="nome_us" class="form-control"/>
            </div>
            <div class="form-group">
                <label>Celular</label>
                <input type="text" v-model="cel" name="celular" class="form-control"/>
            </div>
            <div class="form-group">
                <button>Enviar</button>
            </div>

        </form>
    </div>
</template>
<script>
export default {
    name: 'Form',
    data() { 
        return {
            nome: '',
            cel: ''
        }
    },  
    methods: {
        enviarFormulario(e) { 
            e.preventDefault();

            const nome = this.nome;
            const celular = this.cel;

            console.log("Contato Enviado: " + celular + " / " + nome);

            // Ajax
        }
    }
}
</script>
<style scoped>

    h3{ text-align: center;}
    div{ 
        background-color: #000;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

</style>