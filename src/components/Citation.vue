// Citation.component.vue
<template>
  <div id="citation-block">
      <div class="main-wrapper">
            <blockquote>
                <b>{{citation}}</b> 
                <i>( {{author}} )</i>
            </blockquote>
        </div>
    </div>
</template>

<script>
export default {
data: () => {
        return {
            citation: '“Wherever you go, go with all your heart”',
            author: 'Confucius'
        }
    }
}
</script>

<style>
#citation-block {
    background-color: var(--primary-color-2-shade);
    background: linear-gradient(90deg,var(--primary-color-1-tint) 0%, var(--primary-color-2-shade) 100%);;
    color: var(--white-color);
    text-align: center;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;
    overflow: hidden;
}

#citation-block blockquote {
    max-width: 60%;
    margin: 0;
    padding: var(--gap-1) 0;
    text-align: right;
    margin: 0 0 0 auto;
}

#citation-block blockquote i {
    font-size: 1rem;
}
</style>