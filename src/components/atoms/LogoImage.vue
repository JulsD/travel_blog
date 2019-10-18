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
    --opacity: .9;
    position: relative;
    font-size: 16px;
}

.ice-cream-cup {
    --cup-color: hsla(214, 100%, 84%, var(--opacity));
    --cup-color-l: hsla(214, 100%, 100%, var(--opacity));
    --cup-color-r: hsla(214, 100%, 60%, var(--opacity));
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
    border-radius: 0 0 8em 8em;
    box-shadow: 
                inset 4px 0px 2px var(--cup-color-l), 
                inset -5px -5px 10px var(--cup-color-r);
}

.ice-cream-cup:after {
    content: '';
    display: block;
    width: 3em;
    height: .5em;
    background-color: var(--cup-color);
    border-radius: 100em 100em 0 0;
    box-shadow: 
                inset 5px 0px 2px var(--cup-color-l), 
                inset -5px 0px 10px var(--cup-color-r);
}

.ice-cream-cup-leg {
    content: '';
    display: block;
    justify-content: space-between;
    width: 0.5em;
    height: 1.5em;
    background-color: var(--cup-color);
    box-shadow: 
                inset 4px 0px 2px var(--cup-color-l), 
                inset -5px -5px 10px var(--cup-color-r);
}

.ice-cream-balls {
    height: 2em;
    position: relative;
    z-index: 0;
}

.ice-cream-ball {
    --box-shadow-color-r: hsla(359, 100%, 25%, var(--opacity));
    --box-shadow-color-l: hsla(359, 100%, 75%, var(--opacity));
    content: '';
    display: block; 
    border-radius: 50%;
    width: 2em;
    height: 2em;
    position: absolute;
    /* border: 1px solid var(--boll-color); */
    box-shadow: 
                inset 3px 3px 2px var(--box-shadow-color-l), 
                inset -5px -5px 10px var(--box-shadow-color-r);
}

.ice-cream-ball:nth-child(1) {
    --box-shadow-color-r: hsla(359, 100%, 25%, var(--opacity));
    --box-shadow-color-l: hsla(359, 100%, 75%, var(--opacity));
    background-color: hsla(359, 100%, 50%, var(--opacity));
    z-index: 1;
    top: 0;
    left: calc(50% - 1em);
}

.ice-cream-ball:nth-child(2) {
    --box-shadow-color-r: hsla(110, 27%, 25%, var(--opacity));
    --box-shadow-color-l: hsla(110, 27%, 75%, var(--opacity));
    background-color: hsla(110, 27%, 49%, var(--opacity));
    z-index: 2;
    bottom: -.8em;
    left: 0;
}

.ice-cream-ball:nth-child(3) {
    --box-shadow-color-r: hsla(63, 99%, 25%, var(--opacity));
    --box-shadow-color-l: hsla(63, 99%, 95%, var(--opacity));
    background-color: hsla(63, 99%, 71%, var(--opacity));
    z-index: 3;
    bottom: -1em;
    right: 0;
}
</style>