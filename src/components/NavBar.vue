<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid px-lg-5 px-3 py-lg-3">
            <a class="navbar-brand ms-3" href="#">Thant Htet Aung</a>
            <div class="toggleBtn ms-5 d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" defer>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav justify-content-end mobile-toggle-menu">
                    <a class="nav-link" href="#projects">Projects</a>
                    <a class="nav-link" href="#skills">Skills</a>
                    <a class="nav-link" href="#contact">Contact Me</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    mounted() {
        const element = this.$el;
        element.addEventListener("click", () => {
            document.querySelector(".toggleBtn").classList.toggle("animatedBtn")
        })
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Unbounded&display=swap');
</style>