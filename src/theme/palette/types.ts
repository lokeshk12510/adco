import React from "react";

declare module '@mui/material/styles' {


    interface Theme {
        white: {
          main: React.CSSProperties['color'];
          dark: React.CSSProperties['color'];
          light: React.CSSProperties['color'];
        };
        black: {
          main: React.CSSProperties['color'];
          dark: React.CSSProperties['color'];
          light: React.CSSProperties['color'];
        };
      }


    interface Palette {
        neutral: Palette['primary'];
        customColors: {
            main: React.CSSProperties['color']
            tableHeaderBg: React.CSSProperties['color']
            primaryGradient: React.CSSProperties['color']
            header:{
                background:React.CSSProperties['color']
                textColor:React.CSSProperties['color']
                height:string
            };
            sidebar:{
                background: React.CSSProperties['color'];
                boxShadow: React.CSSProperties['color'];
                textColor: React.CSSProperties['color'];
                dividerBg: React.CSSProperties['color'];
                menuItemColor: React.CSSProperties['color'];
                menuItemColorActive: React.CSSProperties['color'];
                menuItemBg: React.CSSProperties['color'];
                menuItemBgActive: React.CSSProperties['color'];
                menuItemIconColor: React.CSSProperties['color'];
                menuItemIconColorActive: React.CSSProperties['color'];
                menuItemHeadingColor: React.CSSProperties['color'];
                shrinkWidth:string
                expandWidth:string
            }  
        };
        white:{
            main:React.CSSProperties['color'],
            dark:React.CSSProperties['color'],
            light:React.CSSProperties['color']
        }
        black:{
            main:React.CSSProperties['color'],
            dark:React.CSSProperties['color'],
            light:React.CSSProperties['color']
        }
    }

    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        customColors?: {
            main?: React.CSSProperties['color']
            tableHeaderBg?: React.CSSProperties['color']
            primaryGradient?: React.CSSProperties['color']
            header?:{
                background?:React.CSSProperties['color']
                textColor?:React.CSSProperties['color']
                height?:string
            };
            sidebar?:{
                background?: React.CSSProperties['color'];
                boxShadow?: React.CSSProperties['color'];
                textColor?: React.CSSProperties['color'];
                dividerBg?: React.CSSProperties['color'];
                menuItemColor?: React.CSSProperties['color'];
                menuItemColorActive?: React.CSSProperties['color'];
                menuItemBg?: React.CSSProperties['color'];
                menuItemBgActive?: React.CSSProperties['color'];
                menuItemIconColor?: React.CSSProperties['color'];
                menuItemIconColorActive?: React.CSSProperties['color'];
                menuItemHeadingColor?: React.CSSProperties['color'];
                shrinkWidth?:string
                expandWidth?:string
            }  
        };
        white?:{
            main?:React.CSSProperties['color'],
            dark?:React.CSSProperties['color'],
            light?:React.CSSProperties['color']
        }
        black?:{
            main?:React.CSSProperties['color'],
            dark?:React.CSSProperties['color'],
            light?:React.CSSProperties['color']
        }
    }
}


declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      neutral: true;
    }
  }

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
      neutral: true;
    }
  }
