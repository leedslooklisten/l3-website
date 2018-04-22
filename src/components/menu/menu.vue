<template>
  <div class='menu-container' :class='{ visible: isVisible }'>
    <div
      class='overlay'
    />
      <div class='menu'>
        <div class='menu-header'>
          <Button @click.native='onClose'>
            close
          </Button>
          <router-link
            to='/cart'
            @click.native='onClose'
          >
            cart
          </router-link>
        </div>
        <div class='menu-body'>
          <MenuList
            :items='items'
          >
            <template
              slot-scope='{item}'
            >
              <slot :item='item'></slot>
            </template>
          </MenuList>
          <div class='image-container'>
            <picture>
              <source
                srcset='https://picsum.photos/300/300?random' media='(min-width: 600px)'
              />
              <img
                src='data:'
              >
            </picture>
          </div>
        </div>
      </div>
    </div>
</template>
<script src='./menu.js'></script>
<style src='./menu.scss' lang='scss' scoped></style>
