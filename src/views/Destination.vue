<template>
    <section class="DestinationContainer">
        <h2><span>01</span>Pick your destination</h2>
        <DestinationContainer/>
    </section>
</template>

<script>

import DestinationContainer from '../components/DestinationContainer.vue'

export default {
    name: 'Destination',

    components: {DestinationContainer}
}


</script>

<style scoped>
    .DestinationContainer{
        background-image: url('../assets/destination/background-destination-mobile.jpg');
        background-size: cover;
        background-position: center;
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
        .DestinationContainer{
            background-image: url('../assets/destination/background-destination-tablet.jpg');
        }
    }
    @media (min-width: 800px) {
        h2{
            font-size: 1.5rem;
        }
        .DestinationContainer{
            background-image: url('../assets/destination/background-destination-desktop.jpg');
        }
    }
</style>