<template>
    <section>
        <h1><span>01</span> pick your destination</h1>
        <HomeComponent/>
    </section>
</template>

<script>

import HomeComponent from '@/components/HomeComponent.vue'

export default {
    name: 'Home',
    components: {
        HomeComponent
    }


}
</script>
<style>
    body{
        background-image: url('../assets/home/background-home-mobile.jpg');
        background-size: cover;
        background-position: center;
    }
</style>
