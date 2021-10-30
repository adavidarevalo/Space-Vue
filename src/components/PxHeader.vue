<template>
<div>
    <header>
        <div class="Header-Container">
            <button @click='returnHome'>
                <Logo/>
            </button>
            <button @click='MenuIcon'>
                <img v-if="!menu" src='../assets/shared/icon-hamburger.svg' alt='Menu'/>
                <img v-else 
                class="CloseIcon"
                src='../assets/shared/icon-close.svg' alt='Close Icon'/>
            </button>
            <nav>
                <router-link to='/'><span>00</span> Home</router-link>
                <router-link to='/'><span>01</span> Destination</router-link>
                <router-link to='/'><span>02</span> Crew</router-link>
                <router-link to='/'><span>03</span> Technology</router-link>
            </nav>
        </div>
    </header>
    <div :class="menu? ' Menu MenuOpen' : 'Menu'">
        <router-link to='/'><span>00</span> Home</router-link>
        <router-link to='/'><span>01</span> Destination</router-link>
        <router-link to='/'><span>02</span> Crew</router-link>
        <router-link to='/'><span>03</span> Technology</router-link>
    </div>
</div>
</template>

<script>
import Logo from '@/components/Logo.vue'


export default{
    name: 'PxHeader',
    components: {
        Logo
    },
    data() {
        return{
            menu: false
        }
    },
    methods: {
        returnHome(){
            this.$router.push('/')
        },
        MenuIcon(){
            this.menu = !this.menu
        }
    }
}
</script>


<style scoped>
header{
    width: 90%;
    margin: 0 auto;
    padding-block: 10px;
}
.Header-Container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
nav{
    display: none;
}
button{
    background: none;
    border: none;
}
.Menu{
    display: flex;
    flex-direction: column;
    background: black;
    width: 255px;
    padding: 45px 48px;
    align-items: baseline;
    box-sizing: border-box;
    position: fixed;
    z-index: 100;
    right: 0px;
    top: 0px;
    transform: translateY(-575px);
    transition: all 1s ease;
    height: 100vh;
}
.Menu > a{
    margin-block: 14px;
    font-size: 1.5rem;
    color: white;
}
.Menu > a > span{
    font-weight: 600;
}
.MenuOpen{
    transform: translateY(0px);
}
.CloseIcon{
    position: fixed;
    z-index: 200;
    top: 0px;
    padding: 10px;
}
</style>