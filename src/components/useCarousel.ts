import { InjectionKey, computed, inject, provide, ref } from "vue";

export type CarouselOptions = {
  effect: "slide" | "fade" | "webgl";
  slidesPerView?: number;
};

const useCarousel = (options: CarouselOptions) => {
  const activeIndex = ref(0);
  const isFade = computed(() => options.effect === "fade");
  const isSlide = computed(() => options.effect === "slide");

  function toNext() {
    activeIndex.value++;
  }
  function toPrev() {
    activeIndex.value--;
  }

  return {
    options,
    activeIndex,
    isFade,
    isSlide,
    toNext,
    toPrev,
  };
};

type CarouselContext = ReturnType<typeof useCarousel>;

// FIXME: これであっているか自信ない。複数回実行されたとき大丈夫？ネストしている時とか。
const CarouselSymbol: InjectionKey<CarouselContext> = Symbol();

export const provideCarousel = (options: CarouselOptions) => {
  const context = useCarousel(options);
  provide(CarouselSymbol, context);
  return context;
};

export const injectCarousel = () => {
  const context = inject(CarouselSymbol);

  if (!context) {
    throw new Error("You must call provideCarousel before injectCarousel");
  }
  return context;
};
