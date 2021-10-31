<template>
<div>
    <header>
        <div class="Header-Container">
            <button @click='returnHome'>
                <Logo/>
            </button>
            <div class="Line"></div>
            <button @click='MenuIcon' class="IconMenu">
                <div v-if="!menu">
                    <MenuIcon/>
                </div>
                <div v-else >
                    <CloseIcon/>
                </div>
            </button>
            <nav>
                <div @click="closeMenu()">
                    <router-link 
                    :to="{name: 'home'}"
                    ><span>00</span> Home</router-link>
                </div>
                <div @click="closeMenu()">
                    <router-link 
                    :to="{name: 'destination', params: {name: 'moon'}}"
                    ><span>01</span> Destination</router-link>
                </div>
                <div @click="closeMenu()">
                    <router-link 
                    :to="{name: 'crew'}"
                    ><span>02</span> Crew</router-link>
                </div>
                <div @click="closeMenu()">
                    <router-link 
                    :to="{name: 'technology'}"
                    ><span>03</span> Technology</router-link>
                </div>
            </nav>
        </div>
    </header>
    <div :class="menu? ' Menu MenuOpen' : 'Menu'">
        <div @click="closeMenu()">
            <router-link 
            :to="{name: 'home'}"
            ><span>00</span> Home</router-link>
        </div>
        <div @click="closeMenu()">
            <router-link 
            :to="{name: 'destination', params: {name: 'moon'}}"
            ><span>01</span> Destination</router-link>
        </div>
        <div @click="closeMenu()">
            <router-link 
            :to="{name: 'crew'}"
            ><span>02</span> Crew</router-link>
        </div>
        <div @click="closeMenu()">
            <router-link 
            :to="{name: 'technology'}"
            ><span>03</span> Technology</router-link>
        </div>
    </div>
</div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import CloseIcon from '@/components/CloseIcon.vue'
import MenuIcon from '@/components/MenuIcon.vue'


export default{
    name: 'PxHeader',
    components: {
        Logo,
        CloseIcon,
        MenuIcon
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
        },
        closeMenu(){
            console.log('Closing...')
            this.menu = false
        }
    }
}
</script>


<style scoped>
header{
    width: 90%;
    margin: 0 auto;
    padding-block: 10px;
    animation: fadeInDown 1s both;
}
.Line{
    display: none;
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
    position: relative;
    z-index: 200;
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
    top: -50px;
    transform: translateY(-600px);
    transition: all 1s ease;
    height: 100vh;
}
.Menu > div {
    margin-block: 10px;
    font-size: 1.5rem;
}
.Menu > div > a{
    color: white;
}
.Menu > div > a > span{
    font-weight: 600;
}
.MenuOpen{
    transform: translateY(50px);
}
.CloseIcon{
    position: fixed;
    z-index: 200;
    top: 0px;
    padding: 10px;
}
.router-link-active{
    border-bottom: 2px solid white;
}
@media (min-width: 800px) {
    .Menu{
        display: none;
    }
    .IconMenu{
        display: none;
    }
    nav{
        display: flex;
        width: 550px;
        justify-content: space-between;
        background: #ffffff17;
        padding: 15px 20px;
        border-radius: 5px;
    }
    nav > div > a{
        color: white;
        font-size: 1.2rem;
        border-bottom: 2px solid rgba(255, 255, 255, 0);
    }
    nav > div > a:hover{
        padding: 15px 0px;
        border-bottom: 2px solid rgba(255, 255, 255, 0.432);
    }
    nav > div > a > span{
    font-weight: 600;
    }
    .router-link-active{
        padding: 15px 0px;
    }
    .Line{
        display: block;
        width: 35%;
        background: white;
        height: 0.5px;
        background: #ffffffa6;
    }
}
@keyframes fadeInDown {
  0% {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  }
  100% {
  opacity: 1;
  transform: none;
  }
  } 
</style>