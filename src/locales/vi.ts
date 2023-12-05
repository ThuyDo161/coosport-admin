export default {
  title: "Coosport",

  menuitems: {
    login: "Đăng nhập",
    register: "Đăng ký",
    home: "Trang chủ",
  },

  buttons: {
    login: "Đăng nhập",
    register: "Đăng ký",
    remember: "Ghi nhớ thông tin",
    forgot: "Quên mật khẩu",
  },

  message: {
    required: "Trường này không được bỏ trống!",
    length: "Độ dài ký tự không hợp lệ!",
    message: "Địa chỉ email không hợp lệ!",
  },

  auth: {
    login: {
      labels: {
        username: "Tên đăng nhập",
        password: "Mật khẩu",
      },

      placeholder: {
        username: "Nhập tên đăng nhập...",
        password: "Nhập mật khẩu...",
      },

      message: {
        minLength: "Mật khẩu phải lớn hơn 6 kí tự!",
        maxLength: "Mật khẩu phải nhỏ hơn 20 kí tự!",
        confirmPassword: "Mật khẩu không khớp!",
      },
    },

    register: {
      labels: {
        email: "Email",
        agree: "Tôi đồng ý với các điều khoản sử dụng",
        confirmPassword: "Nhập lại mật khẩu",
      },

      placeholder: {
        email: "Nhập email của bạn...",
        confirmPassword: "Nhập lại mật khẩu...",
      },
    },
  },
};
