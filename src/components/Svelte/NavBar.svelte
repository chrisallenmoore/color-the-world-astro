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

<div class="relative z-10 bg-white">
  <div class="mx-auto w-full max-w-screen-2xl">
    <div
      class="flex items-center justify-between py-6 px-4 sm:px-6 md:justify-start md:space-x-10"
    >
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span class="sr-only">Color the World</span>
          <img
            class="h-12 w-auto sm:h-16"
            src="/images/color-the-world-logo.svg"
            width="300"
            height="55"
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
    class="absolute inset-x-0 top-0 z-10 h-0 w-full origin-top-right scale-95 transform p-2 opacity-0 transition md:hidden"
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
              class="duration:200 -m-3 flex items-center rounded-md  p-3 text-zinc-900 transition hover:bg-paradiso-600 hover:text-white hover:no-underline"
            >
              <span class="ml-3 text-base font-medium">Coloring Pages</span>
            </a>

            <a
              href="/about/"
              class="duration:200 -m-3 flex items-center rounded-md  p-3 text-zinc-900 transition hover:bg-paradiso-600 hover:text-white hover:no-underline"
            >
              <span class="ml-3 text-base font-medium">About</span>
            </a>

            <a
              href="/team/"
              class="duration:200 -m-3 flex items-center rounded-md  p-3 text-zinc-900 transition hover:bg-paradiso-600 hover:text-white hover:no-underline"
            >
              <span class="ml-3 text-base font-medium">Team</span>
            </a>

            <a
              href="/blog/"
              class="duration:200 -m-3 flex items-center rounded-md  p-3 text-zinc-900 transition hover:bg-paradiso-600 hover:text-white hover:no-underline"
            >
              <span class="ml-3 text-base font-medium">Blog</span>
            </a>
          </nav>
        </div>
      </div>
      <div class="space-y-6 py-6 px-5">
        <p
          class="text-base font-medium uppercase text-zinc-900 hover:text-zinc-700"
        >
          Support us - purchase our books
        </p>
        <div class="grid grid-cols-2 gap-y-4 gap-x-8">
          <a
            target="_blank"
            href="https://www.amazon.com/First-Toddler-Coloring-Book-Kindergarten/dp/B0B86ZBN37"
            class="flex text-base font-medium text-zinc-900"
            ><span class="sr-only">Amazon</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 1100 1000"
              aria-hidden="true"
              ><path
                d="M2 776c3.333-5.333 8.666-5.667 16-1 166.666 96.667 348 145 544 145 130.666 0 259.666-24.333 387-73 3.333-1.333 8.166-3.333 14.5-6 6.333-2.667 10.833-4.667 13.5-6 10-4 17.833-2 23.5 6 5.666 8 3.833 15.333-5.5 22-12 8.667-27.334 18.667-46 30-57.334 34-121.334 60.333-192 79-70.667 18.667-139.667 28-207 28-104 0-202.334-18.167-295-54.5C162.333 909.167 79.333 858 6 792c-4-3.333-6-6.667-6-10 0-2 .666-4 2-6zm301-285c0-46 11.333-85.333 34-118 22.666-32.667 53.666-57.333 93-74 36-15.333 80.333-26.333 133-33 18-2 47.333-4.667 88-8v-17c0-42.667-4.667-71.333-14-86-14-20-36-30-66-30h-8c-22 2-41 9-57 21s-26.334 28.667-31 50c-2.667 13.333-9.334 21-20 23l-115-14c-11.334-2.667-17-8.667-17-18 0-2 .333-4.333 1-7 11.333-59.333 39.166-103.333 83.5-132C451.833 19.333 503.666 3.333 563 0h25c76 0 135.333 19.667 178 59a190.52 190.52 0 0 1 18.5 21.5c5.666 7.667 10.166 14.5 13.5 20.5 3.333 6 6.333 14.667 9 26 2.666 11.333 4.666 19.167 6 23.5 1.333 4.333 2.333 13.667 3 28 .666 14.333 1 22.833 1 25.5v242c0 17.333 2.5 33.167 7.5 47.5s9.833 24.667 14.5 31c4.666 6.333 12.333 16.5 23 30.5 4 6 6 11.333 6 16 0 5.333-2.667 10-8 14-55.334 48-85.334 74-90 78-8 6-17.667 6.667-29 2-9.334-8-17.5-15.667-24.5-23s-12-12.667-15-16-7.834-9.833-14.5-19.5c-6.667-9.667-11.334-16.167-14-19.5-37.334 40.667-74 66-110 76-22.667 6.667-50.667 10-84 10-51.334 0-93.5-15.833-126.5-47.5S303 549 303 491zm172-20c0 26 6.5 46.833 19.5 62.5S525 557 547 557c2 0 4.833-.333 8.5-1 3.666-.667 6.166-1 7.5-1 28-7.333 49.666-25.333 65-54 7.333-12.667 12.833-26.5 16.5-41.5 3.666-15 5.666-27.167 6-36.5.333-9.333.5-24.667.5-46v-25c-38.667 0-68 2.667-88 8-58.667 16.667-88 53.667-88 111zm420 322c1.333-2.667 3.333-5.333 6-8 16.666-11.333 32.666-19 48-23 25.333-6.667 50-10.333 74-11 6.666-.667 13-.333 19 1 30 2.667 48 7.667 54 15 2.666 4 4 10 4 18v7c0 23.333-6.334 50.833-19 82.5-12.667 31.667-30.334 57.167-53 76.5-3.334 2.667-6.334 4-9 4-1.334 0-2.667-.333-4-1-4-2-5-5.667-3-11 24.666-58 37-98.333 37-121 0-7.333-1.334-12.667-4-16-6.667-8-25.334-12-56-12-11.334 0-24.667.667-40 2-16.667 2-32 4-46 6-4 0-6.667-.667-8-2-1.334-1.333-1.667-2.667-1-4 0-.667.333-1.667 1-3z"
              /></svg
            ><span class="ml-3">Coloring Books</span></a
          >

          <a href="#" class="text-base font-medium text-zinc-900"
            >Game & Activity Books (coming soon!)</a
          >
        </div>
        <div>
          <a
            href="#"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-paradiso-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-paradiso-700 hover:no-underline"
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
