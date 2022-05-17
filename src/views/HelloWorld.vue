<template>
  <div class="container">
    <h1>ToDolist</h1>
    <p>未完成的列表</p>
    <ul>
      <li v-for="(item, index) in state.lists" :key="'lists-' + index">
        <input type="checkbox" v-model="item.checked">
        <span @dblclick="edit(item, index)" v-show="state.showIndex != index">{{ item.name }}</span>
        <input type="text" @blur="sub(index)" v-show="state.showIndex == index" v-model="state.editText">
        <span @click="del(index)">删除</span>
      </li>
    </ul>
    <p>已完成的列表</p>
    <ul>
      <li v-for="(item, index) in state.finished" :key="'finshed-' + index">
        <input type="checkbox" v-model="item.checked" disabled>
        {{ item.name }}
      </li>
    </ul>
    <p>添加</p>
    <input type="text" v-model="state.addText">
    <br>
    <div @click="add">确定添加</div>

  </div>
</template>
<script>
// 1.循环列表
// 2.打钩 显示已完成
import { reactive, toRefs, computed } from 'vue';
export default {
  name: "HelloWorld",
  setup() {
    // 3.增加项
    const add = () => {
      state.lists.push({
        name: state.addText,
        checked: false,
      })
      state.addText = ''
    };
    // 4.编辑内容
    const edit = (item, index) => {
      state.showIndex = index
      state.editText = item.name
    };
    // 4.编辑确定
    const sub = (index) => {
      state.lists[index].name = state.editText
      state.showIndex = 8
    };
    // 5.删除
    const del = (index) => {
      console.log("?5")
     state.lists.splice(index, 1)
    };

    const state = reactive({
      addText: '',
      editText: '',
      lists: [
        {
          name: '1',
          checked: false,
        },
        {
          name: '2',
          checked: false,
        },
        {
          name: '3',
          checked: false,
        },
      ],
      showIndex: 8,
      finished: computed(() => state.lists.filter((item) => item.checked == true)),
    });
    return {
      ...toRefs({
        state,
      }),
      add,
      edit,
      sub,
      del
    };
  }

}
</script>
<style scoped lang="scss">
</style>
