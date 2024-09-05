<script setup>
import SeoArticle from "@components/SeoArticle.vue";
</script>

<template>
    <section id="seo" class="bg-gray-900 py-[88px] overflow-hidden">
        <div
            class="container mx-auto md:columns-2 flex flex-col md:flex-row md:justify-between gap-12"
        >
            <SeoArticle data-aos="fade-down" />
            <SeoArticle data-aos="fade-down" />
        </div>
    </section>
</template>
