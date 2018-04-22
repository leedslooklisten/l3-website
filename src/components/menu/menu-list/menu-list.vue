<template>
  <div class='menu-list'>
    <div class='list-container'>
      <ul>
        <li
          v-for='item in items'
          :key='item.id'
        >
          <slot scoped v-bind:item='item'>
            {{ item.text }}
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
<script src='./menu-list.js'></script>
<style src='./menu-list.scss' lang='scss' scoped></style>
