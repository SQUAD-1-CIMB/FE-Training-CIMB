<template>
  <!-- Header -->
  <div class="relative bg-grey-500 pb-32" style="padding-top: 50px">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div class="flex justify-center">
        <!-- Card stats -->
        <!-- <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4"> -->
        <!-- <card-stats
              statSubtitle="TOTAL COURSE"
              :statTitle="`${totalItems}`"
              statArrow="up"
              statPercent="3.48"
              statPercentColor="text-emerald-500"
              statDescripiron="Since last month"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            /> -->
        <!-- </div>
        </div> -->
        <img src="@/assets/img/LogoOcto.png" width="20%" />
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import CardStats from "@/components/Cards/CardStats.vue";
import { defineProps } from "vue";

const props = defineProps({
  totalItems: {
    type: Number,
  },
});
</script>
