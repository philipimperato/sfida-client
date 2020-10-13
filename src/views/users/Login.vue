<template lang="pug">
 
    .bg-gray-800.min-h-screen.bg-gray-50.flex.flex-col.justify-center.py-12(
        class='sm:px-6 lg:px-8'
    )
        .absolute.top-0(style="top: 25px")
            v-btn(
                depressed
                color="primary"
                fab
                to="/"
                class="absolute"
            ) 
                v-icon mdi-arrow-left

        .p-1(
            class='sm:mx-auto sm:w-full sm:max-w-md'
        )

            v-form
                .mt-8(class='sm:mx-auto sm:w-full sm:max-w-lg')
                    .bg-white.py-6.px-8.shadow(class='sm:rounded-lg sm:p-16')

                        .text-center.text-6xl.font-bold.font-kanit.text-green-500 SFIDA.gg
                        .text-center.text-xl.text-gray-800.font-bold.mb-6 Sign In

                        .flex-1.pb-2
                            .text-red-500.text-center.text-lg.mr-2.font-bold {{ errorMessage }}

                        v-text-field(
                            outlined
                            dense
                            v-model="form.email"
                            :rules="form.emailRules"
                            placeholder="Email"
                        )

                        v-text-field(
                            outlined
                            dense
                            v-model="form.password"
                            placeholder="password"
                            type="password"
                            v-on:keyup.enter="login"
                        )

                        .flex.items-center
                            .flex-1
                                v-btn.w-full(
                                    depressed
                                    color="primary"
                                    @click="login"
                                    :loading="formLoading"
                                ) Login

                        .mt-6.flex.items-center.justify-between
                            .flex.items-center
                                input#remember_me.form-checkbox.h-4.w-4.text-indigo-600.transition.duration-150.ease-in-out(type='checkbox')
                                label.ml-2.block.text-sm.leading-5.text-gray-900(for='remember_me') Remember me
                            .text-sm.leading-5
                                a.font-medium.text-indigo-600.transition.ease-in-out
                                    .cursor-pointer.duration-150(href='#' class='hover:text-indigo-500 focus:outline-none focus:underline') Forgot your password?


</template>

<script lang="js">
import { mapActions } from 'vuex'

export default {
    name: 'login',
    props: [],

    mounted () {},

    data () {
        return {
            errorMessage: '',
            form: {
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'Must be a valid email',
                ],
                password: ''
            },
            formLoading: false
        }
    },
    
    methods: {
        // adds method authenticate 
        ...mapActions('auth', ['authenticate']),

        login() {
            this.formLoading = true;

            this.authenticate({ 
                email: this.form.email, 
                password: this.form.password, 
                strategy: 'local' 
            })
            .then(() => {
                this.formLoading = false
                this.errorMessage = ''

                this.$router.push('/tournaments')
            })
            .catch(() => {
                this.errorMessage = 'Invalid email or password'
                this.formLoading = false
            });
        }
    }
}
</script>

<style scoped lang="scss">
</style>
