<script setup>
const props = defineProps({
    average_score: {
        type: Number,
        default: 0
    }
})
</script>

<template>
    <div role="banner"
        class="px-6 py-6 text-lg flex flex-col items-center text-neutral-white border-b border-neutral-lavender rounded-b-[3rem] bg-gradient-to-b from-gradient-slate-blue from-5% to-gradient-royal-blue">
        <p class="text-center">
            Your Result
        <div
            class="my-4 px-8 py-6 flex flex-col items-center border-neutral-pale-blue rounded-full bg-gradient-to-b from-gradient-violet-blue from-10% to-gradient-persian-blue">
            <span class="text-6xl font-extrabold">{{ average_score }}</span>
            <span>of 100</span>
        </div>
        </p>
        <p class="text-center text-2xl font-bold mb-2">Great</p>
        <p class="text-center w-5/6">
            You scored higher than 65% of the people who have taken these tests.
        </p>
    </div>
</template>