export const state = () => ({
  theme: 'default',
  defaults: {
    theme: [
      {
        value: 'default',
        name: 'Dark theme',
        'bgcolor-main': '#121212',
        'bgcolor-alt': '#1a1a1a',
        'bgcolor-alt-light': '#484848',
        'bgcolor-translucent': '#0000007c',
        'error-color-green': '#4caf50',
        'error-color-red': '#d93025',
        'theme-color': '#f1570a',
        'theme-color-light': '#f5af19',
        'theme-color-dark': '#f12711',
        'theme-color-alt': '#108dc7',
        'theme-color-translucent': '#f1570a80',
        'line-color': 'rgba(255, 255, 255, 0.2)',
        'line-accent-color': 'rgba(255, 255, 255, 0.4)',
        'theme-color-gradient':
          `linear-gradient(
            53deg,
            rgba(241, 87, 10, 1) 0%,
            rgba(224, 140, 112, 1) 33%,
            rgba(89, 193, 186, 1) 78%,
            rgba(0, 212, 255, 1) 100%
          )`,
        'shadow-load-color': '#535353b6',
        'header-bgcolor': '#272727',
        'header-transparent': '#00000000',
        'title-color': '#ebebeb',
        'subtitle-color': '#d8d8d8',
        'subtitle-color-light': '#b3b3b3',
        darkness: 'invert(90%)',
        'gradient-opacity': 1
      },
      {
        value: 'light',
        name: 'Light theme',
        'bgcolor-main': '#ffffff',
        'bgcolor-alt': '#ffffff',
        'bgcolor-alt-light': '#dadada',
        'bgcolor-translucent': '#ffffff7c',
        'error-color-green': '#4caf50',
        'error-color-red': '#d93025',
        'theme-color': '#f1570a',
        'theme-color-light': '#f5af19',
        'theme-color-dark': '#f12711',
        'theme-color-alt': '#108dc7',
        'theme-color-translucent': '#f1570a80',
        'line-color': 'rgba(255, 255, 255, 0.2)',
        'line-accent-color': 'rgba(255, 255, 255, 0.4)',
        'theme-color-gradient':
          `linear-gradient(
            53deg,
            rgba(241, 87, 10, 1) 0%,
            rgba(224, 140, 112, 1) 33%,
            rgba(89, 193, 186, 1) 78%,
            rgba(0, 212, 255, 1) 100%
          )`,
        'shadow-load-color': '#535353b6',
        'header-bgcolor': '#ffffff',
        'header-transparent': '#ffffff',
        'title-color': '#080808',
        'subtitle-color': '#333333',
        'subtitle-color-light': '#4e4e4e',
        darkness: 'invert(0%)',
        'gradient-opacity': 0
      },
      {
        value: 'dark-no-gradient',
        name: 'Dark theme without background gradients',
        'bgcolor-main': '#121212',
        'bgcolor-alt': '#1a1a1a',
        'bgcolor-alt-light': '#484848',
        'bgcolor-translucent': '#0000007c',
        'error-color-green': '#4caf50',
        'error-color-red': '#d93025',
        'theme-color': '#f1570a',
        'theme-color-light': '#f5af19',
        'theme-color-dark': '#f12711',
        'theme-color-alt': '#108dc7',
        'theme-color-translucent': '#f1570a80',
        'line-color': 'rgba(255, 255, 255, 0.2)',
        'line-accent-color': 'rgba(255, 255, 255, 0.4)',
        'theme-color-gradient':
          `linear-gradient(
          53deg,
          rgba(241, 87, 10, 1) 0%,
          rgba(224, 140, 112, 1) 33%,
          rgba(89, 193, 186, 1) 78%,
          rgba(0, 212, 255, 1) 100%
        )`,
        'shadow-load-color': '#535353b6',
        'header-bgcolor': '#272727',
        'header-transparent': '#00000000',
        'title-color': '#ebebeb',
        'subtitle-color': '#d8d8d8',
        'subtitle-color-light': '#b3b3b3',
        darkness: 'invert(90%)',
        'gradient-opacity': 0
      },
      {
        value: 'black',
        name: 'Black theme',
        'bgcolor-main': '#000000',
        'bgcolor-alt': '#1a1a1a',
        'bgcolor-alt-light': '#484848',
        'bgcolor-translucent': '#0000007c',
        'error-color-green': '#4caf50',
        'error-color-red': '#d93025',
        'theme-color': '#f1570a',
        'theme-color-light': '#f5af19',
        'theme-color-dark': '#f12711',
        'theme-color-alt': '#108dc7',
        'theme-color-translucent': '#f1570a80',
        'line-color': 'rgba(255, 255, 255, 0.2)',
        'line-accent-color': 'rgba(255, 255, 255, 0.4)',
        'theme-color-gradient':
          `linear-gradient(
          53deg,
          rgba(241, 87, 10, 1) 0%,
          rgba(224, 140, 112, 1) 33%,
          rgba(89, 193, 186, 1) 78%,
          rgba(0, 212, 255, 1) 100%
        )`,
        'shadow-load-color': '#535353b6',
        'header-bgcolor': '#272727',
        'header-transparent': '#00000000',
        'title-color': '#ebebeb',
        'subtitle-color': '#d8d8d8',
        'subtitle-color-light': '#b3b3b3',
        darkness: 'invert(100%)',
        'gradient-opacity': 1
      },
      {
        value: 'green',
        name: 'Dark green theme',
        'bgcolor-main': '#121212',
        'bgcolor-alt': '#1a1a1a',
        'bgcolor-alt-light': '#484848',
        'bgcolor-translucent': '#0000007c',
        'error-color-green': '#4caf50',
        'error-color-red': '#d93025',
        'theme-color': '#06b300',
        'theme-color-light': '#60c25c',
        'theme-color-dark': '#1da019',
        'theme-color-alt': '#108dc7',
        'theme-color-translucent': '#f1570a80',
        'line-color': 'rgba(255, 255, 255, 0.2)',
        'line-accent-color': 'rgba(255, 255, 255, 0.4)',
        'theme-color-gradient':
          `linear-gradient(
            53deg,
            rgba(6, 179, 0, 1) 0%,
            rgb(104, 207, 101) 33%,
            rgba(89, 193, 186, 1) 78%,
            rgba(0, 212, 255, 1) 100%
          )`,
        'shadow-load-color': '#535353b6',
        'header-bgcolor': '#272727',
        'header-transparent': '#00000000',
        'title-color': '#ebebeb',
        'subtitle-color': '#d8d8d8',
        'subtitle-color-light': '#b3b3b3',
        darkness: 'invert(100%)',
        'gradient-opacity': 0
      }
    ]
  },
  miniplayer: true
})
export const getters = {
  theme: (state) => state.theme,
  defaultThemes: (state) => state.defaults.theme,
  miniplayer: (state) => state.miniplayer
}
export const mutations = {
  setTheme(state, theme) {
    if (state.defaults.theme.find(e => e.value === theme)) {
      state.theme = theme
    }
  },
  setMiniplayer(state, enabled) {
    state.miniplayer = enabled
  }
}
