<template lang="html">
    <div class="max-w-screen-xl mx-auto">
        <nav class="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
            <div class="flex items-center flex-1">
                <div class="flex-shrink items-center justify-between w-full md:w-auto">
                    <a href="#" aria-label="Home" class="font-kanit text-3xl">
                        <span class="text-green-500">SFIDA.gg</span>
                    </a>
                    <div class="-mr-2 flex items-center md:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 
                            focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                </div>
                
                <div class="hidden space-x-10 md:flex md:ml-12">
                    <a href="#" class="font-medium 
                        transition duration-150 ease-in-out">
                        <span class="text-white hover:text-gray-300">How it works</span></a>
                    <a href="#" class="font-medium text-white hover:text-gray-300 
                        transition duration-150 ease-in-out">
                        <span class="text-white hover:text-gray-300">About</span></a>
                </div>
            </div>
            <div class="hidden md:flex">
                <v-btn
                    depressed
                    to="/login"
                    color="primary"
                >Log In</v-btn>
            </div>
        </nav>
    </div>
</template>

<script lang="js">
    export default  {
        name: 'PublicHeader',
        props: [],
        mounted () {

        },
        data () {
            return {}
        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style scoped lang="scss">
    .header {

    }
</style>
