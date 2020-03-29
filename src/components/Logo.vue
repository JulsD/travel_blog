// Logo
<template>
  <a href="/" class="logo">
    <LogoImage></LogoImage>
    <span class="logo-title">
        <span class="logo-title-item"
              v-for="(item, index) in logoTitle"
              :key="index"
              :style="`
                    --a-duration: ${(index > 3 ? 3 : index) | 1}s;
                    --a-delay: ${logoTitle.length - index - 1 > 4 ? index%3 : logoTitle.length - index}s;
                `">
            {{item}}
        </span>
    </span>
  </a>
</template>

<script>
import LogoImage from './atoms/LogoImage.vue';

export default {
    data: () => {
        return {
            logoTitle: 'BeWanderOne'
        }
    },
    components: {
        LogoImage
    }
}
</script>

<style>
.logo {
    display: flex;
    align-items: flex-end;
    color: var(--text-color-brand);
    text-decoration: none;
}

.logo-title {
    font-size: 0;
}

.logo-title-item {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: .15rem;
}

.logo:hover .logo-title-item {
    --a-duration: 1s;
    --a-delay: 0s;
    animation: swing-vartical var(--a-duration) linear infinite var(--a-delay) alternate;
}

.logo .ice-cream-wrapper {
    font-size: 12px;
    margin-right: var(--gap-1);
}

.logo:hover {
    text-decoration: none;
}

.logo:hover .ice-cream-ball {
    --a-duration: 1s;
    --a-delay: 0s;
    animation: swing-vartical var(--a-duration) linear infinite var(--a-delay) alternate;
}
.logo:hover .ice-cream-ball:nth-child(2) {
    --a-duration: 2s;
    --a-delay: .1s;
}
.logo:hover .ice-cream-ball:nth-child(2) {
    --a-duration: .5s;
    --a-delay: .2s;
}
</style>