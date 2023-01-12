// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'
// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const Toast = defineStyleConfig({
    baseStyle: {
        background: "#161616"
    }
})

// 3. extend the theme
const theme = extendTheme({ 
    config,
    styles: {
        global: (props: any) => ({
            body: {

                bg:  "#161616"
            } 
        }) 
    },
    components: {
        Toast
    }
 })

export default theme
