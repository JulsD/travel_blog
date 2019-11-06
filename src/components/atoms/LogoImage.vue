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
    --opacity: .93;
    position: relative;
}

.ice-cream-cup {
    --cup-color: hsla(178, 25%, 77%, var(--opacity));
    --cup-color-l: hsla(178, 25%, 100%, var(--opacity));
    --cup-color-r: hsla(178, 25%, 60%, var(--opacity));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    position: relative;
}

.ice-cream-cup:before {
    content: '';
    display: block;
    width: 4em;
    height: 2em;
    background-color: var(--cup-color);
    border-right: 1px solid var(--primary-color-2-shade);
    border-radius: 0 0 8em 8em;
    box-shadow: 
                inset 3px 0px var(--cup-color-l), 
                inset -5px -3px var(--cup-color-r);
}

.ice-cream-cup:after {
    content: '';
    display: block;
    width: 3em;
    height: .5em;
    background-color: var(--cup-color);
    border-right: 1px solid var(--primary-color-2-shade);
    border-radius: 100em 100em 0 0;
    box-shadow: 
                inset 5px 1px var(--cup-color-l), 
                inset -5px 0px var(--cup-color-r);
}

.ice-cream-cup-leg {
    content: '';
    display: block;
    justify-content: space-between;
    width: 0.5em;
    height: 1em;
    background-color: var(--cup-color);
    border-right: 1px solid var(--primary-color-2-shade);
    box-shadow: 
                inset 3px 0px var(--cup-color-l), 
                inset -3px -1px var(--cup-color-r);
}

.ice-cream-balls {
    height: 2em;
    position: relative;
    z-index: 0;
}

.ice-cream-ball {
    --box-shadow-color-r: '';
    --box-shadow-color-l: '';
    content: '';
    display: block; 
    border-radius: 50%;
    width: 2em;
    height: 2em;
    position: absolute;
    box-shadow: 
                inset 3px 3px var(--box-shadow-color-l), 
                inset -5px -5px var(--box-shadow-color-r);
}

.ice-cream-ball::after {
    content: '';
    display: block; 
}

.ice-cream-ball:nth-child(1) {
    --box-shadow-color-r: hsl(346, 100%, 25%);
    --box-shadow-color-l: hsl(346, 100%, 75%);
    background-color: hsl(346, 100%, 51%);
    z-index: 1;
    top: 0;
    left: calc(50% - 1em);
}

.ice-cream-ball:nth-child(2) {
    --box-shadow-color-r: hsl(80, 60%, 25%);
    --box-shadow-color-l: hsl(80, 60%, 75%);
    background-color: hsl(80, 60%, 35%);
    z-index: 2;
    bottom: -.8em;
    left: 0;
}

.ice-cream-ball:nth-child(3) {
    --box-shadow-color-r: hsl(45, 100%, 25%);
    --box-shadow-color-l: hsl(45, 100%, 95%);
    background-color: hsl(45, 100%, 51%);
    z-index: 3;
    bottom: -1em;
    right: 0;
}
</style>