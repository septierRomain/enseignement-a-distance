import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalTelecommunications() {
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
        Prestations de télécommunication
      </Header>
      <Modal.Content>
        <p>
          <ol><Icon name='angle right' className='tick'/>Les services de téléphonie fixe et mobile pour la transmission et la commutation de la voix, de données et d’images, y compris les services téléphoniques comportant une composante d’imagerie (services de vidéophonie)</ol>
          <ol><Icon name='angle right' className='tick'/>Les services téléphoniques fournis par internet, y compris le protocole de téléphonie vocale par internet (VoIP)</ol>
          <ol><Icon name='angle right' className='tick'/>La messagerie vocale, l’appel en instance, le transfert d’appel, l’identification de l’appelant, la conversation à trois et les autres services de gestion d’appels</ol>
          <ol><Icon name='angle right' className='tick'/>Les services de radiomessagerie</ol>
          <ol><Icon name='angle right' className='tick'/>Les services d'audio-texte, la télécopie, le télégraphe et le télex</ol>
          <ol><Icon name='angle right' className='tick'/>L’accès à l’internet, y compris le World Wide Web</ol>
          <ol><Icon name='angle right' className='tick'/>Les connexions privées fournissant des liens de télécommunication à l’usage exclusif du preneur</ol>
          <ol><Icon name='angle right' className='tick'/>Les frais forfaitaires de raccordement, de transfert et de cession d'abonnement</ol>
          <ol><Icon name='angle right' className='tick'/>Les redevances d'abonnement</ol>
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

export default ModalTelecommunications