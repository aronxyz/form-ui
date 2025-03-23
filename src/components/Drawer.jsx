import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import AsideNav from './AsideNav'

const Drawer = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild className='drawer-trigger'>
                <button className='icon-button'><Menu /></button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='drawer-overlay' />
                <Dialog.Content className='drawer-content'>
                    <Dialog.Title className='drawer-title'><h5>Browse components</h5></Dialog.Title>
                    <Dialog.Close asChild className='drawer-close'>
                        <button className='icon-button'><X /></button>
                    </Dialog.Close>
                    <AsideNav />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default Drawer
