<script setup>
const props = defineProps({
    average_score: {
        type: Number,
        required: true
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

        <p>
            <span>Great</span>
            You scored higher than 65% of the people who have taken these tests.
        </p>
    </div>
</template>