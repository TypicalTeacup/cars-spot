<script setup>
import hero from "@assets/hero.png";
import waves from "@assets/waves.svg";
import Button from "@components/Button.vue";

const goto = (href) => {
    window.location.href = href;
};
</script>

<template>
    <img
        class="absolute -z-20 top-0 right-20 hidden lg:block translate-x-48 lg:translate-x-0 select-none"
        data-aos="fade-left"
        data-aos-delay="200"
        :src="waves"
        alt=""
    />
    <main id="hero" class="relative">
        <div
            id="hero-container"
            class="flex flex-col gap-12 container mx-auto pt-16 lg:pt-[120px] pb-64"
        >
            <div
                id="hero-content"
                class="flex flex-col gap-8 lg:pr-20 justify-center items-center lg:justify-start lg:items-start"
            >
                <h1
                    class="uppercase font-title text-[76.29px] leading-[110%] -tracking-[0.04em] text-center lg:text-left text-pretty md:w-10/12 lg:w-1/2"
                    data-aos="fade-up"
                >
                    Sprzedajemy samochody z Europy
                </h1>
                <p
                    class="md:w-1/2 lg:w-1/4 font-condensed text-center lg:text-left"
                    data-aos="fade-up"
                    data-aos-delay="50"
                >
                    Kup komfortowy pojazd, aby każda podróż była wyjątkowym
                    przeżyciem.
                </p>
            </div>
            <div
                id="hero-buttons"
                class="flex gap-6 justify-center lg:justify-start pb-3 sm:pb-0"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <Button @click="goto('#gallery')" class="basis-1 flex-grow sm:flex-grow-0 sm:basis-auto" primary>
                    Zobacz zdjęcia
                </Button>
                <Button class="basis-1 flex-grow sm:flex-grow-0 sm:basis-auto">Zadzwoń do nas</Button>
            </div>
        </div>
        <img
            class="absolute top-2/3 lg:top-1/2 right-0 -z-10 w-fit h-fit select-none"
            data-aos="fade-left"
            data-aos-delay="100"
            :src="hero"
            alt=""
        />
    </main>
</template>
