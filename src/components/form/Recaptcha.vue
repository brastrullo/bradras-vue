<template>
  <div id="recaptcha"></div>
</template>

<script>
export default {
  name: "Benefits",
  props: {
    sitekey: String
  },
  data() {
    return {
      mounted: false,
    };
  },
  methods: {
    mountRecaptcha() {
      const self = this;
      if (this.mounted === false) {
        setTimeout(function () {
          if (window.grecaptcha && window.grecaptcha.ready) {
            try {
              window.grecaptcha.render("recaptcha", {
                sitekey: self.sitekey,
                size: "invisible",
                badge: "inline",
                callback: self.callback,
              });
              this.mounted = true;
            } catch (error) {
              console.log(error);
            }
          } else {
            self.mountRecaptcha();
          }
        }, 1000);
      }
    },
    validate() {
      window.grecaptcha.execute();
    },
    callback(response) {
      const secret = "6Leedu0ZAAAAAC1xXnF6Ut4UE2C0IW7PxN06RS5T";
      const base = "https://www.google.com/recaptcha/api/siteverify";
      const url = `${base}?secret=${secret}&response=${response}`;
      async function verify() {
        const res = await fetch(url, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
        // const data = await res.json()
        console.log({ res });
        // if (data.success) {
        //   this.submitForm()
        // }
      }
      verify();
    },
  },
  mounted() {
    const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    recaptchaScript.async = true
    recaptchaScript.defer = true
    document.head.appendChild(recaptchaScript)
    if (this.mounted === false){
      this.mountRecaptcha()
    }
  },
};
</script>
