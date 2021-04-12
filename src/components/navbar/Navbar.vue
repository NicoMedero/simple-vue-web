<template>
  <div id="navbar">
      <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand class="navbar-main-title" href="#">Vendemos Todo</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto navbar-items">
                    <b-nav-item href="#">Tecno</b-nav-item>
                    <b-nav-item href="#">Forniture</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
  </div>
</template>

<script src="./navbar.js" />

<style src="./navbar.css" />