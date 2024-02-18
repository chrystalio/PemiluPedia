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
            <div v-if="paginatedCandidates">
                <div class="row">
                    <div v-for="(candidate, index) in paginatedCandidates" :key="index"
                        class="col-lg-4 col-md-5 col-12 mx-md-3 mx-lg-0">
                        <div class="card mb-3 rounded" style="max-width: 500px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img :src="candidate['pasFoto']" class="img-fluid w-full rounded" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h6 id="nama">{{ candidate['nomorUrut'] }}. {{ candidate['nama'] }}</h6>
                                        <p>
                                            <span class="candidate-info"
                                                id="nama-dapil">{{ candidate['namaDapil'] }}</span><br>
                                            <span class="candidate-info"
                                                id="agama">{{ candidate['agama'] ? candidate['agama'] : '-' }}
                                            </span><br>
                                            <span class="candidate-info"
                                                id="pekerjaan">{{ candidate['pekerjaan'] ? candidate['pekerjaan'] : '-' }}</span><br>
                                            <span class="candidate-info"
                                                id="namaPartai">{{ candidate['namaPartai'] ? candidate['namaPartai'] : '-' }}</span><br>
                                            <span class="candidate-info"
                                                id="statusDisabilitas">{{ candidate['statusDisabilitas'] ? candidate['statusDisabilitas'] : '-' }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container my-2">
            <nav aria-label="Page navigation">
                <ul class="pagination justify-content-end">
                    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                        <a class="page-link" href="#" aria-label="Previous" @click="prevPage">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <!-- Display ellipsis if currentPage > 3 -->
                    <li v-if="currentPage > 3" class="page-item disabled">
                        <span class="page-link">...</span>
                    </li>
                    <!-- Display fixed number of visible pages -->
                    <li v-for="pageNumber in visiblePages" :key="pageNumber"
                        :class="{ 'active': pageNumber === currentPage }">
                        <a class="page-link" href="#" @click="goToPage(pageNumber)">{{ pageNumber }}</a>
                    </li>
                    <!-- Display ellipsis if currentPage < totalPages - 2 -->
                    <li v-if="currentPage < totalPages - 2" class="page-item disabled">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                        <a class="page-link" href="#" aria-label="Next" @click="nextPage">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import DapilDropdown from '@/components/DPR-RI/DapilDropdown.vue'

    export default {
        components: {
            DapilDropdown,
        },
        data() {
            return {
                dapilList: [],
                selectedDapilData: null,
                currentPage: 1,
                pageSize: 12, // Number of items per page
                maxVisiblePages: 5, // Maximum number of visible pages in the pagination
            };
        },
        mounted() {
            this.fetchDapilList();
        },
        computed: {
            totalPages() {
                if (this.selectedDapilData) {
                    return Math.ceil(this.selectedDapilData.length / this.pageSize);
                }
                return 0;
            },
            visiblePages() {
                const startPage = Math.max(1, this.currentPage - Math.floor(this.maxVisiblePages / 2));
                const endPage = Math.min(this.totalPages, startPage + this.maxVisiblePages - 1);
                return Array.from({
                    length: endPage - startPage + 1
                }, (_, i) => startPage + i);
            },
            paginatedCandidates() {
                if (this.selectedDapilData) {
                    const startIndex = (this.currentPage - 1) * this.pageSize;
                    const endIndex = startIndex + this.pageSize;
                    return this.selectedDapilData.slice(startIndex, endIndex);
                }
                return [];
            }
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
            prevPage() {
                if (this.currentPage > 1) {
                    this.currentPage--;
                }
            },
            nextPage() {
                if (this.currentPage < this.totalPages) {
                    this.currentPage++;
                }
            },
            goToPage(pageNumber) {
                this.currentPage = pageNumber;
            }
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

    .candidate-info {
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
