<template>
  <div class="main">

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface formData {
  name: string;
  password: string
}

@Component({
  components: {}
})
export default class Login extends Vue {
  private customActiveKey: string = 'tab1'
  private loginBtn: boolean = false
  private loginType: number = 0
  private isLoginError: boolean = false
  private requiredTwoStepCaptcha: boolean = false
  private stepCaptchaVisible: boolean = false
  private form: any = {}
  private state: StateInfo = {
    time: 60,
    loginBtn: false,
    loginType: 0,
    smsSendBtn: false
  }
}
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
