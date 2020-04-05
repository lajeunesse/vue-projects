<template>
    <div>
        <router-view>
            <p>
                <router-link to="/">Home</router-link>
                <router-link to="/">/contact</router-link>
                <router-link to="/">/about</router-link>
            </p>
        </router-view>
    </div>
</template>

<script>
    export default {
        name: 'Main'
    };
</script>

<style>
    body {
        font-family: "Roboto", sans-serif;
    }
    p {
        text-align: center;
    }
    h1 {
        text-align: center;
    }
</style>
