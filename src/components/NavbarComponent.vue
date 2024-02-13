<template>
    <nav class="navbar py-3 navbar-expand-lg bg-body-tertiary shadow-sm">
        <div class="container-fluid mx-lg-5">
            <a class="navbar-brand fw-bold fs-5" href="#">PemiluPedia 📝</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="text-decoration-none">
                            <a class="nav-link active" aria-current="page">Home</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>