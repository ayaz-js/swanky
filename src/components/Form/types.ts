export type Props = {
    card: {
        id: string
        name: string
        price: string
    },
    isOpen: boolean,
    onClose: () => void,
}
