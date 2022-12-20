<template>
    <div class="ms-lg-auto ms-2">
        <NavBar />
        <HeaderPart />
        <ProjectsPart />
        <SkillPart />
        <ContactMe />
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
import HeaderPart from './HeaderPart.vue';
import ProjectsPart from './ProjectsPart.vue';
import SkillPart from './SkillPart.vue';
import ContactMe from './ContactMe.vue';
export default {
    components: { NavBar, HeaderPart, ProjectsPart, SkillPart, ContactMe }
}
</script>

<style lang="scss" scoped>

</style>