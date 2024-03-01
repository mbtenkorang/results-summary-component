<script setup>
const props = defineProps({
    average_score: {
        type: Number,
        default: 0
    }
})
</script>

<template>
    <div>
        <p>
            Your result
        <div>
            <span>{{ average_score }}</span>
            <span>of 100</span>
        </div>
        </p>
        <p>Great</p>
        <p>
            You scored higher than 65% of the people who have taken these tests.
        </p>
    </div>
</template>