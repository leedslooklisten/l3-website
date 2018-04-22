<template>
  <div class='top-bar'>
    <div class='left'>
      <slot name='left' class='left'></slot>
    </div>
    <div class='center'>
      <slot name='center'></slot>
    </div>
    <div class='right'>
      <slot name='right'></slot>
    </div>
  </div>
</template>
<script src='./top-bar.js'></script>
<style src='./top-bar.scss' lang='scss' scoped></style>
