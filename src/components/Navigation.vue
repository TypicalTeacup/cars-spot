<script setup>
import { ref } from "vue";
import logo from "@assets/logo.svg";
import Button from "@components/Button.vue";

const links = [
    { title: "Galeria zdjęć", href: "#gallery" },
    { title: "FaQ", href: "#faq" },
];

const isOpen = ref(false);
</script>
<template>
    <nav class="py-4 container mx-auto">
        <div class="flex justify-between items-center">
            <img :src="logo" alt="Cars Spot" />
            <!--desktop-->
            <div class="hidden md:contents">
                <div class="flex gap-6">
                    <a
                        v-for="(link, index) in links"
                        :href="link.href"
                        :key="index"
                    >
                        {{ link.title }}
                    </a>
                </div>
                <Button class="float-right" primary>Zadzwoń do nas</Button>
            </div>
            <!--mobile-->
            <Button @click="isOpen = !isOpen" class="md:hidden" primary>
                Menu
            </Button>
        </div>
        <!--mobile-->
        <div
            class="grid md:hidden transition-all duration-500 pt-3"
            :class="{
                '[grid-template-rows:0fr]': !isOpen,
                '[grid-template-rows:1fr]': isOpen,
            }"
        >
            <div class="flex flex-col items-center gap-6 overflow-hidden">
                <a
                    v-for="(link, index) in links"
                    class="text-center w-max"
                    :href="link.href"
                    :key="index"
                >
                    {{ link.title }}
                </a>
                <Button class="overflow-hidden w-full flex-grow" primary>
                    Zadzwoń do nas
                </Button>
            </div>
        </div>
    </nav>
</template>
