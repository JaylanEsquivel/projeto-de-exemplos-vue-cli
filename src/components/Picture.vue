<template>
    <div v-if="descricao == 'female'">
        <img :src="avatar" :alt="descricao" width="100"/>
    </div>
    <div v-else>
        <img :src="avatar_m" :alt="descricao" width="100"/>
    </div>
</template>


<script>
export default {
    name: 'Picture',
    data() { 
        return {
            avatar: '/img/female.png',
            avatar_m: '/img/man.png',
            descricao: 'man'
        }
    }
}

</script>