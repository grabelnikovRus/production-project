import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme-providers'
import { themeDecor } from 'shared/config/storybook/decorators'
import { Navbar } from './Navbar'

export default {
  title: 'widgets/Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.decorators = [themeDecor(Theme.DARK)]
Dark.args = {}
