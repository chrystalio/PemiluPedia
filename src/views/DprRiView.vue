<template>
    <div class="p-5 text-center text-white" id="jumbotron">
        <div class="container">
            <div class="col-md-12 d-flex justify-content-center py-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_the_People%27s_Representative_Council_of_Indonesia.svg/286px-Coat_of_arms_of_the_People%27s_Representative_Council_of_Indonesia.svg.png?20191007140542"
                    alt="DPR-RI Logo" width="100">
            </div>
            <h2 class="py-4 text-white">Calon Anggota DPR-RI 2024</h2>
        </div>
    </div>
</template>

<style scoped>
    /* Add custom styles for the HomeView component */
    #jumbotron {
    height: 40vh;
    background-image: url('https://images.unsplash.com/photo-1676970126408-b4103cf7e708?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

#jumbotron h1 {
    font-family: 'Inter', sans-serif;
    color: white;
    
}

@media (max-width: 768px) {
    #jumbotron {
        height: 40vh;
        background-size: cover;
    }
    #jumbotron h1 {
        padding-top: 0vh;
    }
}
</style>