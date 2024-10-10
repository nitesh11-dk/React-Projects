export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
        // lg: ['18px', '21.94px'] means that for the lg (large) size, the font size will be 18px with a line height of 21.94px.
      },
      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
        },
        colors: {
            // instead of black
            "obsidian": "#081215",
            "oil-black": "#0c0c0c",
            "midnight-blue": "#101720",
            "dark-slate-gray": "#0D1717",
            "deep-navy-blue": "#011222",
            "rich-black": "#020D19",
            "charcoal-gray": "#171717",
        
            // instead of white
            "off-white": "#FAF9F6",
            "snow": "#FAFDFF",
            "ivory": "#FFFF00",  // corrected typo
            "alice-blue": "#F0F8FF",  // corrected typo
            "ghost-white": "#F8F8FF"
        } ,        
        screens: {
          "wide": "1440px"
        }
      },
    },
    plugins: [],
  }