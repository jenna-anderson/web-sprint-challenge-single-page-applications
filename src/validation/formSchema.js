import * as yup from 'yup'

const formSchema = yup.object().shape( {
    customerName: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['Small', 'Medium', 'Large'], 'Size is required'),
    sauce: yup
        .string()
        .oneOf(['originalRed', 'garlicRanch', 'bbq', 'spinachAlfredo'], 'Sauce is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    blackOlives: yup.boolean(),
    mushroom: yup.boolean(),
    pineapple: yup.boolean(),
    artichokeHearts: yup.boolean(),
    specialInstructions: yup
        .string()
        .trim()
})

export default formSchema
