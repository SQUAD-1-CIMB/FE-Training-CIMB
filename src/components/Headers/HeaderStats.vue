<template>
  <!-- Header -->
  <div class="relative bg-red-500 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <a href="/admin/trainings">
              <card-stats
                statSubtitle="Training"
                statTitle="100"
                statArrow="up"
                statPercent="3.48"
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName="fa-solid fa-video"
                statIconColor="bg-red-500"
              /></a>
            </div>

            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <a href="/admin/users">
              <card-stats
                statSubtitle="NEW USERS"
                statTitle="2,356"
                statArrow="down"
                statPercent="3.48"
                statPercentColor="text-red-500"
                statDescripiron="Since last week"
                statIconName="fas fa-chart-pie"
                statIconColor="bg-orange-500"
              /></a>
            </div>
          
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
              <a href="/admin/approvals">

              <card-stats
                statSubtitle="Approval"
                statTitle="924"
                statArrow="down"
                statPercent="1.10"
                statPercentColor="text-orange-500"
                statDescripiron="Since yesterday"
                statIconName="fas fa-users"
                statIconColor="bg-pink-500"
              /></a>
            </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";

export default {
  components: {
    CardStats,
  },
};
</script>
