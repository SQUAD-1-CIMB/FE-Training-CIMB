<template>
    <footer class="block py-4 w-full">
      <div class="w-full">
        <hr class="mb-4 border-b-1 border-blueGray-200 w-full" />
        <div
          class="flex flex-wrap md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4">
            <div
              class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
            >
              Copyright © {{ date }}
              <a
                href="https://www.creative-tim.com?ref=vn-footer-admin"
                class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
              >
                Squad 1
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
