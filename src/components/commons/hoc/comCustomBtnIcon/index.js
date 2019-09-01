
import IconButton from '@material-ui/core/IconButton';

const comCustomBtnIcon = ComponenteBase => ({
    children,
    onClick
}) => (
    <IconButton
        onClick={onClick}
        color='inherit'>
        <ComponenteBase>
            {children}
        </ComponenteBase>
    </IconButton>
);

export default comCustomBtnIcon;
