<template>
  <el-row :gutter="20" class="w-100 vh-100">
    <el-col :span="12">
      <div class="bg-secondary h-100"></div>
    </el-col>

    <el-col :span="12" class="d-flex align-items-center justify-content-center">
      <div class="col-6">
        <div class="mb-4">
          <span class="font-size-20 fw-bold text-uppercase">{{
            t("menuitems.register")
          }}</span>
        </div>

        <el-form
          :model="register"
          :rules="rules"
          size="large"
          label-position="top"
        >
          <el-form-item :label="t('auth.register.labels.email')" prop="email">
            <el-input
              v-model="register.email"
              :placeholder="t('auth.register.placeholder.email')"
            ></el-input>
          </el-form-item>

          <el-form-item
            :label="t('auth.login.labels.username')"
            prop="username"
          >
            <el-input
              v-model="register.username"
              :placeholder="t('auth.login.placeholder.username')"
            ></el-input>
          </el-form-item>

          <el-form-item
            :label="t('auth.login.labels.password')"
            prop="password"
          >
            <el-input
              v-model="register.password"
              type="password"
              autocomplete="off"
              show-password
              :placeholder="t('auth.login.placeholder.password')"
            ></el-input>
          </el-form-item>

          <el-form-item
            :label="t('auth.register.labels.confirmPassword')"
            prop="confirmPassword"
          >
            <el-input
              v-model="register.confirmPassword"
              type="password"
              autocomplete="off"
              show-password
              :placeholder="t('auth.register.placeholder.confirmPassword')"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-checkbox
              v-model="register.check"
              :label="t('auth.register.labels.agree')"
            ></el-checkbox>
          </el-form-item>

          <el-form-item>
            <el-button
              class="w-100"
              type="primary"
              size="large"
              @click="registerFunc"
              >{{ t("buttons.register") }}</el-button
            >

            <el-button
              class="w-100 mt-3 ms-0"
              size="large"
              @click="loginFunc"
              >{{ t("buttons.login") }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onMounted, reactive } from "vue";
import { useI18n } from "vue-i18n";
import { useValidator } from "@/utils/useValidator";

const { t } = useI18n();

const { required, ValidService } = useValidator();

interface ModelRef {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  check: boolean;
}

const router = useRouter();

const register: ModelRef = reactive<ModelRef>({
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  check: true,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkPass = (rule: any, value: any, callback: any) => {
  if (value !== register.password) {
    callback(new Error(t("auth.login.message.confirmPassword")));
  }
};

const rules = {
  username: [required()],

  password: [required()],

  email: [required(), ValidService.checkEmail],

  confirmPassword: [
    required(),
    {
      validator: checkPass,
      trigger: "blur",
    },
  ],
};

const loginFunc = () => {
  router.push("/login");
};

const registerFunc = () => {
  router.push("/login");
};

onMounted(() => {
  document.title = t("menuitems.register");
});
</script>
