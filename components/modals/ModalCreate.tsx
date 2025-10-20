import { Button, Modal } from "react-native"
import FormCreate from "../forms/FormCreate"
interface ModalPropsType {
    show: boolean,
    handleShow: () => void
}
const ModalCreate = ({ show, handleShow }: ModalPropsType) => {
    return (
        <Modal visible={show}>
            <FormCreate />
            <Button title="Cerrar" onPress={handleShow}></Button>
        </Modal>
    );
};
export default ModalCreate;