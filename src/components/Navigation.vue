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
                        class="relative after:absolute after:-bottom-0 after:w-0 after:left-1/2 after:h-px after:bg-accent after:hover:w-full after:hover:left-0 after:transition-all after:duration-300"
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

            <Button class="border-none md:hidden" @click="isOpen = !isOpen">
                <div class="grid justify-items-center gap-1.5">
                    <span
                        class="h-1 w-8 rounded-full bg-accent transition"
                        :class="{ 'rotate-45 translate-y-2.5': isOpen }"
                    ></span>
                    <span
                        class="h-1 w-8 rounded-full bg-accent transition"
                        :class="{ 'scale-x-0 opacity-0': isOpen }"
                    ></span>
                    <span
                        class="h-1 w-8 rounded-full bg-accent"
                        :class="{ '-rotate-45 -translate-y-2.5': isOpen }"
                    ></span>
                </div>
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
                    class="text-center w-max relative after:absolute after:-bottom-0 after:w-0 after:left-1/2 after:h-px after:bg-accent after:hover:w-full after:hover:left-0 after:transition-all after:duration-300"
                    v-for="(link, index) in links"
                    :href="link.href"
                    :key="index"
                >
                    {{ link.title }}
                </a>
                <Button
                    class="overflow-hidden w-full flex-grow hover:scale-95"
                    primary
                >
                    Zadzwoń do nas
                </Button>
            </div>
        </div>
    </nav>
</template>
