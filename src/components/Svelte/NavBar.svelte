<script>
  let currentMenu = "desktop";
  function toggleMobileMenu() {
    if (currentMenu == "desktop") {
      currentMenu = "mobile";
    } else {
      currentMenu = "desktop";
    }
  }

  function clickOutside(node) {
    const handleClick = (event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent("click_outside", node));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }

  function handleClickOutsideMobileMenu(event) {
    if (currentMenu == "desktop") {
      currentMenu = "desktop";
    } else {
      currentMenu = "desktop";
    }
  }
  //TODO: add click outside function to close mobile menu
</script>

<div class="relative bg-white z-10">
  <div class="w-full mx-auto max-w-screen-2xl">
    <div
      class="flex items-center justify-between py-6 px-4 sm:px-6 md:justify-start md:space-x-10"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span class="sr-only">Color the World</span>
          <img
            class="h-12 w-auto sm:h-16"
            src="/images/color-the-world-logo.svg"
            width="200px"
            alt="Color the World logo"
          />
        </a>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md bg-white p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-paradiso-600"
          aria-expanded="false"
          on:click={toggleMobileMenu}
        >
          <span class="sr-only">Open menu</span>
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <nav class="hidden space-x-8 md:flex">
        <a href="/coloring-pages/" class="text-lg font-medium text-zinc-900"
          >Coloring Pages</a
        >
        <a href="/about/" class="text-lg font-medium text-zinc-900">About</a>
        <a href="/team/" class="text-lg font-medium text-zinc-900">Team</a>
        <a href="/blog/" class="text-lg font-medium text-zinc-900">Blog</a>
      </nav>
    </div>
  </div>

  <!--
        Mobile menu, show/hide based on mobile menu state.
    
        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
  <div
    class="absolute z-10 w-full inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden opacity-0 scale-95 h-0"
    class:mobileActive={currentMenu === "mobile"}
    use:clickOutside
    on:click_outside={handleClickOutsideMobileMenu}
  >
    <div
      class="w-full divide-y-2 divide-zinc-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div class="px-4 pt-5 pb-6">
        <div class="flex items-center justify-between">
          <a href="/">
            <img
              class="h-14 w-auto"
              src="/images/color-the-world-logo.svg"
              width="200px"
              alt="Color the World logo"
            />
          </a>
          <div class="-mr-2">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-white p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-paradiso-500"
              on:click={toggleMobileMenu}
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="mt-6">
          <nav class="grid gap-y-8">
            <a
              href="/coloring-pages/"
              class="-m-3 flex items-center rounded-md p-3  transition duration:200 hover:no-underline hover:bg-paradiso-600 text-zinc-900 hover:text-white"
            >
              <span class="ml-3 text-base font-medium">Coloring Pages</span>
            </a>

            <a
              href="/about/"
              class="-m-3 flex items-center rounded-md p-3  transition duration:200 hover:no-underline hover:bg-paradiso-600 text-zinc-900 hover:text-white"
            >
              <span class="ml-3 text-base font-medium">About</span>
            </a>

            <a
              href="/team/"
              class="-m-3 flex items-center rounded-md p-3  transition duration:200 hover:no-underline hover:bg-paradiso-600 text-zinc-900 hover:text-white"
            >
              <span class="ml-3 text-base font-medium">Team</span>
            </a>

            <a
              href="/blog/"
              class="-m-3 flex items-center rounded-md p-3  transition duration:200 hover:no-underline hover:bg-paradiso-600 text-zinc-900 hover:text-white"
            >
              <span class="ml-3 text-base font-medium">Blog</span>
            </a>
          </nav>
        </div>
      </div>
      <div class="space-y-6 py-6 px-5">
        <p
          class="text-base font-medium text-zinc-900 hover:text-zinc-700 uppercase"
        >
          Support us - purchase our books
        </p>
        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
          <a href="#" class="text-base font-medium text-zinc-900"
            >Coloring Books</a
          >

          <a href="#" class="text-base font-medium text-zinc-900"
            >Game & Activity Books</a
          >
        </div>
        <div>
          <a
            href="#"
            class="flex w-full items-center justify-center rounded-md border border-transparent hover:no-underline bg-paradiso-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-paradiso-700"
            >Sign up for our newsletter</a
          >
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .mobileActive {
    opacity: 100 !important;
    height: 100% !important;
    transform: scale(1);
  }
</style>
