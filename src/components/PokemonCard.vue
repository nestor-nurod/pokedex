<script setup>
const props = defineProps({
    title: String,
    id: Number
});

</script>

<template>
    <div class="card" :id="props.id">
        <div class="card-body">
            <h5 class="card-title">{{ props.title }}</h5>
        </div>
    </div>
</template>