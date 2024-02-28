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
    <div>
        <a :href="link_url">{{ link_label }}</a>
    </div>
</template>