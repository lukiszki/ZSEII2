<script lang="ts"> 
  import { BookText,Drill,MessageSquareCode } from "lucide-svelte";
</script>

<header class='max-w-4xl mx-auto my-6 p-2'>
  <h1 class='text-4xl text-emerald-400 font-bold text-center my-2'>Witaj w ZSEII</h1>
  <h3 class='text-lg text-white text-center my-2'>Twoje centrum wiedzy i innowacji w świecie IT. Odkryj zaawansowane poradniki, praktyczne narzędzia i społeczność pasjonatów technologii.</h3>
</header>
<main class='max-w-[1024px] mx-auto my-4` p-4'>
  <h2 class='text-xl text-emerald-400 font-semibold text-center my-6'>Odkryj nasze zasoby</h2>
  <section class='w-full min-h-36 bg-gray-800 rounded-md shadow-xl my-6 p-6'>
   <BookText class='mx-auto text-emerald-400' size={32}/>
   <p class='text-center text-lg text-white font-bold m-2'>Poradniki</p>
   <p class='text-center text-slate-400'>Praktyczna wiedza z zakresu sieci, programowania i systemów</p>
  </section>
  <section class='w-full min-h-36 bg-gray-800 rounded-md shadow-xl my-6 p-6'>
   <Drill class='mx-auto text-emerald-400' size={32}/>
   <p class='text-center text-lg text-white font-bold m-2'>Narzędzia</p>
   <p class='text-center text-slate-400'>Zestaw przydatnych narzędzi dla każdego informatyka</p>
  </section>
   <section class='w-full min-h-36 bg-gray-800 rounded-md shadow-xl my-6 p-6'>
   <MessageSquareCode class='mx-auto text-emerald-400' size={32}/>
   <p class='text-center text-lg text-white font-bold m-2'>Forum</p>
   <p class='text-center text-slate-400'>Społeczność ekspertów i pasjonatów IT dzieląca się wiedzą i doświadczeniem</p>
  </section>
   
</main>
<article class='max-w-[1024px] mx-auto my-4 p-4'>
  <h2 class='text-xl text-emerald-400 font-semibold text-left my-6'>Ostatnie poradniki</h2>
  {#each [1,2,3,4,5] as l} 
    <section class='min-h-32 bg-gray-800 rounded-md shadow-xl my-6 p-1'>
      <p class='text-4md text-emerald-400 font-bold p-4 pb-2'>Tytuł poradnika</p>
      <p class='text-md text-slate-400 m-4 mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero dolore corporis sequi modi! Enim ipsum aperiam consequuntur, iste error esse illum alias doloremque laudantium, id dicta reiciendis sapiente expedita?</p>
    </section>
  {/each}
</article>