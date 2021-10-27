import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalElectronic() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button circular size='mini' basic color='teal' animated='vertical' className='infos'>
          <Button.Content hidden> + d'infos</Button.Content>
          <Button.Content visible>
            <Icon name='idea' />
          </Button.Content>
        </Button>}
    >
      <Header icon>
        <Icon name='idea' />
        Services fournis par voie électronique
      </Header>
      <Modal.Content>
        <p>
          <h4>Ils doivent satifaire 4 critéres cumulatifs :</h4>
          <ol><Icon name='angle right' className='tick'/>Les services sont fournis sur l’Internet ou sur un réseau électronique.</ol>
          <ol><Icon name='angle right' className='tick'/>La prestation est largement automatisée : cela signifie que la prestation est principalement réalisée au moyen de machines, notamment d’ordinateurs.</ol>
          <ol><Icon name='angle right' className='tick'/>L’intervention humaine est minimale au niveau du prestataire.</ol>
          <ol><Icon name='angle right' className='tick'/>La prestation est impossible à assurer en l’absence de technologies de l’information. </ol>
          <hr />
          <h4>Exemples de services :</h4>
          <ol>Fourniture, hébergement de sites informatiques + maintenance à distance de programmes d'équipements</ol>
          <ol>Fourniture et mise à jour de logiciels</ol>
          <ol>Fourniture d'images, de textes et d'informations</ol>
          <ol>Fourniture de musiques, de films et de jeux et d'émissions ou de manifestations politiques, culturelles, artistiques, sportives, scientifiques ou de divertissement</ol>
          <ol>Fourniture de services d'enseignement à distance</ol>
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalElectronic