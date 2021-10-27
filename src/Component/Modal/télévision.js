import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalTelevision() {
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
        Prestations de radiodiffusion et de télévision
      </Header>
      <Modal.Content>
        <p>
          <ol><Icon name='angle right' className='tick'/>Les programmes de radio ou de télévision transmis ou retransmis sur un réseau de radiodiffusion ou de télévision </ol>
          <ol><Icon name='angle right' className='tick'/> Les programmes de radio ou de télévision diffusés via l’internet ou un réseau électronique analogue (IP), s’ils sont retransmis, simultanément à leur diffusion, sur un réseau de radiodiffusion ou de télévision.</ol>
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

export default ModalTelevision