<template>
{{msg}}
</template>

<script>

export default {
  data: function ()
  {
    return {
      msg: "Unknown error!"
    }
  },
  methods: {
    passwordMatchingError () {
      this.msg = "Passwords do not match!"
      return this.msg;
    },
    passwordFormatError () {
      this.msg = "Password must be at least 3 characters long!"
      return this.msg;
    },
    emailError () {
      this.msg = "Email not valid!"
      return this.msg;
    }
  }
}
</script>

<style scoped>

</style>