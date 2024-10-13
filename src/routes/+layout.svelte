<script lang="ts">
    import "../app.css"
    import { slide } from "svelte/transition";
    import { Terminal,Menu } from "lucide-svelte";
    let isMenuOpen = false;
</script>


<header class='bg-gray-800 p-4 px-8 sticky top-0 z-10 shadow-lg'>
    <div class='max-w-[1024px] mx-auto px-4'>
        <div class="flex gap-4 justify-between">
            <div class='flex gap-4'>
                <div class="flex items-center gap-2">
                    <Terminal class='text-emerald-400' size={26}/><p class='text-2xl font-bold text-white'>ZSEII</p>
                </div>
            <div class='hidden md:flex items-center gap-2'>
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Poradniki</div>
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Narzędzia</div>
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Kontakt</div>
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Forum</div>
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Zaproponuj funkcje</div>
                </div>
            </div>
            <button class="md:hidden text-white" on:click={() => isMenuOpen = !isMenuOpen}>
            <Menu size={24} />
            </button>
        </div>
        {#if isMenuOpen}
            <div transition:slide={{ duration:300}} class='md:hidden py-4'>
                <div  class='flex flex-col'>
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Poradniki</div>
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Narzędzia</div>                
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Forum</div>
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Kontakt</div>
                    <div class='transition hover:bg-gray-900 p-2 rounded-lg cursor-pointer'>Zaproponuj funkcje</div>
                </div>
            </div>
    {/if}
 </div>
</header>

<slot />
<footer class='p-8 mt-8 bg-gray-800'>
    <p class='text-center text-slate-500'>© 2024 ZSEII Pozdrawiam</p>
    <p class='text-center text-slate-500'>Polityka prywatnosci</p>
</footer>