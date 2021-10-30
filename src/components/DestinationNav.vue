<template>
    <nav>
        <router-link 
        v-for='item in Links'
        :key='item'
        :to="{name: 'destination', params: {name: item}}"
        >{{item}}</router-link>
    </nav>
</template>

<script>


export default {
    name: 'DestinationNav',
    data(){
        return{
            Links: ['moon', 'mars', 'europa', 'titan']
        }
    }
}
</script>


<style scoped>

</style>