<template>
  <div class="login-wrap">
    <div class="login-mask"></div>
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="username">
            <el-button slot="prepend" icon="el-icon-user"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button slot="prepend" icon="el-icon-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "../services/user";
export default {
  data: function() {
    return {
      ruleForm: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login({
            account: this.ruleForm.username,
            password: this.ruleForm.password,
          }).then((res) => {
            console.log(res)
            if (res.data.code === 0) {
              this.$router.push("/project");
            }                                                                     
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../assets/imgs/IU.jpeg");
  background-size: 100%;
}
.login-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
