<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <approval-card-table />
      </div>
    </div>
  </template>
  <script>
  import ApprovalCardTable from "@/components/Cards/ApprovalCardTable.vue";
  
  export default {
    components: { 
        ApprovalCardTable,
    },
  };
  </script>
  