<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <training-card-table />
      </div>
    </div>
  </template>
  <script>
  import TrainingCardTable from "@/components/Cards/TrainingCardTable.vue";
  
  export default {
    components: {
        TrainingCardTable,
    },
  };
  </script>
  