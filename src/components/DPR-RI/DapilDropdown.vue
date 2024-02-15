<template>
    <select class="form-select" v-model="selectedDapil" @change="handleDistrictChange">
        <option value="" class="text-center">Silahkan Memilih Dapil</option>
        <option v-for="district in dapilList" :value="district.id" :key="district.id">{{ district.namaDapil }}
        </option>
    </select>
</template>

<script>
    export default {
        data() {
            return {
                selectedDapil: '',
            };
        },
        props: {
            dapilList: {
                type: Array,
                required: true,
                validator: (value) => Array.isArray(value),
            },
        },
        methods: {
            handleDistrictChange() {
                this.$emit('dapil-selected', this.selectedDapil);
            },
        },
    };
</script>