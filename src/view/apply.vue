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
          v-model="appointmentDate"
          name
          label
          placeholder="预约时间"
          @focus="showTimeSelect"
        />
        <van-field class="form-input" v-model="company" name label placeholder="企业名称" />
        <van-field class="form-input" v-model="contactPerson" name label placeholder="联系人" />
        <van-field class="form-input" v-model="contactPhone" name label placeholder="联系方式" />
        <van-field
          class="form-input form-area"
          v-model="content"
          rows="4"
          autosize
          type="textarea"
          placeholder="留言内容"
        />
        <div style="margin: .43em 0;">
          <van-button
            class="form-btn animated bounceInUp"
            type="primary"
            color="#2C72CE"
            native-type="submit"
            block
          >提交申请</van-button>
        </div>
      </van-form>
    </div>
    <!-- 申请表单 end -->
    <van-popup v-model="show" :close-on-click-overlay="false" position="bottom">
      <van-datetime-picker
        class="form-input"
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :formatter="formatter"
        @confirm="confirmDate"
        @cancel="cancelDate"
      />
    </van-popup>
  </div>
</template>
<script>
import funs from "../utils/utils";
import Vue from "vue";
import { Image as VanImage } from "vant";
import { Icon } from "vant";
import { Col, Row } from "vant";
import { Form } from "vant";
import { Field } from "vant";
import { Button } from "vant";
import { DatetimePicker } from "vant";
import { Popup } from "vant";
import { Loading, Toast } from "vant";
import { Notify } from 'vant';

// 全局注册
Vue.use(Notify);

Vue.use(Loading);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(Button);
Vue.use(Field);
Vue.use(Form);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);

Vue.use(Icon);

import Url from "../utils/url";
export default {
  data() {
    return {
      show: false,
      //预约时间
      appointmentDate: "",
      //公司名称
      company: "",
      //联系人
      contactPerson: "",
      //联系电话
      contactPhone: "",
      //留言内容
      content: "",

      minDate: new Date(2020, 0, 1),
      // maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    };
  },
  methods: {
    validate() {
      //数据校验
      if (this.appointmentDate == "") {
        Notify({ type: "danger", message: "请选择预约时间" });
        return false;
      }
      if (this.company == "") {
        Notify({ type: "danger", message: "请填写公司名称" });
        return false;
      }
      if (this.contactPerson == "") {
        Notify({ type: "danger", message: "请填写联系人姓名" });
        return false;
      }
      if (!/^1[3456789]\d{9}$/.test(this.contactPhone)) {
        Notify({ type: "danger", message: "手机号码有误" });
        return false;
      }
      if (this.content == "") {
        Notify({ type: "danger", message: "请填写留言内容" });
        return false;
      }
      return true;
    },

    onSubmit() {
      if(this.validate()){
        const loadingToast = Toast.loading({
          duration: 0,
          mask: true,
          message: "提交中..."
        });
        this.reqPos(Url.postAppointmen, {
          appointmentDate: this.appointmentDate,
          company: this.company,
          contactPerson: this.contactPerson,
          contactPhone: this.contactPhone,
          content: this.content,
        }).then(res => {
          console.log(res);
          loadingToast.clear();
          if (res.status === "0") {
            Notify({ type: "success", message: "申请成功" });
          } else {
            Toast({
              duration: 2000,
              message: res.msg
            });
          }
        });
      }
    },
    showTimeSelect() {
      this.show = true;
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },
    confirmDate() {
      this.appointmentDate = funs.toDataFormatter(this.currentDate);
      this.show = false;
    },
    cancelDate() {
      this.show = false;
    }
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
    padding: 0.3rem 0.55rem;
    background: #fff;
    // width: 100%;

    /deep/ .van-cell {
      border: 1px solid rgba(0, 0, 0, 0.25);
      margin-top: 0.3rem;
      width: 6.4rem;
      height: 0.8rem;
      opacity: 1;
      border-radius: 0.06rem;
    }
    /deep/.van-cell::after {
      display: none;
    }
    .form-el {
      /deep/ .vant-cell__value {
        .van-field__body {
          input {
            height: 0.8rem;
            // border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 0.08rem;
          }
        }
      }
      .form-area {
        height: auto;
      }

      .form-btn {
        margin: 0.43rem 0;
        height: 0.8rem;
        line-height: 0.8rem;
        border-radius: 0.06rem;
      }
    }
  }

  // 申请表单 end
}
</style>