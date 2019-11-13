import Typography from 'gatsby-plugin-typography'


const typography = new Typography({
    baseFontSize: "12px",
    baseLineHeight: 1.666,
    googleFonts: {
        name: 'Lora',
        style: [
            '700',
            '400',
            '400i'
        ]
    },
    headerFontFamily: ["Lora", "serif"],
    bodyFontFamily: ["Lora", "serif"]
})  

typography.injectStyles()

export default typography;