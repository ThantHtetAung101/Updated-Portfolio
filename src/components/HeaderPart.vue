<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue';
const junior = ref()
const web = ref()
const dev = ref()
const vector = ref()
const resumeBtn = ref()
useMotion(resumeBtn, {
    initial: {
        opacity: 0,
        scale: 0.7
    },
    visibleOnce: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1000
        }
    }
})
useMotion(junior, {
    initial: {
        opacity: 0,
        x: -100,
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 100
        }
    },
    hovered: {
        x: 30,
    }
})
useMotion(web, {
    initial: {
        opacity: 0,
        x: -100,
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 300
        }
    },
    hovered: {
        x: 30,
    }
})
useMotion(dev, {
    initial: {
        opacity: 0,
        x: -100,
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 500
        }
    },
    hovered: {
        x: 30,
    }
})
useMotion(vector, {
    initial: {
        opacity: 0,
        scale: 0.6,
    },
    visibleOnce: {
        opacity: 1,
        scale: 1,
    },
})
</script>
<template>
    <div class="container-fluid m-lg-5 pb-5 mt-5 pt-5 m-0 d-flex flex-lg-column flex-row">
        <div class="row">
            <div class="pt-3 col-lg-6 col-12 justify-content-start align-item-center">
                <h1 class="header-font" ref="junior">Junior</h1>
                <h1 class="header-font" ref="web">Web</h1>
                <h1 class="header-font" ref="dev">Developer</h1>
            </div>
            <div class="col-lg-6 col-12 d-flex position-relative justify-content-center">
                <img src="../assets/mypic.webp" class="rounded-pill vector-img" ref="vector" alt="vector">
                <a ref="resumeBtn" href="https://drive.google.com/file/d/1CZpX4SBlANUS2U6PTjRLCVxPQzkqjRq1/view?usp=sharing" target="_blank" class="btn pt-2 regular-font btn-outline-light resume">Check My Resume</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isHover: false
        }
    },
    // methods: {
    //     cv() {
    //         window.location.pathname = "./www.google.com"
    //     }
    // },
}
</script>

<style lang="scss" scoped>

</style>
