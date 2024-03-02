<script setup>
const props = defineProps({
    summary_details: Object
})
</script>

<template>
    <li v-for="item in summary_details" :key="item.category">
        <div class="flex justify-between">
            <div class="flex items-center">
                <span>
                    <img :src="item.icon" alt="" aria-hidden="true">
                </span>
                <h2 class="text-lg font-extrabold">{{ item.category }}</h2>
            </div>
            <p class="font-bold">
                <span class="text-neutral-gray-blue">{{ item.score }}</span> / <span
                    class="text-neutral-pale-blue">100</span>
            </p>
        </div>
    </li>
</template>