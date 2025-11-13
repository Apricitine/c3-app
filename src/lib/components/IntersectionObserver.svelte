<script lang="ts">

    import {onMount} from "svelte";
    import { rollupVersion } from "vite";

    export let root = undefined;
    export let isInViewProp = false;

    let isInView = false;
    let observer;
    let element: Element;

    $: isInView, (isInViewProp = isInView);

    const onChangeVisibility = (e: { isIntersecting: boolean; }[]) => {
        isInView = e[0].isIntersecting;

    }
    
    

  onMount(() => {
    let options = {
      root: root,
    }

    observer = new IntersectionObserver(onChangeVisibility, options)
    observer.observe(element)
  })
</script>

<div class="c" bind:this={element}>
  <slot {isInView} />
</div>
