<template>
  <div class='page-container'>
    <Menu
      :is-visible='isMenuVisible'
      :items='routes'
      @close-menu='closeMenu'
    >
      <router-link
        exact
        slot-scope='{item}'
        :to='item.route'
        @click.native='onClose'
      >
        {{ item.text }}
      </router-link>
    </Menu>
    <div
      class='page'
      :class='{ shifted: isMenuVisible }'
    >
      <div
        class='overlay'
        @click='closeMenu'
      />
      <TopBar>
        <Button
          slot='left'
          @click.native='showMenu'
        >
          menu
        </Button>
        <router-link
          slot='center'
          class='top-bar-logo'
          to='/'
          exact
        >
          <img
            src='@/assets/leeds-logo-white.png'
            alt='l e e d s'
          >
        </router-link>
        <router-link
          slot='right'
          to='/cart'
          exact
        >
          cart
        </router-link>
      </TopBar>
      <div class='page-body'>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script src='./page.js'></script>
<style src='./page.scss' lang='scss' scoped></style>
