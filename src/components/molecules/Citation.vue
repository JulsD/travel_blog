// Citation.component.vue
<template>
  <div id="citation-block">
      <div class="main-wrapper">
            <blockquote>
                <b>{{citation}}</b> 
                <i>( {{author}} )</i>
            </blockquote>
        </div>
        <Wave />
    </div>
</template>

<script>
import Wave from '../atoms/Wave.vue';

export default {
data: () => {
        return {
            citation: '“Wherever you go, go with all your heart”',
            author: 'Confucius'
        }
    },
    components: {
        Wave
    }
}
</script>

<style>
#citation-block {
    background-color: var(--primary-color-2);
    color: var(--primary-color-1-tint);
    text-shadow: 1px 1px var(--grey-color);
    text-align: center;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
    overflow: hidden;
}

#citation-block blockquote {
    min-height: 70px;
    max-width: 60%;
    margin: 0 auto;
    padding: 0 0 var(--gap-3);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#citation-block blockquote b {
    text-align: left;
}

#citation-block blockquote i {
    text-align: right;
    font-size: 1.2rem;
}

#citation-block #wave {
    width: 150%;
    animation: swing-gorizontal 5s ease-out infinite .2s alternate-reverse;
}

#citation-block #wave path {
    fill: white;
}
</style>