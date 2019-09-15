// Header
<template>
  <header>
    <div class="main-wrapper header-wrapper">
        <Logo />
        <Nav />
    </div>
    <Wave />
    <div id="citate-block">
        {{citate}}
        <Wave />
    </div>
  </header>
</template>

<script>
import Logo from '../molecules/Logo.vue';
import Nav from '../molecules/Nav.vue';
import Wave from '../atoms/Wave.vue';

export default {
    data: () => {
        return {
            citate: 'some good fraze here'
        }
    },
    components: {
        Logo,
        Nav,
        Wave
    }
}
</script>

<style>
header {
    background-color: var(--primary-color-1-tint);
    border-bottom: 20px solid #E7ECFF;
    color: #416165;
}

.header-wrapper {
    padding: var(--gap-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#wave path {
    fill: var(--primary-color-2);
}

#citate-block {
    background-color: var(--primary-color-2);
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
}
</style>