<template>
    <section>
        <div>
            <h3>{{data[0].title}}</h3>
            <h2>{{data[0].name}}</h2>
            <p>{{data[0].paragraph}}</p>
            <div class="NavCrew">
                <div @click="getData()" :class="{active: id === 1}">1</div>
                <div @click="getData(2)" :class="{active: id === 2}">2</div>
                <div @click="getData(3)" :class="{active: id === 3}">3</div>
                <div @click="getData(4)" :class="{active: id === 4}">4</div>
            </div>
        </div>
        <img :src="data[0].image" :alt="data[0].name">
    </section>
</template>

<script>
import { getCrew } from '../CrewInformation'
export default {
    name: 'CrewContainer',
    data(){
        return{
            data: [],
            id: 1
        }
    },
    created(){
        this.getData()
    },
    methods: {
        getData(id = 1){
            console.log('Yes baby')
            this.id = id
            this.data = getCrew(id)
        }
    }
}
</script>
<style scoped>
.NavCrew > div{
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
}
</style>