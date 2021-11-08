import NavHeader from './Header';
import styles from './scss/layout.module.scss';
const Layout = ({children})=>{
    return(
        <div className={styles['container']}>
            <NavHeader></NavHeader>
            {children}
        </div>
    )
}

export default Layout;