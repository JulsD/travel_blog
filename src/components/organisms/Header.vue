// Header
<template>
  <header>
    <div class="main-wrapper header-wrapper">
        <div class="logo">{{logoTitle}}</div>
        <nav>
            <ul>
                <li v-for="link in links" :key="link.title">
                    <router-link :to="link.href">{{ link.title }}</router-link>
                </li>
            </ul>
        </nav>
    </div>
    <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1416.99 174.01">
        <path class="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z" transform="translate(0 -135.53)"/>
    </svg>
    <div id="citate-block">
        some good fraze here
    </div>
  </header>
</template>

<script>
export default {
    data: () => {
        return {
            logoTitle: 'Travel Blog',
            links: [
                {
                    title: 'Home',
                    href: '/'
                },
                {
                    title: 'Demo 1',
                    href: '/demo/1'
                },
                {
                    title: 'Demo 2',
                    href: '/demo/2'
                }
            ]
        }
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

#wave {
    display: block;
    position: relative;
    width: 100%;
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

nav {
    background-color: #e6efff;
    color: #bbd1e9;
}
</style>