import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {addDeckSagaAC} from '../../redux/ActionCreators/deck/addDeckAC'
import { useHistory } from 'react-router-dom';

function NewDeck() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory()
const addDeck = (e:any) => {
dispatch(addDeckSagaAC(e.title))
history.push('/account');
}
  return (
    <div>
      
    
      <Form style={{ width: '50%' }} onSubmit={handleSubmit(addDeck)}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Название колоды</Form.Label>
          <Form.Control
            {...register('title')}
            required
            className="form-control"
            id="inputEmail3"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
           Создать
        </Button>
      </Form>
    </div>
  );
}

export default NewDeck;
