export interface ProductDisplayProps {
    handleClick?: () => void
    image: string
    title: string
    active: boolean
}

export type SizeType = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

export interface ProductData {
    image: string
    title: string
    description?: string
    size?: SizeType
    color: string[]
    prize: string
}

export interface ProductSwiperProps {
    handleActive?: (index: string) => void
    activeProduct?: ProductData
    product: ProductData[]
}
