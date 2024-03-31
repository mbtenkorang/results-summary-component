<script setup>
const props = defineProps({
    average_score: {
        type: Number,
        default: 0
    }
})
</script>

<template>
    <div
        class="px-6 py-6 text-lg flex flex-col items-center text-neutral-white border-b border-neutral-lavender rounded-b-[3rem] bg-gradient-to-b from-gradient-slate-blue from-30% to-gradient-royal-blue md:rounded-3xl md:justify-evenly">
        <h1 class="text-xl lg:text-2xl font-extrabold" aria-labelledby="heading">Your Result</h1>
        <div
            class="text-center my-4 px-14 py-12  border-neutral-pale-blue rounded-full bg-gradient-to-b from-gradient-violet-blue from-10% to-gradient-persian-blue md:py-14 md:px-16">
            <p class="flex flex-col items-center">
                <span class="text-6xl font-extrabold md:text-7xl">{{ average_score }}</span>
                <span>of 100</span>
            </p>
        </div>
        <p class="text-center text-2xl font-bold mb-2 md:text-4xl">Great</p>
        <p class="text-center w-5/6">
            You scored higher than 65% of the people who have taken these tests.
        </p>
    </div>
</template>