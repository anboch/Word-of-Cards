import React from 'react';
import {
  Card,
  ListGroup,
  ListGroupItem,
  ProgressBar,
  Badge,
  Button,
} from 'react-bootstrap';
import { DeckType } from '../../redux/types/deck/deckTypes';

export default function Deck({ deck }: { deck: DeckType }) {
  return (
    <div>
      <Card style={{ width: '18rem', borderRadius: '15px', margin: '2rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title>{deck.title}</Card.Title>
          {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>30/200 выучено</ListGroupItem>
          <ListGroupItem>50 на запоминании</ListGroupItem>
          <ListGroupItem>25 готовы к повторению</ListGroupItem>
          <ListGroupItem>
            <ProgressBar>
              <ProgressBar variant="success" now={15} key={1} />
              <ProgressBar variant="info" now={25} key={2} />
              <ProgressBar variant="warning" now={12} key={2} />
            </ProgressBar>
          </ListGroupItem>
          <ListGroupItem>
            <Badge pill bg="primary">
              Личная колода
            </Badge>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="success">Учить</Button>{' '}
          <Button variant="secondary">Редактировать</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
