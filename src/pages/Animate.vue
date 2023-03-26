<template>
    <div class="container flex h-full relative overflow-hidden">
        <section class="chart">
            <div class="triangle" style="transform:rotate(0deg)"><div class="circle" :style="'background:#' + generateColor()"></div></div>
            <div class="triangle" style="transform:rotate(-60deg)"><div class="circle" :style="'background:#' + generateColor()"></div></div>
            <div class="triangle" style="transform:rotate(-120deg)"><div class="circle" :style="'background:#' + generateColor()"></div></div>
            <div class="triangle" style="transform:rotate(-180deg)"><div class="circle" :style="'background:#' + generateColor()"></div></div>
            <div class="triangle" style="transform:rotate(-180deg)"><div class="circle" :style="'background:#' + generateColor()"></div></div>
            <div class="triangle" style="transform:rotate(-240deg)"><div class="circle" :style="'background:#' + generateColor()"></div></div>
            <div class="triangle" style="transform:rotate(-300deg)"><div class="circle" :style="'background:#' + generateColor()"></div></div>
        </section>

        <div class="grass overflow-hidden" ref="grassRef">
            <div v-for="i in (Math.ceil((grassRef?.clientWidth || 10) / 10) + 1)" :style="{
                left: (i - 1) * 10 + 'px',
                zIndex: generateZIndex(),
                height: generateHeight()
            }"></div>
        </div>

        <div class="cats">
            <img src="/src/assets/cat-01.svg">
            <img src="/src/assets/cat-01.svg">
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const grassRef = ref(document.querySelector('.grass')?.target)

const generateHeight = () => (Math.floor(Math.random() * 50) + 20) + 'px'
const generateZIndex = () => Math.floor(Math.random() * 2) - 1
const generateColor = () => Math.floor(Math.random()*16777215).toString(16)
</script>

<style scoped lang="scss">
.container {
    border-left: 1rem solid #00ffa7;
    border-right: 1rem solid #00ffa7;
}

.cats {
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 5px;
    z-index: -1;

    img {
        width: 150px;

        &:first-child {
            transform: scale(-1, 1);
        }
    }
}

.grass {
    position: absolute;
    width: calc(100% + 10px);
    bottom: 0;
    left: -5px;
    height: 60px;

    div {
        position: absolute;
        width: 15px;
        height: random(50) + 20 + 'px';
        background-color: green;
        bottom: 0;
        clip-path: polygon(50% 0, 100% 100%, 0% 100%);
    }
}

section {
    width: 4em;
    margin: auto;
    position: absolute;
    bottom: 15px;
    right: 100px;
    left: calc(100% - calc(4rem + 150px));
    animation: infinite ease-in-out;
    animation-name: chart;
    animation-duration: 10s;
}

@keyframes chart {
    0% {
        transform: rotate(0deg);
        right: 85px;
        left: calc(100% - calc(4rem + 150px));
    }

    50% {
        transform: rotate(-720deg);
        right: 100%;
        left: 120px;
    }

    100% {
        transform: rotate(0deg);
        right: 90px;
        left: calc(100% - calc(4rem + 150px));
    }
}

.chart {
    position: absolute;
    overflow: hidden;

    &:before {
        content: "";
        display: block;
        padding-top: 100%;
    }

    .triangle {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 50%;
        transform-origin: center bottom;
        overflow: hidden;

        .circle {
            height: 100%;
            width: 100%;
            background: silver;
            border-radius: 50% 50% 0 0 / 100% 100% 0 0;
            transform-origin: center bottom;
            transform: rotate(120deg);
        }
    }
}
</style>