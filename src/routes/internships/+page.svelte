<script lang="ts">
import internships from "$lib/internships";
console.log(internships)
</script>

blaha abalfds
{#each internships as internship}
  {internship.name}
  <br>
  {internship.description}
{/each}