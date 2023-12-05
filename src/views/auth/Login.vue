<template>
  <el-row :gutter="20" class="w-100 vh-100">
    <el-col :span="12">
      <div class="bg-secondary h-100"></div>
    </el-col>

    <el-col :span="12" class="d-flex align-items-center justify-content-center">
      <div class="col-6">
        <div class="mb-4">
          <span class="font-size-20 fw-bold text-uppercase">{{
            t("menuitems.login")
          }}</span>
        </div>

        <el-form
          ref="loginForm"
          :model="login"
          :rules="rules"
          size="large"
          label-position="top"
        >
          <el-form-item
            :label="t('auth.login.labels.username')"
            prop="username"
          >
            <el-input
              v-model="login.username"
              autocomplete="off"
              :placeholder="t('auth.login.placeholder.username')"
            ></el-input>
          </el-form-item>

          <el-form-item
            :label="t('auth.login.labels.password')"
            prop="password"
          >
            <el-input
              v-model="login.password"
              type="password"
              autocomplete="off"
              show-password
              :placeholder="t('auth.login.placeholder.password')"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <div
              class="d-flex w-100 justify-content-between align-items-center"
            >
              <el-checkbox :label="t('buttons.remember')"></el-checkbox>

              <el-link href="/forgot" type="primary" :underline="false">{{
                t("buttons.forgot")
              }}</el-link>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button
              class="w-100"
              type="primary"
              size="large"
              @click="loginFunc(loginForm)"
              >{{ t("buttons.login") }}</el-button
            >

            <el-button
              class="w-100 mt-3 ms-0"
              size="large"
              @click="registerFunc"
              >{{ t("buttons.register") }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import { useI18n } from "vue-i18n";
import type { FormInstance } from "element-plus";
import { useValidator } from "@/utils/useValidator";

const { t } = useI18n();

const { required, ValidService } = useValidator();

interface ModelRef {
  username: string;
  password: string;
}

const router = useRouter();

const login: ModelRef = reactive<ModelRef>({
  username: "",
  password: "",
});

const rules = {
  username: [required()],

  password: [required(), ValidService.checkPasswordLength],
};

const loginForm = ref<FormInstance>();

const loginFunc = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      router.push("/");
    }
  });
};

const registerFunc = () => {
  router.push("/register");
};

onMounted(() => {
  document.title = t("menuitems.login");
});
</script>
