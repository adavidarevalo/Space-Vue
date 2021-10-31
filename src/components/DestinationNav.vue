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
nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 25px auto;
}
nav > a{
    color: hsl(231 77% 90%);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 500;
    padding-bottom: 5px;

}
nav > a:hover{
    border-bottom: 3px solid gray;
}
.router-link-active{
    border-bottom: 3px solid white;
    color: white;
}
</style>