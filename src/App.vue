<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
import HeadingComponent from "./components/HeadingComponent.vue"
import ButtonComponent from './components/ButtonComponent.vue';
import ListItemComponent from './components/ListItemComponent.vue';

const _isloading = ref(true)
const _data = ref([])
const _averagescore = ref(0)
const _linkdata = reactive({
    _linktext: "Continue",
    _linkurl: "#"
})

const fetchData = async () => {
    try {
        const response = await fetch("./assets/data.json");
        const jsonData = await response.json();
        _data.value = jsonData;
        _isloading.value = false;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

onMounted(() => fetchData())

watch(_data, (newValue, _data) => {
    let totalScore = newValue.map(el => el.score).reduce((a, c) => a + c, 0)
    return _averagescore.value = Math.round(totalScore / newValue.length)
})

</script>

<template>

    <HeadingComponent :average_score="_averagescore" />
    <main>
        <h1 class="text-lg font-extrabold">Summary</h1>
        <div>
            <h3 v-if="_isloading">Loading ... </h3>
            <ul v-else>
                <ListItemComponent :summary_details="_data" />
            </ul>
        </div>
        <ButtonComponent :link_label="_linkdata._linktext" :link_url="_linkdata._linkurl" />
    </main>

</template>