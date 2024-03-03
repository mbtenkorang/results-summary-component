<script setup>

const props = defineProps({
    link_label: {
        type: String,
        required: true
    },
    link_url: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div
        class="font-semibold text-lg text-neutral-white bg-neutral-gray-blue text-center rounded-3xl py-3 lg:text-xl lg:py-4 lg:rounded-[1.75rem]">
        <a :href="link_url">{{ link_label }}</a>
    </div>
</template>