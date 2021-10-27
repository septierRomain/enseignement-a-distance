import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalAds() {
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
        Publicité
      </Header>
      <Modal.Content>
        <p>
          <h4>Dès lors qu'elles ont pour finalité la promotion d'un bien ou d'un service, sont des prestations de publicité, les opérations qui consistent notamment :</h4>
          <ol><Icon name='angle right' className='tick'/>à concevoir différents projets de campagnes publicitaires et à conseiller sur le choix du projet définitif.</ol>
          <ol><Icon name='angle right' className='tick'/>à fournir des conseils dans l'élaboration d'une politique publicitaire, dans la sélection des supports publicitaires, dans l'organisation d'une campagne publicitaire.</ol>
          <ol><Icon name='angle right' className='tick'/>à céder ou à louer un espace publicitaire.</ol>
          <ol><Icon name='angle right' className='tick'/>à assurer la diffusion d'annonces, de formules ou de textes publicitaires.</ol>
          <ol><Icon name='angle right' className='tick'/>à fabriquer ou à faire fabriquer des supports publicitaires : films, photographies, messages radiodiffusés ou télévisés, documents divers (affiches, catalogues, brochures, prospectus, etc), objets destinés à être distribués gratuitement.</ol>
          <ol><Icon name='angle right' className='tick'/>à vendre des biens en vue de leur distribution gratuite aux consommateurs à l'occasion de jeux, loterie, concours, etc.</ol>
          <ol><Icon name='angle right' className='tick'/>à organiser des manifestations diverses de relations publiques : cocktails, banquets, séances récréatives, séminaires, conférences de presse, etc.</ol>
          <ol><Icon name='angle right' className='tick'/>à promouvoir l'action de l'annonceur (promotion de l'image de marque de l'organisme, diffusion d'informations sur la vie de l'organisme, sa politique commerciale, etc).</ol>
          <hr />
          <h5>Les opérations en cause peuvent être réalisées de manière isolée ou dans le cadre d'une campagne publicitaire.</h5>
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

export default ModalAds;