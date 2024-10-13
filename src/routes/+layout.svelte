<script lang="ts">
    import "../app.css"
    import { Terminal } from "lucide-svelte";
</script>


<header class='bg-gray-800 p-4 px-16 sticky top-0 z-10 shadow-lg'>
    <Terminal/><p class='text-2xl font-bold text-white'>ZSEII</p>

</header>

<slot />
<footer class='p-8 mt-8 bg-gray-800'>
    <p class='text-center text-slate-500'>© 2024 ZSEII Pozdrawiam</p>
    <p class='text-center text-slate-500'>Polityka prywatnosci</p>
</footer>