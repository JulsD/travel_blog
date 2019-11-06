// Header
<template>
  <header id="header">
    <div class="main-wrapper header-wrapper">
        <Logo />
        <Nav />
    </div>
    <Wave />
    <Citation />
  </header>
</template>

<script>
import Logo from '../molecules/Logo.vue';
import Nav from '../molecules/Nav.vue';
import Wave from '../atoms/Wave.vue';
import Citation from '../molecules/Citation.vue';

export default {
    data: () => {
        return {
        }
    },
    components: {
        Logo,
        Nav,
        Wave,
        Citation
    }
}
</script>

<style>
#header {
    background-color: var(--primary-color-1);
    color: #416165;
    overflow: hidden;
}

.header-wrapper {
    padding: var(--gap-2);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.header-wrapper + #wave {
    width: 150%;
    animation: swing-gorizontal 3s ease-in infinite .2s alternate-reverse;

}
.header-wrapper + #wave path {
    fill: var(--primary-color-2);
}
</style>