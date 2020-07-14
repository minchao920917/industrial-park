/*
 * @Author: minchao 
 * @Date: 2020-07-12 02:32:16 
 * @Last Modified by:   minchao 
 * @Desc 申请参观
 */
<template>
  <div class="apply">
    <!-- top start -->
    <div class="top">
      <van-image class="img" fit="none" src="../../static/img/apply/banner_bg.jpg" />
 
    </div>
    <!-- top end -->
    <!-- 申请表单 start -->
    <div class="apply-form">
      <van-form class="form-el" @submit="onSubmit">
        <van-field
          class="form-input"
          v-model="companyName"
          name
          label
          placeholder="企业名称"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          class="form-input"
          v-model="phone"
          name
          label
          placeholder="联系方式"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          class="form-input"
          v-model="address"
          name=""
          label
          placeholder="企业地址"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          class="form-input"
          v-model="message"
          name
          label
          rows="4"
          autosize
          type="textarea"
          placeholder="留言内容"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: .43em;">
          <van-button
            class="form-btn"
            type="primary"
            color="#2C72CE"
            native-type="submit"
            block
          >提交申请</van-button>
        </div>
      </van-form>
    </div>
    <!-- 申请表单 end -->
  </div>
</template>
<script>
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Icon } from "vant";
import { Col, Row } from "vant";
import { Form } from "vant";
import { Field } from "vant";
import { Button } from "vant";

Vue.use(Button);
Vue.use(Field);
Vue.use(Form);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);

Vue.use(Icon);
export default {
  data() {
    return {
      companyName: "",
      phone: "",
      address: "",
      message: ""
    };
  },
  methods: {
    onSubmit() {}
  }
};
</script>
<style lang="less" scoped>
.apply {
  width: 100%;
  background: #ffffff;
  .top {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 3.2rem;
    .img {
      img {
        width: 100%;
      }
    }

  }
  // 申请表单 start
  .apply-form {
    padding: 0.3rem 0.55rem 0.55rem 0.55rem;
    background: #fff;
    .apply-form {
      // width: 100%;
      padding: 0.5rem 0.3rem 0.5rem 0.3rem;

      .form-el {
        /deep/ .vant-cell__value{
            .van-field__body{
                imput{
          height: 0.8rem;
          border: 1px solid rgba(0, 0, 0, 0.25);
          border-radius: 0.08rem;
                }
            }
        }
        .form-input {

        }
        .form-btn {
          height: 0.8rem;
          line-height: 0.8rem;
        }
      }
    }
  }
  // 申请表单 end
}
</style>