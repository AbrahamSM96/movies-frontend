import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  CustomInput,
} from 'reactstrap';
import { Button } from './styles';
import { GoPlus } from 'react-icons/go';
const SIZE = '32px';

const AddButton = ({ idMovie, handleSetMovie, handleSetList, lists }) => {
  // const [addMovie, setAddMovie] = useLocalStorage(key, false);
  // const [addList, setAddList] = useLocalStorageList(keyList, lists);
  // const Icon = addMovie ? GoCheck : GoPlus;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Button onClick={() => toggle()} id={idMovie}>
        <GoPlus size={SIZE} /> My List
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <FormGroup>
            <Label for='exampleCustomSelect'>Select list</Label>
            <CustomInput
              type='select'
              id='exampleCustomSelect'
              name='customSelect'
              onChange={handleSetList}
            >
              <option value=''>Select the list</option>
              {lists.map((list) =>
                list ? (
                  <option value={list.name} key={list.id}>
                    {list.name}
                  </option>
                ) : (
                  <Fragment>
                    <p>Don`t have movies</p>
                  </Fragment>
                )
              )}
            </CustomInput>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              handleSetMovie(), toggle();
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
    lists: state.lists,
  };
};

export default connect(mapStateToProps, null)(AddButton);
