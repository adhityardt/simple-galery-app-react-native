import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import PropsType from 'prop-types';
import styles from './index.style';

const ModalCustom = props => {
  const {visible, closeModal} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          closeModal();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Picture not found!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => closeModal()}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

ModalCustom.propTypes = {
  visible: PropsType.bool,
  closeModal: PropsType.func,
};

ModalCustom.defaultProps = {
  visible: false,
};

export default ModalCustom;
