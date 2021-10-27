import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalAssujetti() {
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
        ASSUJETTI TVA
      </Header>
      <Modal.Content>
        <p>
        Sont assujetties à la TVA les personnes qui effectuent de manière indépendante une des activités économiques.
        Les activités économiques  se définissent comme toutes les activités de producteur, de commerçant ou de prestataire de services, y compris les activités  des professions libérales ou assimilées.
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

export default ModalAssujetti