import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { addList, inputAddList } from '../../actions';
import { GoPlus } from 'react-icons/go';
import { Button } from './styles';
const SIZE = '32px';

const AddListButton = (props) => {
  const [modal, setModal] = useState(false);

  const handleInputList = (event) => {
    props.inputAddList(event.target.value);
  };

  const handleAddList = () => {
    props.addList();
  };

  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Button onClick={toggle}>
        <GoPlus size={SIZE} /> Add list
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <FormGroup>
            <Label for='exampleCustomSelect'>Add list</Label>
            <Input
              type='text'
              name='newList'
              id='newList'
              placeholder='Add list'
              onChange={handleInputList}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              toggle(), handleAddList();
            }}
          >
            Add
          </Button>
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    inputAddList: state.inputAddList,
  };
};

const mapDispatchToProps = {
  addList,
  inputAddList,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListButton);
