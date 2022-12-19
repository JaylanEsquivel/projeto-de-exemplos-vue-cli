<template>
    <button @click="$emit('mudarImagem')">TROCAR IMAGEN</button>
</template>
<script>
    export default { 
        name: 'ChildrenPicture',
        emits: ['mudarImagem']
    }

</script>