// Logo
<template>
  <a href="/home" class="logo">
    <span class="icon-earth "></span>
    <span>{{logoTitle}}</span>
  </a>
</template>

<script>
export default {
    data: () => {
        return {
            logoTitle: 'Travel Blog'
        }
    }
}
</script>

<style>
.logo {
    display: flex;
    align-items: center;
    color: var(--text-color-dark);
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
}

.logo:hover {
    text-decoration: none;
}

.logo [class^="icon-"] {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    box-sizing: border-box;
    font-size: inherit;
    color: inherit;
    padding: var(--gap-1);
    position: relative;
}

.logo [class^="icon-"]:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 2px dashed var(--text-color-light);
}

.logo:hover [class^="icon-"]:after {
    animation: 
    rotate-gorizontal 3s ease-out infinite .2s alternate-reverse;
}

.logo [class^="icon-"] + span {
    margin-left: var(--gap-1);
}
</style>