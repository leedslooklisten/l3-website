<template>
  <div class='menu-container' :class='{ visible: isVisible }'>
    <div class='menu'>
      <div class='menu-header'>
        <div>close</div>
        <div>checkout</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script src='./menu.js'></script>
<style src='./menu.scss' lang='scss' scoped></style>
