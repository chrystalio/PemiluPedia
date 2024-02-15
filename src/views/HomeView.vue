<template>
    <div>
        <div class="p-5 text-center text-white" id="jumbotron">
            <div class="container">
                <div class="row my-2 d-flex justify-content-between">
                    <div class="col-md-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/KPU_Logo.svg" alt="KPU Logo" width="80">
                    </div>
                    <div class="col-md-6">
                        <img src="https://www.lezen.id/assets/img/Logo_Pemilu_Sarana_Integrasi_Bangsa_2024.svg" alt="" width="100">
                    </div>
                </div>
                <h1 class=" text-white">Direktori Calon Legislatif untuk Pemilu 2024</h1>
                <p class="col-lg-8 mx-auto lead">
                    PemiluPedia: Situs web yang menampilkan daftar calon legislatif dari DPR-RI, DPD, dan DPRD. Temukan
                    informasi lengkap tentang calon-calon yang akan berpartisipasi dalam pemilihan legislatif
                </p>
            </div>
        </div>
        <div class="p-5">
            <div class="row py-lg-5 my-lg-4">
                <div class="col-lg-3">
                    <router-link to="/dpr-ri" class="text-decoration-none">
                        <div class="card mb-4 p-2 shadow-sm mb-lg-0">
                        <div class="card-body">
                            <div class="pb-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_the_People%27s_Representative_Council_of_Indonesia.svg/286px-Coat_of_arms_of_the_People%27s_Representative_Council_of_Indonesia.svg.png?20191007140542" alt="DPR-RI Logo" width="70">
                            </div>
                            <h5 class="card-title
                            text-body-emphasis">DPR-RI</h5>
                            <p class="card-text">
                                List Caleg DPR-RI 2024
                            </p>
                        </div>
                    </div>
                    </router-link>
                </div>
                <div class="col-lg-3">
                    <div class="card mb-4 p-2 shadow-sm mb-lg-0">
                        <div class="card-body">
                            <div class="pb-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Coat_of_arms_of_the_Regional_Representative_Council_of_Indonesia.svg" alt="DPD-RI Logo" width="70">
                            </div>
                            <h5 class="card-title
                            text-body-emphasis">DPD-RI</h5>
                            <p class="card-text">
                                List Caleg DPD-RI 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card mb-4 p-2 shadow-sm mb-lg-0">
                        <div class="card-body">
                            <div class="pb-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lambang_DPRD_Generik.png/1024px-Lambang_DPRD_Generik.png" alt="DPRD Logo" width="70">
                            </div>
                            <h5 class="card-title
                            text-body-emphasis">DPRD Provinsi</h5>
                            <p class="card-text">
                                List Caleg DPRD Provinsi 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card mb-4 p-2 shadow-sm mb-lg-0">
                        <div class="card-body">
                            <div class="pb-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lambang_DPRD_Generik.png/1024px-Lambang_DPRD_Generik.png" alt="DPRD Logo" width="70">
                            </div>
                            <h5 class="card-title
                            text-body-emphasis">DPRD Kabupaten/Kota</h5>
                            <p class="card-text">
                                List Caleg DPRD Kabupaten/Kota 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
    }
</script>

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
    text-align: center;
}

#jumbotron p {
    font-family: 'Inter', sans-serif;
    color: white;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5;
    padding-top: 2vh;
}

@media (max-width: 768px) {
    #jumbotron {
        height: 90vh;
        background-size: cover;
    }
    #jumbotron h1 {
        padding-top: 0vh;
    }

    #jumbotron p {
        padding-top: 2vh;
    }
}
</style>