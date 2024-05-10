import { createContext, useState } from "react";


export const PrefernceContext = createContext();

export const PrefernceProvider = ({ children }) => { 

    const [ fabricType ] = useState(['Cotton',
    'Denim',
    'Polyester',
    'Cotton Twill',
    'Leather',
    'Fleece',
    'Silk',
    'Merino Wool',
    'Wool Blend',
    'Chiffon',
    'Acrylic',
    'Velvet',
    'Linen',
    'Satin',
    'Corduroy',
    'Lace',
    'Wool'])
    const [ colours ] = useState(['White',
    'Blue',
    'Multicolor',
    'Khaki', 
    'Black',
    'Grey',
    'Green', 
    'Yellow',
    'Red',
    'Brown',
    'Pink',
    'Purple',
    'Orange',])
    const [ designs] = useState([ 'Print Design',
    'Woven Design',
    'Knitted Design',
    'Non-Woven Design',
    'Embroidery Design',
    'Digital Textile Design',
    'Fashion Textile Design',
    'Home Textile Design'])
    const [ status ] = useState(['Lead', 
    'Prospect', 
    'Repeat Customer'])
    const [ sources ] = useState(['Facebook', 
    'Instagram', 
    'Twitter', 
    'LinkedIn', 
    'Google', 
    'Others'])


    return (
        <PrefernceContext.Provider value={{ fabricType, colours, designs, status, sources  }} >
            {children}
        </PrefernceContext.Provider>
    )
}