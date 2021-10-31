<template>
    <section class="HomeContainer">
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

<style scoped>
    .HomeContainer{
        background-image: url('../assets/home/background-home-mobile.jpg');
        background-size: cover;
        background-position: center;
        min-height: 88.4vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (min-width: 550px) {
        .HomeContainer{
            background-image: url('../assets/home/background-home-tablet.jpg');
        }
    }
    @media (min-width: 800px) {
        .HomeContainer{
            background-image: url('../assets/home/background-home-desktop.jpg');
        }
    }
</style>
