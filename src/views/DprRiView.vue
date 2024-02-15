<template>
    <div>
        <!-- Jumbotron section -->
        <div class="p-5 text-center text-white" id="jumbotron">
            <div class="container">
                <div class="col-md-12 d-flex justify-content-center my-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Coat_of_arms_of_the_People%27s_Representative_Council_of_Indonesia.svg/286px-Coat_of_arms_of_the_People%27s_Representative_Council_of_Indonesia.svg.png?20191007140542"
                        alt="DPR-RI Logo" width="100">
                </div>
                <h2 class="py-4 text-white">Calon Anggota DPR-RI 2024</h2>
            </div>
        </div>

        <!-- DapilDropdown section -->
        <div class="container my-4">
            <DapilDropdown :dapilList="dapilList" @dapil-selected="handleDapilSelected" />
        </div>
        <div class="container my-5">
            <div v-if="selectedDapilData">
                <div class="row">
                    <div v-for="(candidate, index) in selectedDapilData" :key="index" class="col-lg-4 col-md-5 col-12 mx-md-3 mx-lg-0">
                        <div class="card mb-3 rounded" style="max-width: 500px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img :src="candidate['pasFoto']" class="img-fluid w-full rounded" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h6 id="nama">{{ candidate['nomorUrut'] }}. {{ candidate['nama'] }}</h6>
                                        <p>
                                            <span id="nama-dapil">
                                                {{ candidate['namaDapil'] }}
                                            </span>
                                            <br>
                                            <span id="pekerjaan">
                                                {{ candidate['pekerjaan'] }}
                                            </span>
                                            <br>
                                            <span id="namaPartai">
                                                {{  candidate['namaPartai'] }}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import DapilDropdown from '@/components/DapilDropdown.vue';

    export default {
        components: {
            DapilDropdown,
        },
        data() {
            return {
                dapilList: [],
                selectedDapilData: null
            };
        },
        mounted() {
            this.fetchDapilList();
        },
        methods: {
            async fetchDapilList() {
                try {
                    const response = await axios.get('https://caleg.zakiego.com/api/dpr-ri/dapil/list');
                    if (response.data.status === 'success') {
                        this.dapilList = response.data.data;
                    } else {
                        console.error('Failed to fetch dapil list:', response.data.message);
                    }
                } catch (error) {
                    console.error('Error fetching dapil list:', error);
                }
            },
            async handleDapilSelected(selectedDapilId) {
                try {
                    // Make an HTTP request to fetch data for the selected Dapil using its ID
                    const dapilUrl = `https://caleg.zakiego.com/api/dpr-ri/dapil/${selectedDapilId}`;
                    const response = await axios.get(dapilUrl);
                    this.selectedDapilData = response.data.data;

                } catch (error) {
                    console.error('Error fetching dapil data:', error);
                }
            },
        },
    };
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
    }

    #nama {
        font-family: 'Inter', sans-serif;
        font-size: 14px;
    }

    #nama-dapil {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
    }

    #namaPartai {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
    }

    #pekerjaan {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
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
