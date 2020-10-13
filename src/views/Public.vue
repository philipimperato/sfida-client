<template lang="html">

<div class="relative bg-gray-800 overflow-hidden">
    <div class="hidden sm:block sm:absolute sm:inset-0">
        <svg class="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0" width="364" height="384" viewBox="0 0 364 384" fill="none">
        <defs>
            <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
        </defs>
        <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
    </div>
    <div class="relative pt-6 pb-12 sm:pb-32">

        <public-header></public-header>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md">
            <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="">
                </div>
                <div class="-mr-2">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>
            </div>
            <div class="space-y-1 px-2 pt-2 pb-3">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Product</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Features</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Marketplace</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Company</a>
            </div>
            <div>
                <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">
                Log in
                </a>
            </div>
            </div>
        </div>
        </div>

        <main class="mt-8 sm:mt-16 md:mt-20 lg:mt-24">
        <div class="mx-auto max-w-screen-xl">
            <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                    <h2 class="mt-4 text-4xl tracking-tight leading-10 font-extrabold text-white sm:mt-5 
                        sm:leading-none sm:text-6xl lg:mt-6 lg:text-5xl xl:text-6xl">
                        Build and fund your own <span class="text-indigo-400">tournament!</span>
                        <br class="hidden md:inline">
                    </h2>
                    <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Sfida enables you to organize comprehensive Twitch tournaments that 
                        brings fans together to support their favorite streamers
                    </p>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6">
                <div class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                    <div class="px-8 py-4 sm:px-10">

                        <div class="mt-6">
                        <form action="#" method="POST" class="space-y-6">
                            <div>
                                <p class="text-sm leading-5 font-medium text-green-800">
                                    Create an account
                                </p>

                                <v-text-field
                                    label="Email"
                                    dense
                                    outlined
                                ></v-text-field>

                                <v-text-field
                                    label="Password"
                                    dense
                                    type="password"
                                    outlined
                                ></v-text-field>

                                <v-text-field
                                    label="Confirm Password"
                                    dense
                                    type="password"
                                    outlined
                                ></v-text-field>

                                <v-btn
                                    depressed
                                    class="w-full"
                                    @click="createUser"
                                    color="primary"
                                >Create</v-btn>
                            </div>
                        </form>

                        <p class="mt-4 text-sm">Already have an account? <a href="#" 
                            class="font-medium text-gray-900 hover:underline">Log in here</a></p>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
        </main>
    </div>
</div>


</template>

<script lang="js">
    import PublicHeader from "@/views/common/PublicHeader.vue"

    export default  {
        name: 'public',
        props: [],
        components: { PublicHeader },
        mounted () {

        },
        data () {
            return {
                models: { user: {}, tournament: {} }
            }
        },
        setup() {
            const { User, Tournament } = this.$FeathersVuex.api
            this.models.user = User;
            this.models.tournament = Tournament;
        },
        methods: {
            createUser() {
                // const User = new this.models.user
                
                // this.models.user
            }
        },
        computed: {}
    }
</script>

<style scoped lang="scss">
</style>
