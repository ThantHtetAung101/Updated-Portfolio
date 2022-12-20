<script setup>
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue';
const contact = ref()
const footer= ref()
useMotion(contact, {
    initial: {
        opacity: 0.5,
        scaleY: 0,
    },
    visible: {
        opacity: 1,
        scaleY: 1,
        transition: {
            delay: 300
        }
    }
})
useMotion(footer, {
    initial: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }
})
</script>
<template>
    <div id="contact" ref="contact" class="container flex-column align-items-center justify-content-center text-center">
        <h3 class="regular-font">Send me a message!</h3>
        <span class="regular-font fst-italic text-muted">
            Got a question or work offer, or just want
            to say hello? <br> Leave a message with your email!
        </span>
        <div class="container-warp mt-5">
            <form id="form" ref="form" @submit.prevent="sendEmail">
                <div class="row text-start">
                    <div class="col">
                        <label for="name">Your Name</label> <br>
                        <input type="text" name="name" class="form mt-3 mb-4" placeholder="Alex Noir" id="name">
                    </div>
                    <div class="col">
                        <label for="email">Your Email</label> <br>
                        <input type="text" name="email" class="form mt-3" placeholder="alexnoir@gmail.com" for="email">
                    </div>
                </div>
                <div class="row pt-3 text-start">
                    <div class="col">
                        <label for="message">Your Message</label> <br>
                        <textarea id="message" name="message" class="form mt-3 w-100" cols="30"
                            placeholder="Hi, I want to chat with you a bit....." rows="5"></textarea>
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-dark messageBtn btn-lg mt-5">Send Message</button>
            </form>
        </div>
    </div>
    <div class="mt-5 pt-5" ref="footer">
        <div class="row mt-5 px-lg-5 px-0">
            <div class="col-9">
                <h6 class="ms-lg-auto ms-2 regular-font">@2022: All rights reserved to Thant Htet Aung</h6>
            </div>
            <div class="col-3 d-flex align-items-center justify-content-center">
                <a href="https://github.com/ThantHtetAung101" class="link-dark me-lg-5 ms-auto pb-3 me-3">
                    <i class="lni lni-github-original fs-3"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100085549073006" class="me-lg-5 me-md-5 me-1 pb-3 link-dark">
                    <i class="lni lni-facebook-original fs-3"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    methods: {
        sendEmail() {
            emailjs.sendForm('service_vngqrtl', 'template_8lod9zb', this.$refs.form, 'l5ueQm_kINYCRBjNS')
                .then(() => {
                    var escape = document.querySelector("#escape")
                    escape.classList.add("animatedLeave")
                    var leftover = document.createElement("h2")
                    leftover.classList.add("regular-font")
                    leftover.textContent = "I will be in touch with you ASAP!"
                    document.querySelector("#contact").appendChild(leftover)
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>