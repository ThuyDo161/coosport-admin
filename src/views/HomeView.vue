<template>
  <div class="home"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

onMounted(() => {
  document.title = t("menuitems.home");
});
</script>
