import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { themeDecor } from 'shared/config/storybook/decorators'
import { Modal } from './Modal'
import { Theme } from 'app/providers/theme-providers'

export default {
  title: 'ui/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: 'text text text text text text text text',
  container: document.getElementById('root')
}

export const Secondary = Template.bind({})
Secondary.decorators = [themeDecor(Theme.DARK)]
Secondary.args = {
  isOpen: true,
  children: 'text text text text text text text text',
  container: document.getElementById('root')
}
