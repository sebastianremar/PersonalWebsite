import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        text: {
          primary: {
            value: { _light: '{colors.gray.800}', _dark: 'white' },
          },
          secondary: {
            value: { _light: '{colors.gray.600}', _dark: '{colors.gray.300}' },
          },
          subtitle: {
            value: { _light: '{colors.gray.600}', _dark: '{colors.gray.400}' },
          },
          muted: {
            value: { _light: '{colors.gray.500}', _dark: '{colors.gray.500}' },
          },
        },
        bg: {
          page: {
            value: { _light: '{colors.gray.50}', _dark: '{colors.gray.900}' },
          },
          nav: {
            value: { _light: 'white', _dark: '{colors.gray.900}' },
          },
        },
        border: {
          subtle: {
            value: { _light: '{colors.gray.200}', _dark: '{colors.gray.700}' },
          },
          default: {
            value: { _light: '{colors.gray.300}', _dark: '{colors.gray.700}' },
          },
        },
        icon: {
          default: {
            value: { _light: '#4A5568', _dark: '#718096' },
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
