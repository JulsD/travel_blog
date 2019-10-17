// LogoImage.component.vue

<template>
    <div class="ice-cream-wrapper">
        <div class="ice-cream-balls">
            <span class="ice-cream-ball"></span>
            <span class="ice-cream-ball"></span>
            <span class="ice-cream-ball"></span>
        </div> 
        <div class="ice-cream-cup">
            <span class="ice-cream-cup-leg"></span>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.ice-cream-wrapper {
    position: relative;
    font-size: 16px;
}
.ice-cream-cup:before {
    content: '';
    display: block;
    width: 4em;
    height: 2em;
    background-color: blue; 
    border-radius: 0 0 8em 8em;
}

.ice-cream-cup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    position: relative;
}

.ice-cream-cup:after {
    content: '';
    display: block;
    width: 3em;
    height: .5em;
    background-color: blue; 
    border-radius: 100em 100em 0 0;
}

.ice-cream-cup-leg {
    content: '';
    display: block;
    justify-content: space-between;
    width: 0.5em;
    height: 1.5em;
    background-color: blue; 
}

.ice-cream-balls {
    height: 2em;
    position: relative;
    z-index: 0;
}

.ice-cream-ball {
    content: '';
    display: block; 
    border-radius: 50%;
    width: 2em;
    height: 2em;
    position: absolute;
}

.ice-cream-ball:nth-child(1) {
    background-color: red;
    z-index: 1;
    top: 0;
    left: calc(50% - 1em);
}

.ice-cream-ball:nth-child(2) {
    background-color: green;
    z-index: 2;
    bottom: -1em;
    left: 0;
}

.ice-cream-ball:nth-child(3) {
    background-color: yellow;
    z-index: 3;
    bottom: -1em;
    right: 0;
}
</style>