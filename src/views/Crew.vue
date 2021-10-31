<template>
    <section class="CrewContainer">
        <h2><span>02</span>Meet your crew</h2>
        <CrewContainer/>
    </section>
</template>

<script>
import CrewContainer from '../components/CrewContainer.vue'
export default {
    name: 'Crew',
    components: {CrewContainer}
}
</script>


<style scoped>
    .CrewContainer{
        background-image: url('../assets/crew/backgroundCrewMobile.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 88.4vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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
        .CrewContainer{
            background-image: url('../assets/crew/background-crew-tablet.jpg');
        }
    }
    @media (min-width: 800px) {
        h2{
            font-size: 1.5rem;
        }
        .CrewContainer{
            background-image: url('../assets/crew/background-crew-desktop.jpg');
        }
    }
</style>