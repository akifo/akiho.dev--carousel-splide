import { InjectionKey, computed, inject, onMounted, provide, ref } from "vue";

export type CarouselOptions = {
  effect: "slide" | "fade" | "webgl";
  slidesPerView?: number;
  autoplay?: boolean;
};

const useCarousel = (options: CarouselOptions, slideLength: number = 10) => {
  const activeIndex = ref(0);
  const isFade = computed(() => options.effect === "fade");
  const isSlide = computed(() => options.effect === "slide");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timer = ref<null | any>(null);
  function toNext() {
    stop();
    activeIndex.value++;
  }
  function toPrev() {
    stop();
    activeIndex.value--;
  }
  function incrementIndex() {
    activeIndex.value++;
    timer.value = setTimeout(incrementIndex, 1000);
  }
  function play() {
    stop();
    incrementIndex();
  }
  function stop() {
    if (!timer.value) return;
    clearTimeout(timer.value);
    timer.value = null;
  }
  function setIndex(index: number) {
    activeIndex.value = index;
  }

  onMounted(() => {
    if (options.autoplay) {
      play();
    }
  });

  return {
    options,
    activeIndex,
    isFade,
    isSlide,
    slideLength,
    toNext,
    toPrev,
    play,
    stop,
    timer,
    setIndex,
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
