import {useTheme} from '../themes/ThemeContext.jsx'

const Button = () => {
    const {toggleTheme} = useTheme()
    return <Button onclick={toggleTheme}>Cambia el tema</Button>
}

export default Button;