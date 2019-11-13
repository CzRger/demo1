<template>
    <div>
        <el-button @click="download">下载</el-button>
    </div>
</template>

<script>
  import Papa from 'papaparse'

  export default {
    name: "Login",
    data() {
      return {
        list: [
          {
            "Column 1": "1-1",
            "Column 2": "1-2",
            "Column 3": "1-3",
            "Column 4": "1-4"
          },
          {
            "Column 1": "是是是",
            "Column 2": "对对对",
            "Column 3": "2-3",
            "Column 4": "2-4"
          },
          {
            "Column 1": "3-1",
            "Column 2": "3-2",
            "Column 3": "3-3",
            "Column 4": "3-4"
          },
          {
            "Column 1": 4,
            "Column 2": 5,
            "Column 3": 6,
            "Column 4": 7
          }
        ]
      }
    },
    methods: {
      download() {
        console.log("downLoad");
        var csv = Papa.unparse(this.list);
        console.log("downLoad", csv);
        //定义文件内容，类型必须为Blob 否则createObjectURL会报错
        let content = new Blob([csv]);
        //生成url对象
        let urlObject = window.URL || window.webkitURL || window;
        let url = urlObject.createObjectURL(content);
        //生成<a></a>DOM元素
        let el = document.createElement("a");
        //链接赋值
        el.href = url;
        el.download = "todo文件导出.csv";
        //必须点击否则不会下载
        el.click();
        //移除链接释放资源
        urlObject.revokeObjectURL(url);
      }
    }
  }
</script>
<!--<script>-->

<!--  import * as API from '@/api/test'-->
<!--  export default {-->
<!--    name: "Login",-->
<!--    data() {-->
<!--      return {-->
<!--        form: {-->
<!--          username: '',-->
<!--          password: ''-->
<!--        },-->
<!--        // 表单验证，需要在 el-form-item 元素中增加 prop 属性-->
<!--        rules: {-->
<!--          username: [-->
<!--            {required: true, message: '账号不可为空', trigger: 'blur'}-->
<!--          ],-->
<!--          password: [-->
<!--            {required: true, message: '密码不可为空', trigger: 'blur'}-->
<!--          ]-->
<!--        },-->
<!--        // 对话框显示和隐藏-->
<!--        dialogVisible: false-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      onSubmit(formName) {-->
<!--        API.queryPage(this.form).then(data => {-->
<!--          console.log(this.form)-->
<!--        })-->
<!--        // 为表单绑定验证功能-->
<!--        this.$refs[formName].validate((valid) => {-->
<!--          if (valid) {-->
<!--            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航-->
<!--            this.$router.push("/index");-->
<!--          } else {-->
<!--            this.dialogVisible = true;-->
<!--            return false;-->
<!--          }-->
<!--        });-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<style lang="scss" scoped>
    .login-box {
        border: 1px solid #DCDFE6;
        width: 350px;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        box-shadow: 0 0 25px #909399;
    }

    .login-title {
        text-align: center;
        margin: 0 auto 40px auto;
        color: #303133;
    }
</style>