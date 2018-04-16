<template>
  <div>
    <Menu :is-visible='isMenuVisible' />
    <div class='not-menu'>
      <div
        v-if='isMenuVisible'
        class='overlay'
        @click='showHideMenu'
      />
      <TopBar>
        <div slot='left' @click='showHideMenu'>Menu</div>
        <div slot='center'>Logo</div>
        <div slot='right'>Checkout</div>
      </TopBar>
      <div
        class='page-body'
        @click='showHideMenu'
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script src='./page.js'></script>
<style src='./page.scss' lang='scss' scoped></style>
