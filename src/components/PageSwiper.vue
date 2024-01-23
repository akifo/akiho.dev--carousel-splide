<script lang="ts" setup>
import "swiper/css/bundle";
import AppDemoGroup from "./AppDemoGroup.vue";
import SwiperBasicCentered from "./SwiperBasicCentered.vue";
import SwiperBasicLefted from "./SwiperBasicLefted.vue";
import SwiperDefault from "./SwiperDefault.vue";
import SwiperNavigation from "./SwiperNavigation.vue";
import SwiperPagination from "./SwiperPagination.vue";
import SwiperPaginationDynamic from "./SwiperPaginationDynamic.vue";
import SwiperPaginationProgress from "./SwiperPaginationProgress.vue";
import SwiperPaginationFraction from "./SwiperPaginationFraction.vue";
import SwiperPaginationCustom from "./SwiperPaginationCustom.vue";
import SwiperScrollbar from "./SwiperScrollbar.vue";
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

      <ul>
        <li>はみ出た部分を薄くする</li>
        <li>ブレークポイントで切り替え</li>
        <li>スライド数に応じて切り替え</li>
        <li>無限スライド</li>
        <li>サムネ連動</li>
        <li>交互切り替え</li>
        <li>入れ子</li>
        <li>フェード</li>
        <li>in out animation</li>
        <li>縦方向</li>
        <li>スライドごとに表示時間変える</li>
        <li>スライド外のコンテンツと連動</li>
      </ul>

      <AppDemoGroup>
        <template #title>Navigation</template>
        <template #description>オプションなし</template>
        <SwiperBasicCentered />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Pagination</template>
        <template #description>オプションなし</template>
        <SwiperBasicLefted />
      </AppDemoGroup>

      <AppDemoGroup>
        <template #title>Pagination</template>
        <template #description>オプションなし</template>
        <SwiperBasicLefted />
      </AppDemoGroup>
    </div>
  </div>
</template>

<style>
.swiper {
  width: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 300px;
}
</style>
