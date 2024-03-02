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
    <div class="font-semibold text-lg text-neutral-white border bg-neutral-gray-blue text-center rounded-3xl py-3">
        <a :href="link_url">{{ link_label }}</a>
    </div>
</template>