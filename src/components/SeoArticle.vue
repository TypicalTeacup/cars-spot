<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    title: {
        type: String,
        default:
            "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.",
    },
    content: {
        type: String,
        default:
            "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et lorem quis sem scelerisque malesuada ut vel ligula. Proin id risus vel felis cursus tincidunt. Nam sollicitudin, risus vel vulputate congue, ante mi fermentum nulla, non luctus mauris ligula id felis. Fusce ultrices velit ut lacus aliquam, nec sagittis turpis vestibulum. Curabitur euismod enim a felis fermentum, ut pulvinar nulla laoreet. Sed in nisl sit amet sapien elementum convallis. Nulla facilisi. Integer et quam non orci rhoncus venenatis. Cras a leo nec metus eleifend varius. Suspendisse vitae augue sed tortor cursus auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus congue, ipsum sed tempus varius, quam eros cursus sapien, sit amet fermentum sem sapien id mi. Praesent finibus neque ut nisi pretium, non viverra orci efficitur. Morbi aliquam est nec justo gravida feugiat.",
    },
});

const truncateToTwoLines = (pTag, inputString) => {
    const style = window.getComputedStyle(pTag);
    const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const width = pTag.clientWidth;
    const lineHeight = parseFloat(style.lineHeight);

    const tempElement = document.createElement("div");
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    tempElement.style.width = `${width}px`;
    tempElement.style.font = font;
    tempElement.style.whiteSpace = "pre-wrap";
    tempElement.style.lineHeight = style.lineHeight;
    document.body.appendChild(tempElement);

    const words = inputString.split(" ");
    let text = "";
    let truncated = false;

    for (let i = 0; i < words.length; i++) {
        const testText = text + (text ? " " : "") + words[i];
        tempElement.innerText = testText + " [...]";
        if (tempElement.clientHeight > 2 * lineHeight) {
            truncated = true;
            break;
        }
        text = testText;
    }

    document.body.removeChild(tempElement);

    if (truncated) {
        return text + " [...]";
    } else {
        return inputString;
    }
};

const paragraph = ref(null);

const isOpen = ref(false);
const previewContent = computed(() => {
    return paragraph.value
        ? truncateToTwoLines(paragraph.value, props.content)
        : "";
});
</script>

<template>
    <article class="text-white basis-full flex flex-col gap-4">
        <h3 class="font-title -tracking-[0.03em] text-[25px]">
            {{ props.title }}
        </h3>
        <div class="flex flex-col gap-6">
            <p
                ref="paragraph"
                class="font-condensed text-[14px] overflow-hidden transition-all duration-150"
                :class="{ 'max-h-[42px]': !isOpen, 'max-h-screen': isOpen }"
            >
                {{ isOpen ? content : previewContent }}
            </p>
            <button
                class="flex items-end gap-1.5 text-sm pb-1.5 border-b-white border-b-[1.5px] w-min -mb-[1.5px]"
                @click="isOpen = !isOpen"
            >
                {{ isOpen ? "Zwiń" : "Rozwiń" }}
                <svg
                    class="transition-all duration-150"
                    :class="{ '-rotate-90': isOpen }"
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 8.44461L1.07955 7.35086L5.58239 11.8537L5.58239 0.191772L7.14489 0.191773L7.14489 11.8537L11.6335 7.35086L12.7273 8.44461L6.36364 14.8083L0 8.44461Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    </article>
</template>
