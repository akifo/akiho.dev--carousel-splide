<script lang="ts" setup>
import "swiper/css/bundle";
import AppDemoGroup from "./AppDemoGroup.vue";
import SwiperDefault from "./SwiperDefault.vue";
import SwiperNavigation from "./SwiperNavigation.vue";
import SwiperPagination from "./SwiperPagination.vue";
import SwiperPaginationDynamic from "./SwiperPaginationDynamic.vue";
import SwiperPaginationProgress from "./SwiperPaginationProgress.vue";
import SwiperPaginationFraction from "./SwiperPaginationFraction.vue";
import SwiperPaginationCustom from "./SwiperPaginationCustom.vue";
import SwiperScrollbar from "./SwiperScrollbar.vue";
import SwiperVertical from "./SwiperVertical.vue";
import SwiperSpaceBetween from "./SwiperSpaceBetween.vue";
import SwiperSlidesPerView from "./SwiperSlidesPerView.vue";
import SwiperSlidesPerViewAuto from "./SwiperSlidesPerViewAuto.vue";
import SwiperCentered from "./SwiperCentered.vue";
import SwiperCenteredAuto from "./SwiperCenteredAuto.vue";
import SwiperCssMode from "./SwiperCssMode.vue";
import SwiperFreemode from "./SwiperFreemode.vue";
import SwiperScrollContainer from "./SwiperScrollContainer.vue";
import SwiperGrid from "./SwiperGrid.vue";
import SwiperNested from "./SwiperNested.vue";
import SwiperGrabCursor from "./SwiperGrabCursor.vue";
import SwiperInfiniteLoop from "./SwiperInfiniteLoop.vue";
import SwiperSlidesPerGroupSkip from "./SwiperSlidesPerGroupSkip.vue";
import SwiperEffectFade from "./SwiperEffectFade.vue";
import SwiperEffectCube from "./SwiperEffectCube.vue";
import SwiperEffectCoverflow from "./SwiperEffectCoverflow.vue";
import SwiperEffectFlip from "./SwiperEffectFlip.vue";
import SwiperEffectCards from "./SwiperEffectCards.vue";
import SwiperEffectCreative from "./SwiperEffectCreative.vue";
import SwiperKeyboardControl from "./SwiperKeyboardControl.vue";
import SwiperMousewheelControl from "./SwiperMousewheelControl.vue";
import SwiperAutoplay from "./SwiperAutoplay.vue";
import SwiperAutoplayProgress from "./SwiperAutoplayProgress.vue";
import SwiperManipulation from "./SwiperManipulation.vue";
import SwiperThumbsGallery from "./SwiperThumbsGallery.vue";
import SwiperThumbsGalleryLoop from "./SwiperThumbsGalleryLoop.vue";
import SwiperHashNavigation from "./SwiperHashNavigation.vue";
import SwiperHistory from "./SwiperHistory.vue";
import SwiperRtl from "./SwiperRtl.vue";
import SwiperParallax from "./SwiperParallax.vue";
import SwiperLazyLoadImages from "./SwiperLazyLoadImages.vue";
import SwiperRatioBreakpoints from "./SwiperRatioBreakpoints.vue";
import SwiperZoom from "./SwiperZoom.vue";
import SwiperVirtualSlides from "./SwiperVirtualSlides.vue";
import SwiperCustomPlugin from "./SwiperCustomPlugin.vue";
import SwiperWatchSlidesVisibility from "./SwiperWatchSlidesVisibility.vue";
import SwiperRewind from "./SwiperRewind.vue";
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold">Swiper</h1>
    <input type="text" class="border" />
    <div class="flex flex-col gap-20 py-20">
      <AppDemoGroup>
        <template #title>Default</template>
        <template #description>オプションなし</template>
        <SwiperDefault />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Navigation</template>
        <template #description
          >Navigation modules を利用し、selector
          を指定する。サンプルのコードでは div タグを書いているが button
          にしないと、クリックでしか操作できない。</template
        >
        <SwiperNavigation />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Pagenation</template>
        <template #description
          >ページネーションコントローラーにフォーカスが当たらないので、キーボードで操作できない。スクリーンリーダーでも操作できない。設定項目があるのかもしれない。クリックしても切り替わらない。</template
        >
        <SwiperPagination />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Pagination dynamic</template>
        <template #description
          >10枚スライドがあってもコントローラーは 4
          つしか出さない。便利かも。</template
        >
        <SwiperPaginationDynamic />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Pagination progress</template>
        <template #description
          >プログレスバーみたいなのが表示される。pagination の type で
          progressbar を指定すると出現する。</template
        >
        <SwiperPaginationProgress />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Pagination fraction</template>
        <template #description
          >pagination が数字になる。pagination の type で fraction
          を指定すると出現する。
        </template>
        <SwiperPaginationFraction />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Pagination custom</template>
        <template #description
          >pagination を自分の好きな DOM にできる。pagination の type で custom
          を指定すると出現する。
        </template>
        <SwiperPaginationCustom />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Scrollbar</template>
        <template #description
          >Scrollbar
          が出現する。画像の上なので、見えにくいけど出てる。</template
        >
        <SwiperScrollbar />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Vertical</template>
        <template #description
          >縦方向にスクロールできる。画面全体とかで利用する人いそう。</template
        >
        <SwiperVertical />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Space between</template>
        <template #description
          >option に spaceBetween を渡すことでスライド間の gap
          を指定できる。スタイルで設定するのではないのは JavaScript
          で操作するのに都合が良いからだろうか。</template
        >
        <SwiperSpaceBetween />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Slides per view</template>
        <template #description
          >これも slide の width じゃなくて option で渡している。</template
        >
        <SwiperSlidesPerView />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Slides per view auto</template>
        <template #description
          >slidesPerView は style で指定した width
          に依存して表示が決まる感じ。`.swiper-slide:nth-child(2n)` に対して
          width 60% 指定している。</template
        >
        <SwiperSlidesPerViewAuto />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Centered</template>
        <template #description
          >1枚目のスライドを真ん中にある状態から開始できる</template
        >
        <SwiperCentered />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Centered auto</template>
        <template #description
          >active slide
          の幅は個別に指定でき、その他のスペースをうめるスライドを自動で良い感じに配置してくれる。</template
        >
        <SwiperCenteredAuto />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Css mode</template>
        <template #description
          >スワイプで動くから便利だし、これはデフォルトでどのトランジションにおいても有効にしたいな。</template
        >
        <SwiperCssMode />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Freemode</template>
        <template #description>スライドを途中で止めることができる</template>
        <SwiperFreemode />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Scroll container</template>
        <template #description
          >これは swiper
          を使う必要ないのでは？どういう用途があるんだろう。わかってない。</template
        >
        <SwiperScrollContainer />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Grid</template>
        <template #description
          >一次配列を良い感じにグリッドにしてくれる</template
        >
        <SwiperGrid />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Nested</template>
        <template #description>カルーセルの中にカルーセルができる。</template>
        <SwiperNested />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Grab cursor</template>
        <template #description
          >マウスダウンしたときに、カーソルが手で掴んでいる状態になる。</template
        >
        <SwiperGrabCursor />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Infinite loop</template>
        <template #description
          >rewind と違って、左端や右端がない感じの遷移になる。</template
        >
        <SwiperInfiniteLoop />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Slides per group skip</template>
        <template #description>
          ナビゲーションやコントローラで次へを押したときに２つずつスライドを移動できる。
          keyboard.enabled: true つけると、window に keydown event
          生えてしまぞ。
        </template>
        <SwiperSlidesPerGroupSkip />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Effect fade</template>
        <template #description
          >フェードを設定できる。ドラッグしたときに、ドラッグ距離に応じて、フェードが遷移するのがおもしろい。</template
        >
        <SwiperEffectFade />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Effect cube</template>
        <template #description>コメントなし</template>
        <SwiperEffectCube />
      </AppDemoGroup>

      <AppDemoGroup>
        <template #title>Effect coverflow</template>
        <template #description
          >こういう少しトリッキーな Effect
          は需要あるか不明だけど、触っていておもしろい。</template
        >
        <SwiperEffectCoverflow />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Effect flip</template>
        <template #description>回転する</template>
        <SwiperEffectFlip />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Effect cards</template>
        <template #description
          >動きはおもしろいけど、どういうケースで使うかイメージは沸かない。</template
        >
        <SwiperEffectCards />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Effect creative</template>
        <template #description
          >prev, next に対して CreativeEffectTransform で option を渡すと、in
          out の遷移ができるイメージ。結構自由にカスタマイズできそう。</template
        >
        <SwiperEffectCreative />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Keyboard control</template>
        <template #description
          >window event だから、これはダメ。onlyInViewport
          というオプションがあるが、それでもダメ。</template
        >
        <SwiperKeyboardControl />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Mousewheel control</template>
        <template #description
          >これは 100vh
          して利用するケースありそう。アクセシビリティとしてはどうなのか、調べたほうがよさそう。</template
        >
        <SwiperMousewheelControl />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Autoplay</template>
        <template #description>普通の autoplay って感じ</template>
        <SwiperAutoplay />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Autoplay progress</template>
        <template #description
          >残り秒数が表示される。カスタマイズできるのでおもしろい。stroke-dashoffset
          を利用して progress circle を表現している。</template
        >
        <SwiperAutoplayProgress />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Manipulation</template>
        <template #description
          >swiper が提供している prependSlide method を使いたいけど vue のような
          仮想DOM との相性が悪い。</template
        >
        <SwiperManipulation />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Thumbs gallery</template>
        <template #description
          >サムネイルは需要ありそう。swiper
          での実装が少しだけ複雑で、同じリストを２つ DOM
          に構築しないといけない。</template
        >
        <SwiperThumbsGallery />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Thumbs gallery loop</template>
        <template #description>↑のに loop true を渡しただけ</template>
        <SwiperThumbsGalleryLoop />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Multiple swipers</template>
        <template #description
          >これは同じ画面内に複数の swiper
          を作れるよ。ってことなので省略</template
        >
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Hash navigation</template>
        <template #description
          >Vue Router でハッシュ使っているので、うまく動かないけど、URL
          と連動して便利そう https://524dxr.csb.app/#slide5 にアクセスすると
          slide5 がみれるので便利そう。
        </template>
        <SwiperHashNavigation />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>History</template>
        <template #description
          >これも Vue Router の都合で動かないけど、ブラウザの History
          に記録されていく。</template
        >
        <SwiperHistory />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Rtl</template>
        <template #description
          >html の attributes で dir="rtl" を書く。これは html
          として正しくない使い方なので、微妙。option で提供するべき。</template
        >
        <SwiperRtl />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Parallax</template>
        <template #description
          >data-swiper-parallax のような html attributes で指定する。</template
        >
        <SwiperParallax />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Lazy load images</template>
        <template #description
          >lazy: true,
          というオプションを指定するようにサンプルに書いてあるけど、型に存在しない。昔はあったのかも。今は
          html attributes で loading="lazy" にする感じかな？</template
        >
        <SwiperLazyLoadImages />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Responsive breakpoints</template>
        <template #description>これまでに何度か書いたので省略</template>
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Ratio breakpoints</template>
        <template #description
          >ブラウザの縦横比に応じて slidesPerView
          とかを設定できる。便利かも。</template
        >
        <SwiperRatioBreakpoints />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Autoheight</template>
        <template #description>高さが中身のコンテンツに応じて動く</template>
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Zoom</template>
        <template #description
          >double click した箇所が zoom する。いらなそう。</template
        >
        <SwiperZoom />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Virtual slides</template>
        <template #description
          >ちゃんと動いているかわからないけど、いわゆる Virtual Scroll
          があって、options で渡すだけで実現できるぽい。</template
        >
        <SwiperVirtualSlides />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Custom plugin</template>
        <template #description
          >この swiperjs の設計を参考にレンダラーは考えてもいいかも</template
        >
        <SwiperCustomPlugin />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Slideable menu</template>
        <template #description
          >何のために提供しているのか、わからない。</template
        >
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Change direction</template>
        <template #description
          >option にある on を利用して direction を変更している。</template
        >
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Watch slides visibility</template>
        <template #description
          >watchSlidesProgress を true にしておくと class swiper-slide-visible
          が付与される。デフォで付与しておくとよさそう</template
        >
        <SwiperWatchSlidesVisibility />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Rewind</template>
        <template #description>左端から右端にビューンと移動する感じ</template>
        <SwiperRewind />
      </AppDemoGroup>
    </div>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  position: relative;
}
.swiper-wrapper {
  width: 100%;
  max-height: 300px;
}
</style>
