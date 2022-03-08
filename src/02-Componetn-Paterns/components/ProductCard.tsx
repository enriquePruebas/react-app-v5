import { createContext, ReactElement, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
    style?:CSSProperties
}
export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProduct(0);
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
