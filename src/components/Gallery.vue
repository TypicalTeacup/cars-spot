<script setup>
import { ref } from "vue";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const modules = [Pagination, Autoplay];

const props = defineProps({
    van: Boolean,
});

const images = ["car1.jpg", "car2.jpg", "car3.jpg", "car4.jpg", "car5.jpg"];
const vanImages = ["van1.jpg", "van2.jpg", "van3.jpg", "van4.jpg", "van5.jpg"];

const galleryVan = ref(false);
</script>

<template>
    <section
        id="gallery"
        class="pt-20 [--gallery-width:100vw] sm:[--gallery-width:640px] md:[--gallery-width:768px] lg:[--gallery-width:1024px] xl:[--gallery-width:1280px] 2xl:[--gallery-width:1536px]"
    >
        <div
            id="gallery-header"
            class="flex flex-col gap-6 container mx-auto p-4"
        >
            <div>
                <h4
                    class="text-accent text-[21.5px] font-condensed"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    Prezentacja firmy
                </h4>
                <h2
                    class="uppercase font-title text-[40px] leading-[48px]"
                    data-aos="fade-right"
                    data-aos-delay="50"
                >
                    Zobacz naszą galerię zdjęć
                </h2>
            </div>
            <div class="flex gap-20" data-aos="fade-right" data-aos-once="true">
                <a
                    @click.prevent="galleryVan = false"
                    class="cursor-pointer transition text-[15px]"
                    :class="{
                        'text-accent font-semibold underline': !galleryVan,
                        'text-black font-normal': galleryVan,
                    }"
                    >Samochody osobowe</a
                >
                <a
                    @click.prevent="galleryVan = true"
                    class="cursor-pointer transition text-[15px]"
                    :class="{
                        'text-accent font-semibold underline': galleryVan,
                        'text-black font-normal': !galleryVan,
                    }"
                    >Samochody dostawcze</a
                >
            </div>
        </div>

        <swiper
            class="h-fit w-screen my-10 pl-[calc((100vw_-_var(--gallery-width))_/_2)_!important]"
            data-aos="fade-up"
            :modules="modules"
            :loop="true"
            :pagination="{
                el: '.pagination',
                clickable: true,
            }"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
            }"
            :keyboard="{ enabled: true }"
            slides-per-view="auto"
            :space-between="64"
        >
            <swiper-slide
                v-if="galleryVan"
                v-for="(image, index) in vanImages"
                :key="`van${index}`"
            >
                <img
                    class="aspect-image object-cover h-[446px]"
                    :src="`/img/gallery/${image}`"
                    alt=""
                />
            </swiper-slide>
            <swiper-slide v-else v-for="(image, index) in images" :key="index">
                <img
                    class="aspect-image object-cover max-w-screen-sm w-screen"
                    :src="`/img/gallery/${image}`"
                    alt=""
                />
            </swiper-slide>
        </swiper>

        <div
            class="pagination container mx-auto flex justify-center pt-5 mb-20"
            data-aos="fade-up"
        ></div>
    </section>
</template>

<style scoped>
.pagination {
    --swiper-theme-color: rgb(1 71 255);
    --swiper-pagination-bullet-inactive-color: #f1f1f1;
    --swiper-pagination-bullet-inactive-opacity: 1;
}

.swiper-slide {
    width: auto;
}
</style>
