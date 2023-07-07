export type Props = {
    card: {
        id: string
        name: string
        description: string
        price: string
        imagesSlider: string
    },
    isOpen: boolean,
    onClose: () => void | boolean,
}
