<template>
  <div>
    <m-choose-icon v-model:visible="visible" title="选择图标">选择图标</m-choose-icon>
    <!-- <m-choose-time 
      @startChange="startChange" 
      @endChange="endChange" 
      :startOption="startOption" 
      :endOption="endOption"
    ></m-choose-time> -->
    
  </div>
</template>

<script lang='ts' setup>
import {ref} from "vue"

let visible = ref<boolean>(false)

interface endValue {
  startTime: string,
  endTime: string
}
let startChange= (val: string)=> {
  console.log('val: ', val);

}
let endChange= (val: endValue)=> {
  console.log('val: ', val);
}

let startOption = {
  size :'small',
  clearable: false
}

let endOption = {

}


// 日期

interface endDateValue {
  startDate: string,
  endDate: string
}

let startDateChange = (val: string)=> {
  console.log('val: ', val);

}
let endDateChange = (val: endDateValue)=> {
  console.log('val: ', val);
}
</script>

<style lang="scss" scoped></style>
