import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ModalImaterial() {
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
        Prestations immatérielles
      </Header>
      <Modal.Content>
        <p>
          <ol><Icon name='angle right' className='tick'/>Cessions et concessions de droits d'auteurs, de brevets, de droits de licences, de marques de fabrique et de commerce et d'autres droits similaires.</ol>
          <ol><Icon name='angle right' className='tick'/>Locations de biens meubles corporels autres que des moyens de transport.</ol>
          <ol><Icon name='angle right' className='tick'/>Prestations de publicité.</ol>
          <ol><Icon name='angle right' className='tick'/>Prestations des conseillers, ingénieurs, bureaux d'études dans tous les domaines y compris ceux de l'organisation de la recherche et du développement</ol>
          <ol><Icon name='angle right' className='tick'/>Prestations des experts-comptables.</ol>
          <ol><Icon name='angle right' className='tick'/>Traitement de données et fournitures d'information</ol>
          <ol><Icon name='angle right' className='tick'/>Opérations bancaires, financières, d’assurance ou de réassurance</ol>
          <ol><Icon name='angle right' className='tick'/>Mise à disposition de personnel</ol>
          <a target='_blank' rel="noreferrer" href='https://bofip.impots.gouv.fr/bofip/1495-PGP.html/identifiant%3DBOI-TVA-CHAMP-20-50-50-20190925'>Plus d'infos</a>
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

export default ModalImaterial