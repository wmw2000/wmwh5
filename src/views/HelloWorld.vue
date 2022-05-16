import { reactive } from 'vue';
<template>
  <div class="container">
    <h1>ToDolist</h1>
    <p>未完成的列表</p>
    <ul>
      <li v-for="(item, index) in state.lists" :key="index" @dblclick="edit" @click="item.checked = !item.checked">
        <input type="checkbox" v-model="item.checked">
        {{ item.name }}
        <input type="text" v-model="editText">
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
// 3.增加项
// 4.编辑内容
// 5.删除
import { reactive, toRefs, computed } from 'vue';
export default {
  name: "HelloWorld",
  setup() {
    const add = () => {
      console.log("ti")
      state.lists.push({
        name: state.addText,
        checked: false,
      })
      state.addText = ''
    };
    const edit = () => {
      console.log("ti")
      state.lists.push({
        name: state.addText,
        checked: false,
      })
      state.addText = ''
    };
    const state = reactive({
      addText: '',
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
      finished: computed(() => state.lists.filter((item) => item.checked == true)),
      // add,
    });
    return {
      ...toRefs({
        state,
      }), add,edit
    };
  }

}
</script>
<style scoped lang="scss">
</style>
