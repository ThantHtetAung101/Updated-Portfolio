<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue';
const html = ref()
const css = ref()
const bs = ref()
const js = ref()
const php = ref()
const laravel = ref()
const skill = ref()
const title = ref()
useMotion(title, {
    initial: {
        opacity: 0
    },
    visibleOnce: {
        opacity: 1
    }
})
useMotion(skill, {
    initial: {
        opacity: 0,
        y: 100
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 100
        }
    }
})
useMotion(html, {
    initial: {
        opacity: 0,
        y: 100
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 100
        }
    },
    hovered: {
        y: -10
    }
})
useMotion(css, {
    initial: {
        opacity: 0,
        y: 130
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 300
        }
    },
    hovered: {
        y: -10
    }
})
useMotion(bs, {
    initial: {
        opacity: 0,
        y: 160
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 500
        }
    },
    hovered: {
        y: -10
    }
})
useMotion(js, {
    initial: {
        opacity: 0,
        y: 160
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 300
        }
    },
    hovered: {
        y: -10
    }
})
useMotion(php, {
    initial: {
        opacity: 0,
        y: 130
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 200
        }
    },
    hovered: {
        y: -10
    }
})
useMotion(laravel, {
    initial: {
        opacity: 0,
        y: 100
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 100
        }
    },
    hovered: {
        y: -10
    }
})
</script>
<template>
    <div id="skills" ref="skill" class="mt-5 pb-5 pt-5 flex-column container mb-5 text-center d-flex justify-content-center">
        <h1 class="main-font" ref="title">Skills</h1>
        <div class="row mt-5">
            <div class="col-2"><i class="lni squeeze lni-html5" ref="html"></i></div>
            <div class="col-2"><i class="lni squeeze lni-css3" ref="css"></i></div>
            <div class="col-2"><i class="lni squeeze lni-bootstrap" ref="bs"></i></div>
            <div class="col-2"><i class="lni squeeze lni-javascript" ref="js"></i></div>
            <div class="col-2"><i class="lni squeeze lni-php" ref="php"></i></div>
            <div class="col-2"><i class="lni squeeze lni-laravel" ref="laravel"></i></div>
        </div>
        <div class="row mt-3 d-lg-flex d-none">
            <div class="col">
                <h5 class="regular-font">HTML</h5>
            </div>
            <div class="col">
                <h5 class="regular-font">CSS</h5>
            </div>
            <div class="col">
                <h5 class="regular-font">Bootstrap</h5>
            </div>
            <div class="col">
                <h5 class="regular-font">Javascript</h5>
            </div>
            <div class="col">
                <h5 class="regular-font">PHP</h5>
            </div>
            <div class="col">
                <h5 class="regular-font">Larvel</h5>
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