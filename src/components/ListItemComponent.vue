<script setup>
const props = defineProps({
    summary_details: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <li v-for="item in summary_details" :key="item.category">
        <div class="flex justify-between">
            <div class="flex items-center">
                <span class="mr-2">
                    <img :src="item.icon" alt="" aria-hidden="true">
                </span>
                <h2 class="text-lg font-medium lg:text-xl" :id="item.category.toLowerCase()">{{ item.category }}</h2>
            </div>
            <p class="font-extrabold lg:text-xl">
                <span class="text-neutral-gray-blue">{{ item.score }}</span>
                <span class="text-neutral-gray-blue/50"> / 100</span>
            </p>
        </div>
    </li>
</template>