<script setup>
const props = defineProps({
    primary: Boolean,
});
</script>

<template>
    <button
        class="font-sans rounded-lg font-semibold px-6 py-3 border border-accent hover:scale-105 transition-all"
        :class="{
            'bg-gray-50 text-accent': !props.primary,
            'bg-accent outline-accent text-white': props.primary,
        }"
    >
        <slot></slot>
    </button>
</template>
