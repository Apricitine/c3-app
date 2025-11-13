<script lang="ts">
import scholarships from "$lib/scholarships";
</script>

{#each scholarships as scholarship}
  {scholarship.name}
  <br>
  {scholarship.organization}
{/each}