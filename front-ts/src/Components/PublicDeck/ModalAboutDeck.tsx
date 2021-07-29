import { Modal, Button } from 'react-bootstrap';
import { CardType } from '../../redux/types/card/cardTypes';

export default function ModalAboutDeck(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.deck.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>{props.deck.title}</h4> */}
        {props.deck.cards.map((card: any) => {
          return (
            <p>
              {card.question}
              <br />
              {card.answer}
              <hr />
            </p>
          );
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
}
