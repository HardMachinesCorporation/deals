<script setup language="">
const connectedUserAvatarImage = ref('images/avatar.png')
const isConnectedUser = useSupabaseUser()
</script>
<template>
  <div>


    <nav class="bg-gray-100 border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <!---- Link Home -->
        <NuxtLink href="/" class="flex items-center space-x-3 rtl:space-x-reverse">

          <!---- App Logo on a remplacé l'img tag par Nuxt Icon-->
          <Icon name="streamline-ultimate-color:shop-sign-open" size="35" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Deals</span>
        </NuxtLink>

        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>

            <!---- on remplate l'image par public/images/avatar.pgn-->
            <img class="w-8 h-8 rounded-full" :src="`/${connectedUserAvatarImage} `" alt="user photo">
          </button>
          <!-- Dropdown menu -->
          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div class="px-4 py-3">
              <!-- User full name doit etre obligatoire au moment de l'authen-->
              <span class="block text-sm text-gray-900 dark:text-white"> Hello {{isConnectedUser.user_metadata.full_name}}</span>
              <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">Welecome to Deals</span>
            </div>

            <!-- Dropdown menu Link menu -->
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <NuxtLink to="/account" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">My Account</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/sign-out" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</NuxtLink>
              </li>

            </ul>
          </div>
          <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <!-- Main Menu Link-->
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">

          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NuxtLink to="/search" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Search</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/sell" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sell on Deals</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cart" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <Icon name="raphael:cart" size="35" style="color:red" />
                Cart</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>