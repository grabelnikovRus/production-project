import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { themeDecor } from 'shared/config/storybook/decorators'
import { AppLink } from './AppLink'
import { Theme } from 'app/providers/theme-providers'

export default {
  title: 'ui/AppLink',
  component: AppLink
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: 'secondary',
  children: 'text',
  to: '/'
}

export const Secondary = Template.bind({})
Secondary.decorators = [themeDecor(Theme.DARK)]
Secondary.args = {
  theme: 'primary',
  children: 'text',
  to: '/about'
}
