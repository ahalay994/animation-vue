<template>
    <left-menu/>
    <main class="w-full">
        <router-view v-slot="{ Component, route }">
            <transition name="route" mode="out-in" appear :key="route.path">
                <component :is="Component"/>
            </transition>
        </router-view>
    </main>
</template>

<script setup lang="ts">
import LeftMenu from '@c/Menu.vue'

</script>

<style scoped lang="scss">
.route-enter-from {
    transform: scale(0);
}

.route-enter-active,
.route-leave-active {
    transition: all .8s ease-out
}

.route-leave-to {
    transform: scale(0);
}

a {
    transition: all ease-in-out .3s;

    &.router-link-active {
        background-color: rgb(78, 252, 211);

        &:hover {
            background-color: rgb(43, 243, 196);
        }
    }
}
</style>
