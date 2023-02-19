import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/theme-providers'
import { themeDecor } from 'shared/config/storybook/decorators'
import { Sidebar } from './Sidebar'

export default {
  title: 'widgets/ButSidebarton',
  component: Sidebar
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.decorators = [themeDecor(Theme.DARK)]
Dark.args = {}
