<script setup lang="ts">
import { ref } from 'vue';

import { Anchor, Footer, Header, Logo, Nav, NavItem } from '@pbotapps/common';

const menuOpen = ref(false);
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans">
    <Header color="white" :open="menuOpen" @toggle="menuOpen = !menuOpen">
      <template #branding>
        <router-link to="/" class="w-full flex items-center">
          <Logo class="w-16 md:w-20 mr-3 flex-shrink-0" />
          <span class="truncate text-xl">App</span>
        </router-link>
      </template>
    </Header>
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 mt-4">
      <router-view />
    </main>
    <Footer color="gray" variant="light">
      <template #middle>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Nav title="General information">
            <NavItem>
              <Anchor url="//portland.gov">City of Portland</Anchor>
            </NavItem>
            <NavItem>
              <Anchor url="//portland.gov/transportation"
                >Portland Bureau of Transportation</Anchor
              >
            </NavItem>
          </Nav>
        </div>
      </template>
    </Footer>
  </div>
</template>

<style>
.prose {
  max-width: 72ex;
}
</style>
