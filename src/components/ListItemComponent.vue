<script setup>
const props = defineProps({
    summary_details: Object
})
</script>

<template>
    <li v-for="item in summary_details" :key="item.id">
        <div>
            <div>
                <span>
                    <img :src="item.icon" alt="" aria-hidden="true">
                </span>
                <h2>{{ item.category }}</h2>
            </div>
            <p>
                <span>{{ item.score }}</span> / <span>100</span>
            </p>
        </div>

    </li>
</template>