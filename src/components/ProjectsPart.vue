<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue';
const img1 = ref();
const img2 = ref();
const img3 = ref();
const title = ref();
useMotion(title, {
    initial: {
        opacity: 0,
        scale: 0,
    },
    visibleOnce: {
        opacity: 1,
        scale:1
    }
})
useMotion(img1, {
    initial: {
        opacity: 0,
        x: -200
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 300
        }
    }
})
useMotion(img2, {
    initial: {
        opacity: 0,
        x: 200
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 300
        }
    }
})
useMotion(img3, {
    initial: {
        opacity: 0,
        y: 100
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 300
        }
    }
})
</script>

<template>
    <div class="container ms-2 ms-lg-auto pb-5 pt-5 d-flex flex-column text-md-center text-start text-lg-start" id="projects">
        <h1 class="main-font text-center" ref="title">PROJECTS</h1>
        <div class="row mt-5">
            <div class="col-lg-6 col-12 mb-3" ref="img1">
                <h5 class="regular-font">Portfolio Maker Demo (Vue)</h5>
                <a href="https://bs-portfolio-maker.netlify.app/">
                    <img src="../assets/portfolioMaker.webp" class="images" alt="">
                </a>
            </div>
            <div class="col-lg-6 col-12 mb-5" ref="img2">
                <h5 class="regular-font">AMVtube (Laravel)</h5>
                <a href="https://github.com/ThantHtetAung101/AMVtube">
                    <img src="../assets/AMVtube.webp" class="images" alt="">
                </a>
            </div>
            <div class="col-12 mb-3 text-center" ref="img3">
                <h5 class="regular-font">Forum Website (PHP)</h5>
                <a href="https://thantforum.000webhostapp.com/">
                    <img src="../assets/Forum.webp" class="images" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
