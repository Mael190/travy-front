<template>
    <div class="dropdown">
      <button @click="toggleDropdown">
        {{ selectedOption || options[defaultOption].name }}
        <img v-if="isDropdownOpen" class="arrow" src="@/assets/fi_chevron-up.svg" alt="V">
        <img v-if="!isDropdownOpen" class="arrow" src="@/assets/fi_chevron-down.svg" alt="V">
      </button>
      <ul v-if="isDropdownOpen">
        <li v-for="option in options" :key="option.id" @click="selectOption(option)">{{ option.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DropDown',
    data() {
      return {
        isDropdownOpen: false,
        selectedOption: null,
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      selectOption(option) {
        this.selectedOption = option.name;
        this.isDropdownOpen = false;
      }
    },
    props: {
        options: Array,
        defaultOption: Number
    }
  };
  </script>
  
  <style>
  .arrow {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
  .dropdown button {
    position: relative;
    border: none;
    background-color: #fff;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    font-family: 'Red Hat Display', sans-serif;
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .2), 0 1px 2px -1px rgb(0 0 0 / .2);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
    height: 39px;
  }
  .dropdown ul {
    position: absolute;
    top: 37px;
    left: 10px;
    width: calc(100% - 20px);
    padding: 0;
    margin: 0;
    list-style: none;
    border-radius: 5px;
    background-color: #fff;
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
    
  }
  .dropdown li {
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 18px;
  }
  .dropdown li:hover {
    background-color: #f1f1f1;
  }
  </style>
  