import Vue from 'vue'

export type LoadingType = 'balls' | 'bars' | 'beat' | 'bubbles' | 'cylon' | 'spin' | 'spiningDubbles' | 'barsCylon'

export function install (vue: typeof Vue): void

export class vueLoading extends Vue {}

