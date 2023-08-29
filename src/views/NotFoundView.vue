<template>
    <div class="not-found">
            <div><h1>404</h1>
            </div>
            <div><p>Page not found</p></div>
            <RouterLink class="btn btn-warning" to="/">Regresar</RouterLink>
    </div>
</template>

<style>

.not-found{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
}

.not-found h1{
    font-size: 8rem;
}

.not-found p{
    font-size: 2rem;
}


</style>