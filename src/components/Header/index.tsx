import logoImg from '../../assets/logo.svg'
import { NewTransictionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova Transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransictionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
