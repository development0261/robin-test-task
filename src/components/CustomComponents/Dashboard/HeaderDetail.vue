<template>
    <h5>Bob Sinclare</h5>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Members</li>
        </ol>
    </nav>
</template>
<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'
    export default defineComponent({
        name: 'HeaderDetail',
    })
</script>
<style>

</style>