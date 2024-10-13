<script lang="ts"> 
  import { BookText,Drill } from "lucide-svelte";
</script>

<header class='max-w-[768px] mx-auto my-6'>
  <h1 class='text-4xl text-emerald-500 font-bold text-center my-2'>Witaj w ZSEII</h1>
  <h3 class='text-lg text-white text-center my-2'>Twoje centrum wiedzy i innowacji w świecie IT. Odkryj zaawansowane poradniki, praktyczne narzędzia i społeczność pasjonatów technologii.</h3>
</header>
<main class='max-w-[900px] mx-auto my-20'>
  <h2 class='text-xl text-emerald-500 font-semibold text-center my-6'>Odkryj nasze zasoby</h2>
  <section class='w-full h-36 bg-gray-800 rounded-md shadow-xl my-6 p-6'>
   <BookText class='mx-auto text-emerald-500' size={32}/>
   <p class='text-center text-lg text-white font-bold m-2'>Poradniki</p>
   <p class='text-center text-slate-400'>Praktyczna wiedza z zakresu sieci, programowania i systemów</p>
  </section>
  <section class='w-full h-36 bg-gray-800 rounded-md shadow-xl my-6 p-6'>
   <Drill class='mx-auto text-emerald-500' size={32}/>
   <p class='text-center text-lg text-white font-bold m-2'>Narzędzia</p>
   <p class='text-center text-slate-400'>Zestaw przydatnych narzędzi dla każdego informatyka</p>
  </section>
   
</main>
<article class='max-w-[900px] mx-auto my-20'>
  <h2 class='text-xl text-emerald-500 font-semibold text-left my-6'>Ostatnie poradniki</h2>
  {#each [1,2,3,4,5] as l} 
    <section class='w-full h-32 bg-gray-800 rounded-md shadow-xl my-6'>
      <p class='text-4md text-emerald-500 font-bold p-4 pb-2'>Tytuł poradnika</p>
      <p class='text-md text-slate-400 m-4 mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero dolore corporis sequi modi! Enim ipsum aperiam consequuntur, iste error esse illum alias doloremque laudantium, id dicta reiciendis sapiente expedita?</p>
    </section>
  {/each}
</article>