export type Props = {
    card: {
        id: string
        name: string
        description: string
        price: string
    },
    isOpen: boolean,
    onClose: () => void | boolean,
}
