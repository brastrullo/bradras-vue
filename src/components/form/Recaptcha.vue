<template>
  <div id="recaptcha" class="transform flex scale-75 origin-top-right"></div>
</template>

<script>
export default {
  name: "Benefits",
  data() {
    return {
      mounted: false,
      sitekey: process.env.VUE_APP_RECAPTCHA_SITE_KEY,
      secret: process.env.VUE_APP_RECAPTCHA_SECRET,
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
                "expired-callback": self.error,
                "error-callback": self.error,
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
    error(error) {
      alert(JSON.stringify(error));
      window.grecaptcha.reset();
    },
    reset() {
      window.grecaptcha.reset();
    },
    execute() {
      window.grecaptcha.execute();
    },
    callback(response) {
      this.$emit('verify', response)
      this.reset()
      // const base = "https://www.google.com/recaptcha/api/siteverify";
      // const url = `${base}?secret=${this.secret}&response=${response}`;
      // async function verify() {
      //   const res = await fetch(url, {
      //     method: "POST",
      //     mode: "no-cors",
      //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   });
      //   // const data = await res.json()
      //   console.log({ res });
      //   // if (data.success) {
      //   //   this.submitForm()
      //   // }
      // }
      // verify();
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
