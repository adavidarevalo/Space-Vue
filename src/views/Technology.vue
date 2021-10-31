<template>
    <section class="TechnologyContainer">
        <h2><span>03</span> Space Lauch 101</h2>
        <TecnologyContainer/>
    </section>
</template>

<script>
import TecnologyContainer from '../components/TechnologyContainer.vue'

export default {
    name: 'Technology',
    components: {TecnologyContainer}
}
</script>

<style scoped>
    .TechnologyContainer{
        background-image: url('../assets/technology/background-technology-mobile.jpg');
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 88.4vh;
    }
    h2{
        color: white;
        font-size: 1.2rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    h2 > span{
        color: #5e5e5e;
        margin-right: 10px;
    }
    @media (min-width: 550px) {
        .HomeContainer{
            background-image: url('../assets/technology/background-technology-tablet.jpg');
        }
    }
    @media (min-width: 800px) {
        h2{
            font-size: 1.5rem;
        }
        .HomeContainer{
            background-image: url('../assets/technology/background-technology-desktop.jpg');
        }
    }
</style>