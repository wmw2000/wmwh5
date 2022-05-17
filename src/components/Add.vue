<template>
    <div class="form-group">
        <label for="exampleInputEmail1">添加待办事项</label>
        <input type="text" v-model="inputValue" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp" @keydown.enter="add(inputValue)">
        <small id="emailHelp" class="form-text text-muted">回车即可加入</small>
    </div>
    <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in todos" :key="'todos-' + index">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">{{ item }}</label>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { computed, defineComponent, ref, reactive } from 'vue';
import store from '../store'
export default defineComponent({
    setup() {
        const inputValue = ref('')
        const add = (value: string) => {
            if (value.trim() === '') return
            store.commit('add',value)
            inputValue.value = ''
        }
        return reactive({
            inputValue,
            todos: computed(() => store.state.todos),
            add
        })
    }
})
</script>

<style scoped>
</style>