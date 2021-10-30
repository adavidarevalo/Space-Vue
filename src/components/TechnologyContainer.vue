<template>
    <section>
        <img :src='data[0].imageLandscape' :alt='data[0].title'/>
        <div>
            <div @click="getData(1)" :class="{active: id === 1}">1</div>
            <div @click="getData(2)" :class="{active: id === 2}">2</div>
            <div @click="getData(3)" :class="{active: id === 3}">3</div>
        </div>
        <div>
            <h3>THE TERMINOLOGY...</h3>
            <h1>{{data[0].title}}</h1>
            <p>{{data[0].paragraph}}</p>
        </div>
    </section>
</template>

<script>

import {getTechnology} from '../TechnologyIndofamtion.js'

export default {
    name: 'TecnologyContainer',
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
            this.id = id
            this.data = getTechnology(id)
        }
    }

}


</script>


<style scoped>
.active{
    background: red;
}
</style>